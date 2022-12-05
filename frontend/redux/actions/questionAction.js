import axios from 'axios';
import { SET_QUESTION, ADD_QUESTION } from '../types';

export const setLevels = (newQuestion) => ({ type: SET_QUESTION, payload: newQuestion });
export const addQuestion = (addQuest) => ({ type: ADD_QUESTION, payload: addQuest });

export const getQuestions = () => (dispatch) => {
  axios.get('http://192.168.2.246:3001/que')
    .then((res) => {
      console.log('+++', res.data);
    })

    .catch((error) => console.log('My Error! ->', error));
};

// const headers = {
//     'Content-Type': 'application/json',
//   };
//   const url = 'http://localhost:3001/Que/';

//   // axios.get(url, { headers });

//   export const getQuestions = () => () => {
//     axios.get(url, { headers })
//       .then((res) => {
//         console.log('+++', res.data);
//       })

//       .catch((error) => console.log('My Error! ->', error));
//   };
