import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actionTypes";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

interface Action {
  type: string;
  payload: any;
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case GET_PROFILES:
      return { ...state, profiles: action.payload, loading: false };
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
}
