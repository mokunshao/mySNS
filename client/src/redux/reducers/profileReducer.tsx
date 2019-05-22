import { GET_PROFILE, PROFILE_LOADING } from "../actionTypes";

const initialState = {
  profile: "",
  profiles: "",
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
    case PROFILE_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
