import React, { useRef, useState } from "react";
import styles from "./FileInput.module.scss";
import FileUpload from "./UploadIcon/UploadIcon";
import { useSelector } from "react-redux";

const FileInput = ({ accept, supportingText }) => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleFileInputChange = (event) => {
    const files = event.target.files;

    const selectedFile = files[0];
    setSelectedFileName(selectedFile.name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
    const files = event.dataTransfer.files;
    // Handle the dropped files here
    const selectedFile = files[0];
    setSelectedFileName(selectedFile.name);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const fileInputContainerStyles = `${styles.fileInputContainerLightTheme} ${
    isDarkMode && styles.fileInputContainerDarkTheme
  } ${isDraggingOver && styles.dragging}`;

  const textStyles = `${styles.textLightTheme} ${
    isDarkMode && styles.textDarkTheme
  }`;

  const highlightedTextStyles = `${styles.highlightedTextLightTheme} ${
    isDarkMode && styles.highlightedTextDarkTheme
  }`;

  const supportingTextStyles = `${styles.supportingTextLightTheme} ${
    isDarkMode && styles.supportingTextDarkTheme
  }`;

  const iconContainerStyles = `${styles.iconContainerLightTheme} ${
    isDarkMode && styles.iconContainerDarkTheme
  }`;

  return (
    <div
      className={fileInputContainerStyles}
      onClick={openFileInput}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={styles.content}>
        <div className={iconContainerStyles}>
          <FileUpload isDarkMode={isDarkMode} />
        </div>
        <div className={styles.textContainer}>
          <div className={textStyles}>
            {selectedFileName ? (
              <span className={highlightedTextStyles}>{selectedFileName}</span>
            ) : (
              <>
                <span className={highlightedTextStyles}>Click to upload</span>{" "}
                or drag and drop
              </>
            )}
          </div>
          <div className={supportingTextStyles}>{supportingText}</div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className={styles.hiddenInput}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
