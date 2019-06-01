import { ADD_POST, GET_POST, GET_POSTS, POST_LOADDING } from "../actionTypes";

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
        loading:false
      };
    default:
      return state;
  }
}
