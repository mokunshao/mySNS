import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <NavBar />
        <div className={styles.container}>
          <Route exact path={"/"} component={Welcome} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
