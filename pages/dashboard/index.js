import React from "react";
import styles from "./Dashboard.module.scss";
import TrainingSummary from "../../components/dashboard/TrainingSummary/TrainingSummary";
import RecommendedTrainings from "../../components/dashboard/RecommendedTrainings/RecommendedTrainings";
import ActiveCourseCard from "../../components/dashboard/ActiveCourseCard/ActiveCourseCard";
import DashboardHeader from "../../components/dashboard/DashBoardHeader/DashboardHeader";
import NavBar from "../../components/dashboard/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Dashboard() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const router = useRouter();

  const dashboardContainerStyles = `${styles.dashboardContainerLightTheme} ${
    isDarkMode && styles.dashboardContainerDarkTheme
  }`;

  const activeCourseDetails = {
    id: 0,
    title: "Zippee Rider Onboarding Training that works amazingly well",
    numberOfVideos: 10,
    numberOfQuizzes: 12,
    totalLessons: 10,
    currentLesson: 3,
    progress: 40,
    onClick: () => {
      router.push(`/training-overview/${0}`);
    },
  };

  const dummyTrainings = [
    {
      id: 1,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 30,
      onClick: () => {
        router.push(`/training-overview/${1}`);
      },
    },
    {
      id: 2,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 20,
      onClick: () => {
        router.push(`/training-overview/${2}`);
      },
    },
    {
      id: 3,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 30,
      onClick: () => {
        router.push(`/training-overview/${3}`);
      },
    },
    {
      id: 4,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 20,
      onClick: () => {
        router.push(`/training-overview/${4}`);
      },
    },
  ];

  return (
    <div className={dashboardContainerStyles}>
      <DashboardHeader />

      <ActiveCourseCard activeCourseDetails={activeCourseDetails} />

      <TrainingSummary />

      <RecommendedTrainings dummyTrainings={dummyTrainings} />

      <NavBar />
    </div>
  );
}

export default Dashboard;
