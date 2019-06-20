import { LOAD, DISPLAY } from "./actions";

const initialState = {
  requested: false,
  title: null,
  author: null
}

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        requested: true
      };
    case DISPLAY:
      return {
        ...state,
        title: action.title,
        author: action.author
      };
    default:
      return state;
  }
}