import { configureStore } from '@reduxjs/toolkit';
import todosSlice from 'sparta-todolist/redux/modules/todosSlice';
import commentsSlice from 'sparta-todolist/redux/modules/commentsSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    comments: commentsSlice.reducer,
  },
});

export default store;
