import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log('action', action);
      return { ...state, currentUser: action.data };

    case LOGOUT_USER:
      return { ...state, currentUser: action.data };

    
    default:
      return state;
  }
};

export default currentUserReducer;
