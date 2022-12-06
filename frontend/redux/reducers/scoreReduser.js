import { GET_SCORE, SET_ANSWERS, SET_SCORE } from '../types';

export default function scoreReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SCORE:
      return [...state, payload];

    case GET_SCORE:
      if (Array.isArray(state)) {
        return state.reduce((acc, e) => acc + e, 0);
      }
      return state;

    default:
      return state;
  }
}
