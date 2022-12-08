import {
  EMPTY_SCORE, GET_SCORE, SET_ANSWERS, SET_SCORE, UPDATE_SCORE,
} from '../types';

export default function scoreReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SCORE:

      return payload;

    case UPDATE_SCORE: {
      console.log('payload in Reduser', payload);
      const stateCopy = [...state];
      stateCopy[payload.index] = payload.value;
      return stateCopy; }

    case GET_SCORE:
      if (Array.isArray(state)) {
        return state.reduce((acc, e) => acc + e, 0);
      }
      return state;
    case EMPTY_SCORE:
      return [];

    default:
      return state;
  }
}
