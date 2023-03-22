import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park'; // immer.js의 도움 => 참조자료형을 직접수정해도 state변경됨
    }, // 1. state수정해주는 함수만들기
    upAge(state, action) {
      state.age = state.age + action.payload; // 결론: state가 object/array면 return 없이 직접 수정해도된다.
    },
  },
});

export let { changeName, upAge } = user.actions; // 2. 만든 함수 export 해야함

export default user;
