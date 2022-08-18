import { createStore, combineReducers } from 'redux';
import todoReducer from 'redux-todolist/redux/modules/todos';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
