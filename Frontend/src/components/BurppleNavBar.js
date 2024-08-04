import React from 'react';

// Define styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between', /* Space between columns and button */
    alignItems: 'center', /* Center items vertically */
    margin: '10px',
    gap: '5px', /* Space between columns */
    overflowX: 'auto', /* Allows horizontal scrolling if necessary */
  },
  columnsWrapper: {
    display: 'flex',
    flexDirection: 'row', /* Align items in a single row */
    justifyContent: 'center', /* Center columns horizontally */
    alignItems: 'center', /* Center columns vertically */
    gap: '2px', /* Space between columns */
  },
  column: {
    width: '90px', /* Fixed width for columns */
    textAlign: 'center',
    cursor: 'pointer', /* Change cursor to pointer to indicate clickability */
    transition: 'color 0.3s', /* Smooth transition for color change on hover */
    color: 'rgba(100, 100, 100, 1.0)', /* Default font color */
  },
  columnHover: {
    color: 'rgba(217, 65, 116, 0.8)', /* Change font color with opacity on hover */
  },
  heading: {
    fontSize: '1rem',
    margin: '0',
    padding: '5px',
  },
  getAppButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#EA246E', /* Button background color */
    border: 'none', /* Remove border */
    color: 'white', /* Button text color */
    borderRadius: '6px', /* Rounded corners */
    fontSize: '0.8rem',
    cursor: 'pointer', /* Change cursor to pointer */
    padding: '10px 10px', /* Inner padding for button */
    transition: 'background-color 0.3s, color 0.3s', /* Smooth transitions for color changes */
  },
  buttonIcon: {
    marginLeft: '10px', /* Space between text and icon */
  },
};

// ColumnLayout component
const ColumnLayout = () => {
  const handleClick = (label) => {
    // Handle click event
    alert(`This is just for show :)`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.columnsWrapper}>
        {['About Us', 'Beyond', 'Bites', 'Guides', 'Features', 'Categories', 'Neighbourhoods'].map((label) => (
          <div
            key={label}
            style={styles.column}
            onClick={() => handleClick(label)}
            onMouseOver={(e) => e.currentTarget.style.color = styles.columnHover.color}
            onMouseOut={(e) => e.currentTarget.style.color = styles.column.color}
          >
            <h2 style={styles.heading}>{label}</h2>
          </div>
        ))}
      </div>
      <button style={styles.getAppButton}>
        GET THE APP
        <img
          src="https://www.burpple.com/assets_dev/web/header/icon-3537bd363e1d92b6040fb34eb226bba1531eea5390235b1ed85fdb14cd79054f.svg"
          alt="App Icon"
          width="12px" /* Adjust size as needed */
          height="auto"
          style={styles.buttonIcon}
        />
      </button>
    </div>
  );
};

export default ColumnLayout;
