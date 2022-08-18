import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

/* fulfillWithValue --------------------------------------------------------- */
// toolkit에서 제공하는 API
// Promise에서 resolve된 경우(네트워크 요청 성공), dispatch 해주는 기능을 가진 API
// 매개변수에 payload를 넣어줄 수 있다.

/* rejectWithValue ---------------------------------------------------------- */
// Promise가 reject 된 경우(네트워크 요청 실패), dispatch 해주는 기능을 가진 API
// 매개변수에 어떤 값을 넣을 수 있다. (아래의 경우 error 객체)

export const __getTodos = createAsyncThunk(
  'getTodos',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/todos');
      // console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodos = createAsyncThunk(
  'postTodos',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/todos', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodos = createAsyncThunk(
  'updateTodos',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  'deleteTodos',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {},
  // reducers에서 바로구현되지 않는 기타 Reducer로직을 구현할 때 사용하는 기능입니다.
  // 보통 thunk 함수를 사용할 때 extraReducers를 사용
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩 상태를 true로 변경
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으므로 로딩 상태를 false로 변경
      state.todos = action.payload;
      console.log('GET TODOS', state, action); // // Promise가 fullfilled일 때 dispatch
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했으나 네트워크 요청은 끝났으므로 false로 변경
      state.error = action.payload; // catch된 error를 state.error에 넣는다.
    },
    [__postTodos.fulfilled]: (state, action) => {
      console.log('POST TODOS', action.payload);
      state.todos.push(action.payload);
    },
    [__updateTodos.fulfilled]: (state, { payload }) => {
      console.log('UPDATE TODOS', payload);
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, content: payload.content } : todo
      );
      // state.todos = state.todos
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      console.log('DELETE TODOS', action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todosSlice;
