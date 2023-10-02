import React, { useState } from "react";
import styles from "./TrainingContent.module.scss";
import TabGroup from "../../../ui-components/TabGroup/TabGroup";
import Accordion from "../../../ui-components/Accordion/Accordion";
import { useSelector } from "react-redux";

function TrainingContent({ chapterList }) {
  const tabs = ["About", "Lessons"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleTabSelection = (tabValue) => {
    setSelectedTab(tabValue);
  };

  const trainingAboutSectionStyles = `${
    styles.trainingAboutSectionLightTheme
  } ${isDarkMode && styles.trainingAboutSectionDarkTheme}`;

  return (
    <div className={styles.trainingContentContainer}>
      <TabGroup
        tabs={tabs}
        onTabSelect={handleTabSelection}
        selectedTab={selectedTab}
      />
      {selectedTab === "About" ? (
        <section className={trainingAboutSectionStyles}>
          An About Us page is a section on a website that provides information
          about a company, organization, or individual. It&apos;s a chance to
          tell your brand&apos;s story, share your vision, history, values, and
          achievements, and introduce team members. The About Us page can be the
          first thing a customer looks up and can inspire people to work with
          you or buy your products.
        </section>
      ) : (
        <div className={styles.lessonsAccordianContainer}>
          <Accordion tabs={chapterList} />
        </div>
      )}
    </div>
  );
}

export default TrainingContent;
