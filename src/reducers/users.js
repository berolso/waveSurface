import { GET_ALL_USERS, GET_USER, ADD_USER } from "../actions/types";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      console.log('action', action);
      return { ...state, users: action.data };

    case GET_USER:
      return { ...state, [action.data.username]: action.data };

    case ADD_USER:
      return { ...state, [action.data.username]: { ...action.data } };

    default:
      return state;
  }
};

export default usersReducer;
