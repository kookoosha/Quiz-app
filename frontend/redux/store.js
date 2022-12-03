import { configureStore } from '@reduxjs/toolkit';
import levelsReducer from './reducers/levelsReducer';
import questionReducer from './reducers/questionReduser';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    levels: levelsReducer,
    question: questionReducer,
  },
});

export default store;
