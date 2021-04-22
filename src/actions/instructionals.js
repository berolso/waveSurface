import WaveServer from "../api/waveServer";

import {
  GET_ALL_ISTRUCTIONALS,
  GET_INSTRUCTIONAL,
  ADD_INSTRUCTIONAL,
} from "./types";

export const getAllInstructionalsFromAPI = () => {
  return async () => {
    try {
      const res = await WaveServer.request("instructionals");
      return {
        type: GET_ALL_ISTRUCTIONALS,
        data: res.instructionals,
      };
    } catch (err) {
      return console.log(err);
    }
  };
};

export const getInstructionalFromAPI = (id) => {
  return async () => {
    const res = await WaveServer.request(`instructionals/${id}`);
    return ({
      type: GET_INSTRUCTIONAL,
      data: res,
    });
  };
};

export const registerNewInstructional = (instructional) => {
  return async () => {
    const res = await WaveServer.request(`instructionals`, { instructional });
    return ({
      type: ADD_INSTRUCTIONAL,
      data: res,
    });
  };
};
