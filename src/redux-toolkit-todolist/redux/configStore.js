import { configureStore } from '@reduxjs/toolkit';
import todoSlice from 'redux-toolkit-todolist/redux/modules/todosSlice';
import alertMessageSlice from './modules/alertMessageSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    alerts: alertMessageSlice.reducer,
  },
});

export default store;
