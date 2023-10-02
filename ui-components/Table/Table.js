import React, { useState } from "react";
import styles from "./Table.module.scss";
import TableRowHeader from "./TableRowHeader/TableRowHeader";
import TableRow from "./TableRow/TableRow";
import ArrowRight from "./ArrowRightIcon/ArrowRight";
import { useSelector } from "react-redux";

function Table({ columnNames, tableRows }) {
  const [rows, setRows] = useState(tableRows);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  // pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPageIndex = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleRows = rows.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPageIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const tableRowDeleteHandler = (id) => {
    setRows(rows.filter((item) => item.id !== id));
  };

  const headerStyles = `${styles.headerLightTheme} ${
    isDarkMode && styles.headerDarkTheme
  }`;

  const footerStyles = `${styles.footerLightTheme} ${
    isDarkMode && styles.footerDarkTheme
  }`;

  return (
    <div className={styles.tableContainer}>
      <div className={headerStyles}>table heading</div>
      <table className={styles.table}>
        <thead>
          <TableRowHeader columnNames={columnNames} isDarkMode={isDarkMode} />
        </thead>
        <tbody>
          {visibleRows.map((item) => (
            <TableRow
              item={item}
              key={item.id}
              onDelete={tableRowDeleteHandler}
              isDarkMode={isDarkMode}
            />
          ))}
        </tbody>
      </table>
      <div className={footerStyles}>
        Page {currentPage} of {lastPageIndex}{" "}
        <div className={styles.paginationBtnContainer}>
          <button
            className={styles.paginationBtn}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className={styles.paginationBtn}
            onClick={handleNextPage}
            disabled={currentPage === lastPageIndex}
          >
            Next <ArrowRight isDarkMode={isDarkMode} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
