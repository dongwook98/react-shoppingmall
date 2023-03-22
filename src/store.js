import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john ' + state;
    }, // 1. state수정해주는 함수만들기
  },
});

export let { changeName } = user.actions; // 2. 만든 함수 export 해야함

let cartData = createSlice({
  name: 'cartData',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cartData: cartData.reducer,
  },
});
