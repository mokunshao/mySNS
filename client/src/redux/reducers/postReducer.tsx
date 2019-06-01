import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  POST_LOADDING,
  DELETE_POST
} from "../actionTypes";

const initialState = {
  posts: [] as any,
  post: {},
  loading: false
};

interface Action {
  type: string;
  payload?: any;
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case POST_LOADDING:
      return {
        ...state,
        loading: true
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: any) => post._id !== action.payload)
      };
    default:
      return state;
  }
}
