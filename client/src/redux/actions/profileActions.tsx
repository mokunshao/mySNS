import { GET_PROFILE, PROFILE_LOADING } from "../actionTypes";
import axios from "axios";

export const getCurrentProfile = () => (dispatch: Function) => {
  // dispatch(setProfileLoading());
  dispatch({
    type: PROFILE_LOADING
  });
  axios.get("/api/profile").then(res => {
    dispatch({ type: GET_PROFILE, payload: res.data });
  });
};

export const setProfileLoading = () => (dispatch: Function) => {
  dispatch({
    type: PROFILE_LOADING
  });
};
