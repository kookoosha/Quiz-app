import { SET_ANSWERS } from '../types';

export default function answerReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWERS:
      return [...payload];

    default:
      return state;
  }
}
