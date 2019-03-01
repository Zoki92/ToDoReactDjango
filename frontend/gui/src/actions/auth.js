import axios from "axios";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING
  });
  axios
    .get("http://localhost:8000/rest-auth/user/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const login = (username, email, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });
  axios
    .post("http://localhost:8000/rest-auth/login/", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .post("http://localhost:8000/rest-auth/logout/")
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => console.log(err));
};

export const tokenConfig = getState => {
  const key = getState().auth.key;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (key) {
    config.headers["Authorization"] = `Token ${key}`;
  }

  return config;
};
