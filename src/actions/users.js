
import axios from "axios";
import WaveServer from '../api/waveServer'

import { GET_ALL_USERS, GET_USER, ADD_USER } from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const getAllUsersFromAPI = () => {
  return async (dispatch) => {
    try{
      // const res = await axios.get(`${API_URL}users`);
      const res = await WaveServer.request('users')
      return dispatch({
        type: GET_ALL_USERS,
        data: res.users
      });
    } catch(err){
      console.log(err)
    }
  };
}

export const getUserFromAPI = (username) =>{
  return async (dispatch) =>{
    const res = await axios.get(`${API_URL}/${username}`)
    return dispatch({
      type: GET_USER,
      data: res.data
    })
  }
}

export const registerNewUser = (user) =>{
  return async (dispatch)=>{
    const res = await axios.post(`${API_URL}`,{user})
    return dispatch({
      type: ADD_USER,
      data: res.data
    })
  }
}
