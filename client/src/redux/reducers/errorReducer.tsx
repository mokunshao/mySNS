import { GET_ERRORS } from "../actionTypes";

const initialState = {
  username: "",
  email: "",
  password: "",
  password2: ""
};

interface Errors{
  username: string,
  email: string,
  password: string,
  password2: string
}

interface Action {
  type: string;
  payload: Errors;
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
