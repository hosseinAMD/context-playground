import React, { useContext } from "react";
import { RateContext } from "../contexts/RateContext";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  likeApp,
  dislikeApp,
  resetRates,
  setRates,
} from "../actions/rateActions";

const RateControl = () => {
  const { likes, dispatch } = useContext(RateContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="rate-control-wrapper"
      style={{ borderColor: theme.ui, background: theme.bg, color: theme.text }}
    >
      <button onClick={() => dispatch(dislikeApp())}>Dislike :|</button>
      <span>{likes}</span>
      <button onClick={() => dispatch(likeApp())}>Like :*</button>
      <button onClick={() => dispatch(resetRates())}>Reset</button>
      <button onClick={() => dispatch(setRates(10))}>Set To 10</button>
    </div>
  );
};

export default RateControl;
