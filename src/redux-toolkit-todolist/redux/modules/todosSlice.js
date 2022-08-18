import { createSlice } from '@reduxjs/toolkit';

// createSlice는 객체를 매개변수로 받는다
const todoSlice = createSlice({
  // name, initialState, reducers 세가지 필드 필수
  name: 'todoSlice',
  initialState: [],
  reducers: {
    createTodo: (state, action) => [...state, action.payload],
    updateTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      ),
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const todoActions = todoSlice.actions;
// export default todoSlice.reducer;
export default todoSlice;
