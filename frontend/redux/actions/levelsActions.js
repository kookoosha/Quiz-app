import axios from 'axios';
import { SET_LEVELS } from '../types';

export const setLevels = (newLevel) => ({ type: SET_LEVELS, payload: newLevel });

export const getLevels = () => (dispatch) => {
  axios.get('http://192.168.2.246:3001/levels')
    .then((res) => {
      console.log('+++', res.data);
    })
    // .then((res) => dispatch(setLevels(res.data)))
    .catch(() => dispatch(setLevels([])));
};
