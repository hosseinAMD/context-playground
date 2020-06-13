export const likeApp = () => ({
  type: "LIKE_APP",
});

export const dislikeApp = () => ({
  type: "DISLIKE_APP",
});

export const resetRates = () => ({
  type: "RESET_RATE",
});

export const setRates = (count) => ({
  type: "SET_RATE",
  count,
});
