import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./redux/actionTypes";
import Dashboard from "./components/Dashboard";
import PrivateRoute from './components/PrivateRoute'

const App: React.FC = () => {
  if (localStorage.msToken) {
    setAuthToken(localStorage.msToken);
    const decoded = jwt_decode(localStorage.msToken);
    store.dispatch({ type: SET_CURRENT_USER, payload: decoded });
    const currentTime = Date.now() / 1000;
    if ((decoded as any).exp < currentTime) {
      localStorage.removeItem("msToken");
      setAuthToken(false);
      store.dispatch({ type: SET_CURRENT_USER, payload: {} });
    }
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.app}>
          <NavBar />
          <div className={styles.container}>
            <Switch>
              <Route exact path={"/"} component={Welcome} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/register"} component={Register} />
              <PrivateRoute exact path={"/dashboard"} component={Dashboard} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
