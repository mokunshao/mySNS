import { GET_ERRORS, SET_CURRENT_USER } from "../actionTypes";
import axios from "axios";

export const registerUser = (formData: any, history: Function) => (
  dispatch: Function
) => {
  axios
    .post("/api/user/register", formData)
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
