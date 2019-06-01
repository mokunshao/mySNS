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
    .post("/api/posts", postData)
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

export const getPosts = () => (dispatch: Function) => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: GET_POSTS,
        payload: []
      });
    });
};

export const setPostLoading = () => {
  return {
    type: POST_LOADDING
  };
};
