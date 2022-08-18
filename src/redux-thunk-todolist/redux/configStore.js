import { configureStore } from '@reduxjs/toolkit';
import todosSlice from 'redux-thunk-todolist/redux/modules/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
