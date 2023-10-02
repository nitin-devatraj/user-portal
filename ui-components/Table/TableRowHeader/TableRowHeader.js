import React from "react";
import styles from "./TableRowHeader.module.scss";
import StatusIcon from "../StatusIcon/StatusIcon";

function TableRowHeader({ columnNames, isDarkMode }) {
  const tableRowHeaderStyles = `${styles.tableRowHeaderLightTheme} ${
    isDarkMode && styles.tableRowHeaderDarkTheme
  }`;

  const nameColumnStyles = `${styles.nameColumnHeaderLightTheme} ${
    isDarkMode && styles.nameColumnHeaderDarkTheme
  }`;

  const statusColumnStyles = `${styles.statusColumnHeaderLightTheme} ${
    isDarkMode && styles.statusColumnHeaderDarkTheme
  }`;

  const roleColumnStyles = `${styles.roleColumnHeaderLightTheme} ${
    isDarkMode && styles.roleColumnHeaderDarkTheme
  }`;

  const emailColumnStyles = `${styles.emailColumnHeaderLightTheme} ${
    isDarkMode && styles.emailColumnHeaderDarkTheme
  }`;

  const teamsColumnStyles = `${styles.teamsColumnHeaderLightTheme} ${
    isDarkMode && styles.teamsColumnHeaderDarkTheme
  }`;

  const deleteColumnStyles = `${styles.deleteColumnHeaderLightTheme} ${
    isDarkMode && styles.deleteColumnHeaderDarkTheme
  }`;

  const editColumnStyles = `${styles.editColumnHeaderLightTheme} ${
    isDarkMode && styles.editColumnHeaderDarkTheme
  }`;

  return (
    <tr className={tableRowHeaderStyles}>
      <th className={nameColumnStyles}>{columnNames[0]}</th>
      <th className={statusColumnStyles}>
        {columnNames[1]} <StatusIcon isDarkMode={isDarkMode} />
      </th>
      <th className={roleColumnStyles}>{columnNames[2]}</th>
      <th className={emailColumnStyles}>{columnNames[3]}</th>
      <th className={teamsColumnStyles}>{columnNames[4]}</th>
      <th className={deleteColumnStyles}></th>
      <th className={editColumnStyles}></th>
    </tr>
  );
}

export default TableRowHeader;
