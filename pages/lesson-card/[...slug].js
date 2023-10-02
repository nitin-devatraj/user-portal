import React, { useEffect, useState } from "react";
import styles from "./LessonCard.module.scss";
import PrimaryButton from "../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import LessonCardHeader from "../../components/lesson-card/LessonCardHeader/LessonCardHeader";
import LessonHeader from "../../components/lesson-card/LessonHeader/LessonHeader";
import MinimizedQuizPopup from "../../components/lesson-card/MinimizedQuizPopup/MinimizedQuizPopup";
import VideoLesson from "../../features/VideoLesson/VideoLesson";
import AssessmentLesson from "../../features/AssessmentLesson/AssessmentLesson";
import DocumentLesson from "../../features/DocumentLesson/DocumentLesson";
import AudioLesson from "../../features/AudioLesson/AudioLesson";
import QuizLesson from "../../features/QuizLesson/QuizLesson";
import Quiz from "../../features/QuizLesson/Quiz/Quiz";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function LessonCard() {
  const [isQuizCardup, setIsQuizCardup] = useState(false);
  const [isMinimizedQuizCardUp, setIsMinimizedQuizCardUp] = useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const router = useRouter();
  const [chapterId, lessonId, lessonName, lessonType] = router.query.slug;
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const chapterList = [
    {
      id: 1,
      chapterName: "chapter 1",
      lessonsList: [
        {
          id: 1,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            router.push(`/lesson-card/${1}/${1}/${"Quiz lesson"}/${"quiz"}`);
          },
        },
        {
          id: 2,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            router.push(
              `/lesson-card/${1}/${2}/${"Assessment lesson"}/${"assessment"}`
            );
          },
        },
        {
          id: 3,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            router.push(`/lesson-card/${1}/${3}/${"Video lesson"}/${"video"}`);
          },
        },
      ],
    },
    {
      id: 2,
      chapterName: "chapter 2",
      lessonsList: [
        {
          id: 4,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            router.push(
              `/lesson-card/${2}/${4}/${"Document lesson"}/${"document"}`
            );
          },
        },
        {
          id: 5,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            router.push(`/lesson-card/${2}/${5}/${"Audio lesson"}/${"audio"}`);
          },
        },
      ],
    },

    {
      id: 3,
      chapterName: "chapter 3",
      lessonsList: [
        {
          id: 6,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            router.push(`/lesson-card/${3}/${6}/${"Quiz lesson"}/${"quiz"}`);
          },
        },
        {
          id: 7,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            router.push(
              `/lesson-card/${3}/${7}/${"Assessment lesson"}/${"assessment"}`
            );
          },
        },
        {
          id: 8,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            router.push(`/lesson-card/${3}/${8}/${"Video lesson"}/${"video"}`);
          },
        },
      ],
    },
    {
      id: 4,
      chapterName: "chapter 4",
      lessonsList: [
        {
          id: 9,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            router.push(
              `/lesson-card/${4}/${9}/${"Document lesson"}/${"document"}`
            );
          },
        },
        {
          id: 10,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            router.push(`/lesson-card/${4}/${10}/${"Audio lesson"}/${"audio"}`);
          },
        },
      ],
    },

    {
      id: 5,
      chapterName: "chapter 5",
      lessonsList: [
        {
          id: 11,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            router.push(`/lesson-card/${5}/${11}/${"Quiz lesson"}/${"quiz"}`);
          },
        },
        {
          id: 12,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            router.push(
              `/lesson-card/${5}/${12}/${"Assessment lesson"}/${"assessment"}`
            );
          },
        },
        {
          id: 13,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            router.push(`/lesson-card/${5}/${13}/${"Video lesson"}/${"video"}`);
          },
        },
      ],
    },
    {
      id: 6,
      chapterName: "chapter 2",
      lessonsList: [
        {
          id: 14,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            router.push(
              `/lesson-card/${6}/${14}/${"Document lesson"}/${"document"}`
            );
          },
        },
        {
          id: 15,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            router.push(`/lesson-card/${6}/${15}/${"Audio lesson"}/${"audio"}`);
          },
        },
      ],
    },

    {
      id: 7,
      chapterName: "chapter 7",
      lessonsList: [
        {
          id: 16,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            router.push(`/lesson-card/${7}/${16}/${"Quiz lesson"}/${"quiz"}`);
          },
        },
        {
          id: 17,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            router.push(
              `/lesson-card/${7}/${17}/${"Assessment lesson"}/${"assessment"}`
            );
          },
        },
        {
          id: 18,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            router.push(`/lesson-card/${7}/${18}/${"Video lesson"}/${"video"}`);
          },
        },
      ],
    },
    {
      id: 8,
      chapterName: "chapter 8",
      lessonsList: [
        {
          id: 19,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            router.push(
              `/lesson-card/${8}/${19}/${"Document lesson"}/${"document"}`
            );
          },
        },
        {
          id: 20,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            router.push(`/lesson-card/${8}/${20}/${"Audio lesson"}/${"audio"}`);
          },
        },
      ],
    },

    {
      id: 9,
      chapterName: "chapter 9",
      lessonsList: [
        {
          id: 21,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            router.push(`/lesson-card/${9}/${21}/${"Quiz lesson"}/${"quiz"}`);
          },
        },
        {
          id: 22,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            router.push(
              `/lesson-card/${9}/${22}/${"Assessment lesson"}/${"assessment"}`
            );
          },
        },
        {
          id: 23,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            router.push(`/lesson-card/${9}/${23}/${"Video lesson"}/${"video"}`);
          },
        },
      ],
    },
    {
      id: 10,
      chapterName: "chapter 10",
      lessonsList: [
        {
          id: 24,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            router.push(
              `/lesson-card/${10}/${24}/${"Document lesson"}/${"document"}`
            );
          },
        },
        {
          id: 25,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            router.push(
              `/lesson-card/${10}/${25}/${"Audio lesson"}/${"audio"}/`
            );
          },
        },
      ],
    },
  ];

  const quizzes = [
    {
      id: 1,
      name: "What is the color of the sky during the day",
      options: ["Blue", "Red", "Green", "Yellow"],
      correctAnswer: "Blue",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "The sky appears blue during the day due to the scattering of sunlight by air molecules.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While the sky is blue during the day, the other options do not represent the typical sky color.",
    },
    {
      id: 2,
      name: "How many fingers do most humans have on one hand",
      options: ["Five", "Three", "Ten", "Two"],
      correctAnswer: "Five",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Most humans have five fingers on one hand, including the thumb, index finger, middle finger, ring finger, and pinky finger.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Five.' Most humans have five fingers on one hand.",
    },
    {
      id: 3,
      name: "What is the opposite of 'up'",
      options: ["Down", "Left", "Right", "Front"],
      correctAnswer: "Down",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "The opposite of 'up' is 'down,' which refers to the direction toward the ground or lower position.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While the correct answer is 'Down,' the other options do not represent the opposite of 'up.'",
    },
    {
      id: 4,
      name: "Which animal says 'meow'",
      options: ["Cat", "Dog", "Elephant", "Lion"],
      correctAnswer: "Cat",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Cats are known to make a 'meow' sound. It's a common vocalization for them.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Cat,' as they are the animals that typically say 'meow.'",
    },
    {
      id: 5,
      name: "What do you use to write on paper",
      options: ["Pencil", "Spoon", "Shoe", "Phone"],
      correctAnswer: "Pencil",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "A pencil is a writing tool used to create marks on paper. It usually uses graphite as the writing material.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While there are various tools, 'Pencil' is the common choice for writing on paper.",
    },
    {
      id: 6,
      name: "What comes after Monday",
      options: ["Tuesday", "Saturday", "Sunday", "Wednesday"],
      correctAnswer: "Tuesday",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Tuesday follows Monday in the sequence of days of the week.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Tuesday,' as it comes right after 'Monday.'",
    },
    {
      id: 7,
      name: "What is the shape of a soccer ball",
      options: ["Round", "Square", "Triangle", "Oval"],
      correctAnswer: "Round",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "A soccer ball is typically spherical or 'round' in shape.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While there are various shapes, a 'Round' shape is common for soccer balls.",
    },
    {
      id: 8,
      name: "Which season comes after winter",
      options: ["Spring", "Summer", "Fall", "Autumn"],
      correctAnswer: "Spring",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Spring follows the winter season in the seasonal sequence.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Spring,' as it is the season that comes after 'Winter.'",
    },
    {
      id: 9,
      name: "What is the primary color of grass",
      options: ["Green", "Red", "Blue", "Yellow"],
      correctAnswer: "Green",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Grass is typically 'green' in color, owing to the presence of chlorophyll in its cells.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Green,' as it represents the primary color of grass.",
    },
    {
      id: 10,
      name: "What do you use to protect your head from rain",
      options: ["Umbrella", "Shovel", "Sunglasses", "Hat"],
      correctAnswer: "Umbrella",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "An 'Umbrella' is used to protect your head from rain by providing a waterproof cover.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While there are other items, an 'Umbrella' is commonly used for rain protection.",
    },
  ];

  const quizStartingPageData = {
    totalQuestions: 10,
    timeInSec: 45,
    attemptsAllowed: 3,
    passingScore: 40,
  };

  const currentLessonId = +lessonId;
  const currentChapterId = +chapterId;

  const currentChapter = chapterList.find((chapter) => {
    return chapter.id === currentChapterId;
  });

  const currentChapterIndex = chapterList.findIndex((chapter) => {
    return chapter.id === currentChapterId;
  });

  const nextChapterIndex = currentChapterIndex + 1;
  const prevChapterIndex = currentChapterIndex - 1;

  const currentLessonIndex = currentChapter.lessonsList.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  const prevLessonIndex = currentLessonIndex - 1;
  const nextLessonIndex = currentLessonIndex + 1;

  const prevLesson =
    prevLessonIndex >= 0 ? currentChapter.lessonsList[prevLessonIndex] : null;

  const nextLesson =
    nextLessonIndex < currentChapter.lessonsList.length
      ? currentChapter.lessonsList[nextLessonIndex]
      : null;

  useEffect(() => {
    if (currentChapterIndex === 0 && currentLessonIndex === 0) {
      setIsPrevButtonDisabled(true);
    }
  }, [currentChapterIndex, currentLessonIndex]);

  const startQuizHandler = () => {
    setIsTimerRunning(true);
    setTimeLeft(60);
    setIsQuizCardup(true);
  };

  const quizMinimizeHandler = () => {
    setIsTimerRunning(false);
    setIsQuizCardup(false);
    setIsMinimizedQuizCardUp(true);
  };

  const quizMaximizeHandler = () => {
    setIsTimerRunning(true);
    setIsQuizCardup(true);
    setIsMinimizedQuizCardUp(false);
  };

  const closeQuizPopups = () => {
    setIsQuizCardup(false);
    setIsMinimizedQuizCardUp(false);
  };

  const handlePrevLessonClick = () => {
    closeQuizPopups();
    setQuizIndex(0);

    if (prevLesson !== null) {
      setIsPrevButtonDisabled(false);
      setIsNextButtonDisabled(false);

      router.push(
        `/lesson-card/${currentChapterId}/${prevLesson.id}/${prevLesson.name}/${prevLesson.type}`
      );
    } else if (prevChapterIndex >= 0 && prevChapterIndex < chapterList.length) {
      const prevChapter = chapterList[prevChapterIndex];
      const lastLessonOfPrevChapter =
        prevChapter.lessonsList[prevChapter.lessonsList.length - 1];
      router.push(
        `/lesson-card/${prevChapter.id}/${lastLessonOfPrevChapter.id}/${lastLessonOfPrevChapter.name}/${lastLessonOfPrevChapter.type}`
      );
    } else {
      setIsPrevButtonDisabled(true);
    }
  };

  const handleNextLessonClick = () => {
    closeQuizPopups();
    setQuizIndex(0);

    if (nextLesson !== null) {
      setIsPrevButtonDisabled(false);
      setIsNextButtonDisabled(false);

      router.push(
        `/lesson-card/${currentChapterId}/${nextLesson.id}/${nextLesson.name}/${nextLesson.type}`
      );
    } else if (nextChapterIndex >= 0 && nextChapterIndex < chapterList.length) {
      const nextChapter = chapterList[nextChapterIndex];
      const firstLessonOfNextChapter = nextChapter.lessonsList[0];
      router.push(
        `/lesson-card/${nextChapter.id}/${firstLessonOfNextChapter.id}/${firstLessonOfNextChapter.name}/${firstLessonOfNextChapter.type}`
      );
    } else {
      setIsNextButtonDisabled(true);
    }
  };

  const lessonCardContainerStyles = `${styles.lessonCardContainerLightTheme} ${
    isDarkMode && styles.lessonCardContainerDarkTheme
  }`;

  return (
    <div className={lessonCardContainerStyles}>
      <LessonCardHeader />
      <div className={styles.lessonCard}>
        <div className={styles.lesson}>
          <LessonHeader
            lessonType={lessonType}
            onPrevClick={handlePrevLessonClick}
            onNextClick={handleNextLessonClick}
            isPrevBtnDisabled={isPrevButtonDisabled}
            isNextBtnDisabled={isNextButtonDisabled}
          />
          {lessonType === "video" && <VideoLesson orientation="portrait" />}
          {lessonType === "assessment" && <AssessmentLesson />}
          {lessonType === "document" && <DocumentLesson />}
          {lessonType === "audio" && <AudioLesson />}
          {lessonType === "quiz" && (
            <QuizLesson
              totalQuestions={quizStartingPageData.totalQuestions}
              timeInSec={quizStartingPageData.timeInSec}
              attemptsAllowed={quizStartingPageData.attemptsAllowed}
              passingScore={quizStartingPageData.passingScore}
            />
          )}

          {isQuizCardup === true && (
            <Quiz
              quizzes={quizzes}
              onQuizMinimize={quizMinimizeHandler}
              onNextLessonClick={handleNextLessonClick}
              isTimerRunning={isTimerRunning}
              setIsTimerRunning={setIsTimerRunning}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              quizIndex={quizIndex}
              setQuizIndex={setQuizIndex}
            />
          )}
        </div>

        {lessonType === "quiz" ? (
          <PrimaryButton onClick={startQuizHandler}>Start Quiz</PrimaryButton>
        ) : (
          <PrimaryButton onClick={handleNextLessonClick}>
            Mark as Done
          </PrimaryButton>
        )}

        {isMinimizedQuizCardUp === true && (
          <MinimizedQuizPopup
            onQuizMaximizise={quizMaximizeHandler}
            lessonName={lessonName}
          />
        )}
      </div>
    </div>
  );
}

export default LessonCard;
