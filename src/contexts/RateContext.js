import React, { createContext, useReducer, useEffect } from "react";
import { rateReducer } from "../reducers/rateReducer";

export const RateContext = createContext();

const RateContextProvider = (props) => {
  const [likes, dispatch] = useReducer(rateReducer, 0, () => {
    const localLikes = localStorage.getItem("likes");
    return localLikes ? JSON.parse(localLikes).likes : 0;
  });

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify({ likes }));
  }, [likes]);

  return (
    <RateContext.Provider value={{ likes, dispatch }}>
      {props.children}
    </RateContext.Provider>
  );
};

export default RateContextProvider;
