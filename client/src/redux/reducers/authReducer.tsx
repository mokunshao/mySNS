import { SET_CURRENT_USER } from "../actionTypes";
import isEmpty from '../../validation/isEmpty'

const initialState = {
  isAuthenticated: false,
  user: {}
};

interface Action {
  type: string;
  payload: any;
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { isAuthenticated: !isEmpty(action.payload), user: action.payload };
    default:
      return state;
  }
}
