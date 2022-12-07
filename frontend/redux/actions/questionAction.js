import axios from 'axios';
import { EMPTY_QUESTION, SET_QUESTION, ADD_QUESTION } from '../types';
import { setScore } from './scoreAction';

export const setQuestion = (newQuestion) => ({ type: SET_QUESTION, payload: newQuestion });
export const emptyQuestion = () => ({ type: EMPTY_QUESTION });
export const addQuestion = (addQuest) => ({ type: ADD_QUESTION, payload: addQuest });

export const getQuestions = (id) => (dispatch) => {
  axios.get(`http://192.168.2.246:3001/que/${id}`)
    .then((res) => {
      dispatch(setQuestion(res.data));
      dispatch(setScore(new Array(res.data.length).fill(null)));
    })
    .catch((error) => console.log('My Error! ->', error));
};

export const addQue = (data) => (dispatch) => {
  axios.post('http://192.168.2.246:3001/addQuestion')
    .then((res) => {
      dispatch(addQuestion(res.data));
    })
    .catch((error) => console.log('My Error! ->', error));
};
