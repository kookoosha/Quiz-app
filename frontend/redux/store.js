import { configureStore } from '@reduxjs/toolkit';
import answerReducer from './reducers/answerReduser';
import levelsReducer from './reducers/levelsReducer';
import questionReducer from './reducers/questionReduser';
import scoreReducer from './reducers/scoreReduser';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    levels: levelsReducer,
    question: questionReducer,
    answers: answerReducer,
    score: scoreReducer,
  },
});

export default store;
