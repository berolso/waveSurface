import React from "react";
import App from "./App";

import { InstructionalsContextProvider } from "./context/InstructionalsContext";


const Contexts = () => {
  return (
    <InstructionalsContextProvider>
      <App />
    </InstructionalsContextProvider>
  );
};

export default Contexts;
