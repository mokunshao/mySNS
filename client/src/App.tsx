import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./redux/actionTypes";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CreateProfile from "./components/CreateProfile";
import EditProfile from "./components/EditProfile";
import AddExperience from "./components/AddExperience";
import AddEducation from "./components/AddEducation";
import Profiles from "./components/Profiles";
import Profile from "./components/Profile";

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
              <PrivateRoute
                exact
                path={"/create-profile"}
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path={"/edit-profile"}
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path={"/add-experience"}
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path={"/add-education"}
                component={AddEducation}
              />
              <Route exact path={"/profiles"} component={Profiles} />
              {/* <Route exact paths={["/profile/:handle",'/profile']} component={Profile} /> */}
              <Route exact path={"/profile/:handle"} component={Profile} />
              <Redirect path={"/profile"} to={"/profiles"} />
              <Route component={Welcome} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
