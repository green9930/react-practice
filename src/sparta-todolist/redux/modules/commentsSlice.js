import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __createComments = createAsyncThunk(
  'createComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/comments',
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __readComments = createAsyncThunk(
  'readComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/comments');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComments = createAsyncThunk(
  'updateComments',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/comments/${payload.id}`, {
        commentText: payload.commentText,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  'deleteComments',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__createComments.pending]: (state, action) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩 상태를 true로 변경
    },
    [__createComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청 끝났으므로 false로 변경
      state.comments.push(action.payload); // Promise가 fullfilled일 때 dispatch
      console.log('POST COMMENTS', action);
    },
    [__createComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했으나 네트워크 요청은 끝났으므로 false로 변경
      state.error = action.payload; // catch된 error를 state.error에 넣는다.
    },
    [__readComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__readComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      console.log('GET COMMENTS', action);
    },
    [__readComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateComments.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__updateComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = state.comments.map((todo) =>
        todo.id === payload.id
          ? { ...todo, commentText: payload.commentText }
          : todo
      );
      console.log('UPDATE COMMENTS', payload);
    },
    [__updateComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deleteComments.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
      console.log('DELETE COMMENTS', payload);
    },
    [__deleteComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default commentsSlice;
