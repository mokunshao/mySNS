import { GET_ERRORS, SET_CURRENT_USER } from "../actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

interface RegisterData {
  username: string;
  email: string;
  password: string;
  password2: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = (formData: RegisterData, history: any) => (
  dispatch: Function
) => {
  axios
    .post("/api/users/register", formData)
    .then(() => {
      history.push("/login");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = (formData: LoginData) => (dispatch: Function) => {
  axios
    .post("/api/users/login", formData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("msToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const resetErrors = () => (dispatch: any) => {
  dispatch({
    type: GET_ERRORS,
    payload: {}
  });
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("msToken");
  setAuthToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
