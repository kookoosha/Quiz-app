import { EMPTY_QUESTION, SET_QUESTION } from '../types';

export default function questionReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_QUESTION:

      return [...payload];
    case EMPTY_QUESTION:
      return [];
    default:
      return state;
  }
}
