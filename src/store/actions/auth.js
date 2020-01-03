import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR
} from "../actions/types";
import axios from "axios";

export const register = (username, email, password) => dispatch => {
  dispatch({ type: USER_LOADING });

  const body = JSON.stringify({ username, email, password });

  axios
    .post(`http://127.0.0.1:8000/auth/register`, body, config)
    .then(resp => dispatch({ type: REGISTER_USER, payload: resp.data }))
    .catch(err => {
      console.log(err);
    });
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get(`http://127.0.0.1:8000/auth/user`, tokenConfig(getState))
    .then(resp => dispatch({ type: USER_LOADED, payload: resp.data }))
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (username, password) => dispatch => {
  dispatch({ type: USER_LOADING });

  const body = JSON.stringify({ username, password });

  axios
    .post(`http://127.0.0.1:8000/auth/login`, body, config)
    .then(resp => dispatch({ type: LOGIN_SUCCESS, payload: resp.data }))
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  console.log("LOGGING OUT");

  axios
    .post(`http://127.0.0.1:8000/auth/logout/`, null, tokenConfig(getState))
    .then(resp => dispatch({ type: LOGOUT }))
    .catch(err => console.log(err));
};

//config
const config = { headers: { "Content-type": "application/json" } };

// GET TOKEN CONFIG
const tokenConfig = getState => {
  const config = { headers: { "Content-type": "application/json" } };

  const token = getState().auth.token;
  // console.log("TOKENCONFIG ", token);

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
    console.log("IF TOKEN CONFIG HEADERS", config.headers);
  }
  return config;
};
