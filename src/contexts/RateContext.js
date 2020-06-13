import React, { createContext, useReducer } from "react";
import { rateReducer } from "../reducers/rateReducer";

export const RateContext = createContext();

const RateContextProvider = (props) => {
  const [likes, dispatch] = useReducer(rateReducer, 0);
  return (
    <RateContext.Provider value={{ likes, dispatch }}>
      {props.children}
    </RateContext.Provider>
  );
};

export default RateContextProvider;
