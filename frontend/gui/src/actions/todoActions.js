import {
  GET_TODO,
  GET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_TODO
} from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

export const getTodos = () => (dispatch, getState) => {
  axios
    .get("http://localhost:8000/api/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const getTodo = id => (dispatch, getState) => {
  axios
    .get(`http://localhost:8000/api/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TODO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const updateTodo = todo => (dispatch, getState) => {
  axios
    .put(`http://localhost:8000/api/${todo.id}/`, todo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: UPDATE_TODO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addTodo = todo => (dispatch, getState) => {
  axios
    .post("http://localhost:8000/api/", todo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteTodo = id => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8000/api/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
