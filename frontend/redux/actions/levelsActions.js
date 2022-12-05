import axios from 'axios';
import { SET_LEVELS } from '../types';

export const setLevels = (newLevel) => ({ type: SET_LEVELS, payload: newLevel });

export const getLevels = () => (dispatch) => {
  axios.get('/Lev')
    .then((res) => dispatch(setLevels(res.data)))
    .catch(() => dispatch(setLevels([])));
};
