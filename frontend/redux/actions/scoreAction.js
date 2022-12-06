import axios from 'axios';
import {
  EMPTY_SCORE, GET_SCORE, SET_LEVELS, SET_SCORE,
} from '../types';

export const setScore = (newScore) => ({ type: SET_SCORE, payload: newScore });
export const emptyScore = () => ({ type: EMPTY_SCORE });

export const getScore = () => ({ type: GET_SCORE });