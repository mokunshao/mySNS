import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  POST_LOADDING,
  GET_ERRORS
} from "../actionTypes";
import axios from "axios";

export const addPost = (postData: any) => (dispatch: Function) => {
  axios
    .post("/api/post", postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
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
