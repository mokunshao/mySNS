import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "../actionTypes";
import axios from "axios";

export const getCurrentProfile = () => (dispatch: Function) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res => {
      dispatch({ type: GET_PROFILE, payload: res.data });
    })
    .catch(() => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

export const setProfileLoading = () => (dispatch: Function) => {
  dispatch({
    type: PROFILE_LOADING
  });
};

export const clearProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const createProfile = (profileData: any, history: any) => (
  dispatch: Function
) => {
  axios
    .post("/api/profile", profileData)
    .then(() => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const deleteAccount = () => (dispatch: Function) => {
  axios
    .delete("/api/profile")
    .then(() => {
      dispatch({ type: SET_CURRENT_USER, payload: {} });
      localStorage.removeItem("msToken");
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const addExperience = (data: any, history: any) => (
  dispatch: Function
) => {
  axios
    .post("/api/profile/experience", data)
    .then(() => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const addEducation = (data: any, history: any) => (
  dispatch: Function
) => {
  axios
    .post("/api/profile/education", data)
    .then(() => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const deleteExperience = (id: any) => (dispatch: Function) => {
  axios.delete(`/api/profile/experience/${id}`).then(res => {
    dispatch({ type: GET_PROFILE, payload: res.data });
  });
};
