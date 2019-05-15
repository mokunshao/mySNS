import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <NavBar />
    </div>
  );
};

export default App;
