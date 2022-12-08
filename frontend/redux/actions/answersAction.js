import axios from 'axios';
import { SET_ANSWERS, ADD_ANSWER } from '../types';

export const setAnswers = (newAnswers) => ({ type: SET_ANSWERS, payload: newAnswers });
export const addAnswer = (addAnsw) => ({ type: ADD_ANSWER, payload: addAnsw });

export const getAnswers = (id) => (dispatch) => {
  if (!id) {
    dispatch(setAnswers([]));
  } else {
    axios.get(`http://192.168.2.246:3001/que/answer/${id}`)
      .then((res) => {
        dispatch(setAnswers(res.data));
        console.log('Answers from BD', res.data);
      })
      .catch((error) => console.log('My Error! ->', error));
    console.log('This id current question', id);
  }
};

export const addAnsw = () => (dispatch) => {
  axios.post('http://192.168.2.246:3001/addAnswers')
    .then((res) => {
      dispatch(addAnswer(res.data));
    })
    .catch((error) => console.log('My Error! ->', error));
};
