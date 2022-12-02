import { configureStore } from '@reduxjs/toolkit';
import levelsReducer from './reducers/levelsReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    levels: levelsReducer,
  },
});

export default store;
