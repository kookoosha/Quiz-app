import axios from 'axios';
import { GET_SCORE, SET_LEVELS, SET_SCORE } from '../types';

export const setScore = (newScore) => ({ type: SET_SCORE, payload: newScore });

export const getScore = () => ({ type: GET_SCORE });
