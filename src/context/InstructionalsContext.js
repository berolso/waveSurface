import React, { useReducer, createContext } from "react";

import instructionalsReducer from "../reducers/instructionals";

export const InstructionalsContext = createContext();

const initialState = {};

export const InstructionalsContextProvider = (props) => {
  const [state, dispatch] = useReducer(instructionalsReducer, initialState);

  return (
    <InstructionalsContext.Provider value={[state, dispatch]}>
      {props.children}
    </InstructionalsContext.Provider>
  );
};
