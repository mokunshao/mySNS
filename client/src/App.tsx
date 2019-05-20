import React, { useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./redux/actionTypes";

const App: React.FC = () => {
  useEffect(() => {
    if (localStorage.msToken) {
      setAuthToken(localStorage.msToken);
      const decoded = jwt_decode(localStorage.msToken);
      console.log(decoded);
      store.dispatch({ type: SET_CURRENT_USER, payload: decoded });
    }
  }, []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
