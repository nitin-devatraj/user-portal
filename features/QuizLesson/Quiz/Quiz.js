import React, { useReducer, useEffect } from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./QuizPopups/ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./QuizPopups/InvalidAnswerPopup/InvalidAnswerPopup";
import TimeoutPopup from "./QuizPopups/TimeoutPopup/TimeoutPopup";
import { useSelector } from "react-redux";

const quizActionTypes = {
  isQuizComplete: "isQuizComplete",
  validAnswerPopup: "validAnswerPopup",
  inValidAnswerPopup: "inValidAnswerPopup",
  timeoutPopup: "timeoutPopup",
  selectedOption: "selectedOption",
  isSelectedAnswerCorrect: "isSelectedAnswerCorrect",
  incrementTriedQuestions: "incrementTriedQuestions",
  incrementRetriedQuestions: "incrementRetriedQuestions",
  addRetriedQuestionsIds: "addRetriedQuestionsIds",
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case quizActionTypes.isQuizComplete:
      return { ...state, isQuizComplete: action.payload };
    case quizActionTypes.validAnswerPopup:
      return { ...state, showValidAnswerPopup: action.payload };
    case quizActionTypes.inValidAnswerPopup:
      return { ...state, showInvalidAnswerPopup: action.payload };
    case quizActionTypes.timeoutPopup:
      return { ...state, showTimeoutPopup: action.payload };
    case quizActionTypes.selectedOption:
      return { ...state, selectedOption: action.payload };
    case quizActionTypes.isSelectedAnswerCorrect:
      return { ...state, isSelectedAnswerCorrect: action.payload };
    case quizActionTypes.incrementTriedQuestions:
      return { ...state, triedQuestions: state.triedQuestions + 1 };
    case quizActionTypes.incrementRetriedQuestions:
      return { ...state, retriedQuestions: state.retriedQuestions + 1 };
    case quizActionTypes.addRetriedQuestionsIds:
      return {
        ...state,
        retriedQuestionIds: [...state.retriedQuestionIds, action.payload],
      };
    default:
      return state;
  }
};

const initialQuizState = {
  isQuizComplete: false,
  showValidAnswerPopup: false,
  showInvalidAnswerPopup: false,
  showTimeoutPopup: false,
  selectedOption: null,
  isSelectedAnswerCorrect: false,
  triedQuestions: 0,
  retriedQuestions: 0,
  retriedQuestionIds: [],
};

function Quiz({
  quizzes,
  onQuizMinimize,
  onNextLessonClick,
  isTimerRunning,
  setIsTimerRunning,
  timeLeft,
  setTimeLeft,
  quizIndex,
  setQuizIndex,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [quizState, quizDispatchFn] = useReducer(quizReducer, initialQuizState);

  const quizTimeoutData = {
    title: "Time Expired",
    text: "Your time is up for this Quiz. Continue to the result page to review your performance",
  };

  const {
    isQuizComplete,
    showValidAnswerPopup,
    showInvalidAnswerPopup,
    showTimeoutPopup,
    selectedOption,
    isSelectedAnswerCorrect,
    triedQuestions,
    retriedQuestions,
    retriedQuestionIds,
  } = quizState;

  const closePopups = () => {
    quizDispatchFn({ type: quizActionTypes.validAnswerPopup, payload: false });
    quizDispatchFn({
      type: quizActionTypes.inValidAnswerPopup,
      payload: false,
    });
  };

  const showTimeoutPopupHandler = () => {
    quizDispatchFn({
      type: quizActionTypes.timeoutPopup,
      payload: true,
    });
  };

  const hideTimeoutPopupHandler = () => {
    quizDispatchFn({
      type: quizActionTypes.timeoutPopup,
      payload: false,
    });
  };

  const quizCompleteHandler = () => {
    quizDispatchFn({
      type: quizActionTypes.timeoutPopup,
      payload: false,
    });
    quizDispatchFn({ type: quizActionTypes.isQuizComplete, payload: true });
  };

  const answerCheckHandler = () => {
    setIsTimerRunning(false);
    const correctAnswer = quizzes[quizIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;
    quizDispatchFn({
      type: quizActionTypes.isSelectedAnswerCorrect,
      payload: isCorrect,
    });

    if (isCorrect) {
      quizDispatchFn({ type: quizActionTypes.validAnswerPopup, payload: true });

      if (!retriedQuestionIds.includes(quizzes[quizIndex].id)) {
        quizDispatchFn({ type: quizActionTypes.incrementTriedQuestions });
      }
    } else {
      quizDispatchFn({
        type: quizActionTypes.inValidAnswerPopup,
        payload: true,
      });

      if (!retriedQuestionIds.includes(quizzes[quizIndex].id)) {
        quizDispatchFn({ type: quizActionTypes.incrementRetriedQuestions });
        quizDispatchFn({
          type: quizActionTypes.addRetriedQuestionsIds,
          payload: quizzes[quizIndex].id,
        });
      }
    }
  };

  const nextQuestionHandler = () => {
    setIsTimerRunning(true);
    closePopups();

    if (quizIndex < quizzes.length - 1) {
      setQuizIndex((prevIndex) => prevIndex + 1);
    } else {
      quizDispatchFn({ type: quizActionTypes.isQuizComplete, payload: true });
    }
  };

  const retryQuestionHandler = () => {
    setIsTimerRunning(true);
    closePopups();
  };

  const optionClickHandler = (option) => {
    if (isTimerRunning) {
      quizDispatchFn({ type: quizActionTypes.selectedOption, payload: option });
    }
  };

  useEffect(() => {
    let timerId;

    if (isTimerRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerId);
      showTimeoutPopupHandler();
    }

    if (isQuizComplete) {
      hideTimeoutPopupHandler();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isTimerRunning, timeLeft, isQuizComplete, setTimeLeft]);

  const quizContainertStyles = `${styles.quizContainerLightTheme} ${
    isDarkMode && styles.quizContainerDarkTheme
  }`;

  return (
    <div className={quizContainertStyles}>
      <div className={styles.quizDetails}>
        <QuizHeader
          onQuizMinimize={onQuizMinimize}
          isQuizComplete={isQuizComplete}
        />

        <QuizProgress
          currentQuestion={quizIndex + 1}
          totalQuestions={quizzes.length}
          timeLeft={timeLeft}
        />

        <IndividualQuiz
          quizName={quizzes[quizIndex].name}
          quizOptions={quizzes[quizIndex].options}
          optionClickHandler={optionClickHandler}
          selectedOption={selectedOption}
          isCorrect={isSelectedAnswerCorrect}
        />

        {isQuizComplete === true && (
          <QuizResult
            totalQuestions={quizzes.length}
            triedQuestions={triedQuestions}
            retriedQuestions={retriedQuestions}
            onNextLessonClick={onNextLessonClick}
          />
        )}
      </div>

      <PrimaryButton onClick={answerCheckHandler}>Check Answer</PrimaryButton>

      {showValidAnswerPopup === true && (
        <ValidAnswerPopup
          onNextQuestion={nextQuestionHandler}
          explanationTitle={quizzes[quizIndex].correctAnswerTitle}
          explanationText={quizzes[quizIndex].correctAnswerText}
        />
      )}

      {showInvalidAnswerPopup === true && (
        <InvalidAnswerPopup
          onRetryQuestion={retryQuestionHandler}
          explanationTitle={quizzes[quizIndex].incorrectAnswerTitle}
          explanationText={quizzes[quizIndex].incorrectAnswerText}
        />
      )}

      {showTimeoutPopup === true && (
        <TimeoutPopup
          timeoutTitle={quizTimeoutData.title}
          timeoutText={quizTimeoutData.text}
          onGoToResults={quizCompleteHandler}
        />
      )}
    </div>
  );
}

export default Quiz;
