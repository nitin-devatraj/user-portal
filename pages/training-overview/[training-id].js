import React from "react";
import styles from "./TrainingOverview.module.scss";
import PrimaryButton from "../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import TrainingContent from "../../components/training-overview/TrainingContent/TrainingContent";
import TrainingHeader from "../../components/training-overview/TrainingHeader/TrainingHeader";
import TrainingDetails from "../../components/training-overview/TrainingDetails/TrainingDetails";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function TrainingOverview() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const router = useRouter();

  const startTrainingBtnHandler = () => {
    const firstLessonId = chapterList[0].lessonsList[0].id;
    const firstLessonName = chapterList[0].lessonsList[0].name;
    const firstLessonType = chapterList[0].lessonsList[0].type;
    const firstChapterId = chapterList[0].id;

    router.push(
      `/lesson-card/${firstChapterId}/${firstLessonId}/${firstLessonName}/${firstLessonType}`
    );
  };

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

  const trainingOverviewContainerStyles = `${
    styles.trainingOverviewContainerLightTheme
  } ${isDarkMode && styles.trainingOverviewContainerDarkTheme}`;

  return (
    <div className={trainingOverviewContainerStyles}>
      <div className={styles.trainingOverview}>
        <TrainingHeader />
        <TrainingDetails />
        <TrainingContent chapterList={chapterList} />
      </div>

      <PrimaryButton onClick={startTrainingBtnHandler}>
        Start Your Training
      </PrimaryButton>
    </div>
  );
}

export default TrainingOverview;
