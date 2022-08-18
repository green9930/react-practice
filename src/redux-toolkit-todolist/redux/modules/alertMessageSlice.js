import { createSlice } from '@reduxjs/toolkit';

const alertMessageSlice = createSlice({
  name: 'alertMessageSlice',
  initialState: '',
  reducers: {
    createTitleAlert: () => '제목을 입력해주세요.',
    createContentAlert: () => '내용을 입력해주세요.',
    createAllAlert: () => '제목과 내용을 모두 입력해주세요.',
    deleteAlert: () => '',
  },
});

export const alertMessageActions = alertMessageSlice.actions;
export default alertMessageSlice;
