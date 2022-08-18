import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import countReducer from 'reduxPrac/modules/counter';

const rootReducer = combineReducers({
  counter: countReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
