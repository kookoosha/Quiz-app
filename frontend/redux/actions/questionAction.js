import axios from 'axios';
import { EMPTY_QUESTION, SET_QUESTION } from '../types';

export const setQuestion = (newQuestion) => ({ type: SET_QUESTION, payload: newQuestion });
export const emptyQuestion = () => ({ type: EMPTY_QUESTION });

export const getQuestions = (id) => (dispatch) => {
  axios.get(`http://192.168.2.246:3001/que/${id}`)
    .then((res) => {
      dispatch(setQuestion(res.data));
    })
    .catch((error) => console.log('My Error! ->', error));
};
