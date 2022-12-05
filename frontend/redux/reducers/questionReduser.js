import { ADD_QUESTION, SET_QUESTION } from '../types';

export default function questionReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_QUESTION:
      return payload;
    case ADD_QUESTION:
      return [...state, payload];
    default:
      return state;
  }
}
