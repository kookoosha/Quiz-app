import { SET_ANSWERS, ADD_ANSWER } from '../types';

export default function answerReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWERS:
      return [...payload];
    case ADD_ANSWER:
      return [...payload];
    default:
      return state;
  }
}
