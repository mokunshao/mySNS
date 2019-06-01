import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  POST_LOADDING,
  GET_ERRORS,
  DELETE_POST
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

export const deletePost = (id: string) => (dispatch: Function) => {
  axios.delete(`/api/posts/${id}`).then(res => {
    dispatch({
      type: DELETE_POST,
      payload: id
    });
    // 也可以用一下方法
    // dispatch(getPosts());
  });
};

export const addLike = (id: string) => (dispatch: Function) => {
  axios.post(`/api/posts/like/${id}`).then(() => dispatch(getPosts()));
};

export const removeLike = (id: string) => (dispatch: Function) => {
  axios.post(`/api/posts/unlike/${id}`).then(() => dispatch(getPosts()));
};

export const getPost = (id: string) => (dispatch: Function) => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => dispatch({ type: GET_POST, payload: res.data }));
};

export const addComment = (id: string, newComment: any) => (
  dispatch: Function
) => {
  axios
    .post(`/api/posts/comment/${id}`, newComment)
    .then(res => {
      dispatch({ type: GET_POST, payload: res.data });
      dispatch({ type: GET_ERRORS, payload: {} });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const deleteComment = (postId: string, commentId: string) => (
  dispatch: Function
) => {
  axios.delete(`/api/posts/comment/${postId}/${commentId}`).then(res => {
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  });
};
