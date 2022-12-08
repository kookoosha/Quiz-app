import axios from 'axios';
import {
  EMPTY_SCORE, GET_SCORE, GET_SCORE2, SET_LEVELS, SET_SCORE, UPDATE_SCORE,
} from '../types';

export const setScore = (newScore) => ({ type: SET_SCORE, payload: newScore });
export const emptyScore = () => ({ type: EMPTY_SCORE });

export const updateScore = (newScore) => ({ type: UPDATE_SCORE, payload: newScore });

export const getScore = () => ({ type: GET_SCORE });
export const getScore2 = () => ({ type: GET_SCORE2 });
