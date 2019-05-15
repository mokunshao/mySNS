import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <Footer />
    </div>
  );
};

export default App;
