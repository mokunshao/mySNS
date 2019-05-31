import { ADD_POST, GET_POST, GET_POSTS, POST_LOADDING } from "../actionTypes";
import axios from "axios";

export const addPost = (postData: any) => (dispatch: Function) => {
  axios.post("/api/posts").then(res => {
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  });
};
