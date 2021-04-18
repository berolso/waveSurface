import currentUser from './currentUser';
import users from './users';
import instructionals from './instructionals';
import { combineReducers } from "redux";

export default combineReducers({
  currentUser,
  users,
  instructionals,
});