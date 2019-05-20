import { GET_ERRORS } from "../actionTypes";

const initialState = {
  username: "",
  email: "",
  password: "",
  password2: ""
};

interface Action {
  type: string;
  payload: any;
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
