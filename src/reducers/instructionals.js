import {
  GET_ALL_ISTRUCTIONALS,
  GET_INSTRUCTIONAL,
  ADD_INSTRUCTIONAL,
  DELETE_INSTRUCTIONAL,
} from "../actions/types";

const instructionalsReducer = (state = {}, action = "") => {
  switch (action.type) {
    case GET_ALL_ISTRUCTIONALS:
      return { ...state, instructionalsList: action.data };

    case GET_INSTRUCTIONAL:
      return { ...state, [action.data.username]: action.data };

    case ADD_INSTRUCTIONAL:
      return { ...state, [action.data.username]: { ...action.data } };

    case DELETE_INSTRUCTIONAL:
      const instructionals = { ...state };
      delete instructionals[action.id];
      return instructionals;

    default:
      return state;
  }
};

export default instructionalsReducer;
