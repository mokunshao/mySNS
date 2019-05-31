import { ADD_POST, GET_POST, GET_POSTS, POST_LOADDING } from "../actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
