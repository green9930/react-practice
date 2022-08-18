import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const __addNumber = createAsyncThunk(
  'addNumber',
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(counterActions.addNumber(payload));
    }, 3000);
  }
);

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addNumber: (state, action) => {
      console.log(action);
      state.number = parseInt(state.number) + parseInt(action.payload);
    },
    minusNumber: (state, action) => {
      console.log(action);
      state.number = state.number - action.payload;
    },
  },
});

// export const { addNumber, minusNumber } = counterSlice.actions;
export const counterActions = counterSlice.actions;
export default counterSlice;
