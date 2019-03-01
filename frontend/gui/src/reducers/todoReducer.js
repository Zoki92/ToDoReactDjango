import {
  GET_TODO,
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  ADD_TODO
} from "../actions/types";

const initialState = {
  todos: [],
  todo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case GET_TODO:
      return {
        ...state,
        todo: action.payload
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        )
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
