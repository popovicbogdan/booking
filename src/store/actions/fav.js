import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./types";

export const addToFav = id => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_FAV,
    id,
    user: getState().auth.user.username
  });
};
export const removeFromFav = id => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAV,
    id,
    user: getState().auth.user.username
  });
};
