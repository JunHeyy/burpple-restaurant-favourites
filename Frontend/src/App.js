import React from "react";
import "./App.css";
import RoutesComponent from "./routes/Routes";

document.title = "Burpple Restaurant Playlist";


const styles = {
  appContainer: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

function App() {
  return (
    <div style={styles.appContainer}>
      <RoutesComponent />
    </div>
  );
}

export default App;
