import counterSlice from './modules/counterSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
