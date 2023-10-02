import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/components/table/table-row/active-dot-icon.svg";
import { ReactComponent as InactiveIcon } from "../../../assets/icons/components/table/table-row/inactive-dot-icon.svg";
import { ReactComponent as DraftIcon } from "../../../assets/icons/components/table/table-row/draft-dot-icon.svg";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import EditIcon from "../EditIcon/EditIcon";
import ToggleButton from "../../Buttons/ToggleButton/ToggleButton";

function TableRow({ item, onDelete, isDarkMode }) {
  const firstThreeBadges = item.teams.slice(0, 3);
  const remainingCount = item.teams.length - 3;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [isNameEmpty, setIsNameEmpty] = useState(false);

  const rowDeleteHandler = () => {
    onDelete(item.id);
  };

  const rowEditHandler = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };

  const handleNameBlur = () => {
    if (editedName.trim() === "") {
      setIsNameEmpty(true);
      return;
    }

    setIsEditing(false);
    setIsNameEmpty(false);
  };

  const badgeTypeStyles =
    item.status === "active"
      ? styles.activeBadge
      : item.status === "inactive"
      ? styles.inactiveBadge
      : styles.draftBadge;

  const badgeIcon =
    item.status === "active" ? (
      <ActiveIcon />
    ) : item.status === "inactive" ? (
      <InactiveIcon />
    ) : (
      <DraftIcon />
    );

  const tableRowStyles = `${styles.tableRowLightTheme} ${
    isDarkMode && styles.tableRowDarkTheme
  }`;

  const nameColumnStyles = `${styles.nameColumnLightTheme} ${
    isDarkMode && styles.nameColumnDarkTheme
  }`;

  const statusColumnStyles = `${styles.statusColumnLightTheme} ${
    isDarkMode && styles.statusColumnDarkTheme
  }`;

  const roleColumnStyles = `${styles.roleColumnLightTheme} ${
    isDarkMode && styles.roleColumnDarkTheme
  }`;

  const emailColumnStyles = `${styles.emailColumnLightTheme} ${
    isDarkMode && styles.emailColumnDarkTheme
  }`;

  const teamsColumnStyles = `${styles.teamsColumnLightTheme} ${
    isDarkMode && styles.teamsColumnDarkTheme
  }`;

  const deleteColumnStyles = `${styles.deleteColumnLightTheme} ${
    isDarkMode && styles.deleteColumnDarkTheme
  }`;

  const editColumnStyles = `${styles.editColumnLightTheme} ${
    isDarkMode && styles.editColumnDarkTheme
  }`;

  return (
    <tr className={tableRowStyles}>
      <td className={nameColumnStyles}>
        <div className={styles.nameColumnContainer}>
          <ToggleButton />
          {isEditing ? (
            <div className={styles.name}>
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                onKeyDown={handleInputKeyDown}
                className={styles.input}
              />
              {isNameEmpty && (
                <div className={styles.requiredMessage}>required</div>
              )}
            </div>
          ) : (
            editedName
          )}
        </div>
      </td>
      <td className={statusColumnStyles}>
        <div className={`${styles.badge}  ${badgeTypeStyles}`}>
          {badgeIcon}
          {item.status}
        </div>
      </td>
      <td className={roleColumnStyles}>{item.role}</td>
      <td className={emailColumnStyles}>{item.email}</td>
      <td className={teamsColumnStyles}>
        <div className={styles.badges}>
          {firstThreeBadges.map((item, index) => {
            const badgeGroupStyles =
              index === 0
                ? styles.badgeGroup1
                : index === 1
                ? styles.badgeGroup2
                : styles.badgeGroup5;
            return (
              <div
                key={index}
                className={`${styles.badges} ${badgeGroupStyles}`}
              >
                {item}
              </div>
            );
          })}
          {remainingCount > 0 && (
            <div className={styles.remainingCount}>+{remainingCount}</div>
          )}
        </div>
      </td>
      <td className={deleteColumnStyles}>
        <button className={styles.button} onClick={rowDeleteHandler}>
          <DeleteIcon isDarkMode={isDarkMode} />
        </button>
      </td>
      <td className={editColumnStyles} onClick={rowEditHandler}>
        <button className={styles.button}>
          <EditIcon isDarkMode={isDarkMode} />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
