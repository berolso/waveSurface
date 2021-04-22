import axios from 'axios'

import { LOGIN_USER } from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/";

export const loginUser = (username,password) => {
  return async (dispatch) => {
    try{
      const res = await axios.post(`${API_URL}/token`,{username,password});
      console.log(res);
      return dispatch({
        type: LOGIN_USER,
        data: res
      });
    } catch(err){
      console.log(err)
    }
  };
}