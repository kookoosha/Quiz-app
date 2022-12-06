import axios from 'axios';
import { SET_ANSWERS, SET_LEVELS } from '../types';

export const setAnswers = (newAnswers) => ({ type: SET_ANSWERS, payload: newAnswers });

export const getAnswers = (id) => (dispatch) => {
  axios.get(`http://192.168.2.246:3001/que/answer/${id}`)
    .then((res) => {
      dispatch(setAnswers(res.data));
      console.log('Answers from BD', res.data);
    })
    .catch((error) => console.log('My Error! ->', error));
  console.log('This id current question', id);
};
