import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { upAge } from './../store/userSlice.js';
import { upCount } from './../store.js';
import { removeItem } from './../store.js';

export default function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); // dispatch : store.js로 요청보내주는 함수임
  console.log(state.cartData); // [{...}, {...}]

  return (
    <div>
      {state.user.name} 의 장바구니
      <br></br>
      나이 : {state.user.age}
      <button
        onClick={() => {
          dispatch(upAge(100));
        }}
      >
        나이 100 up 버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#(상품id)</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cartData.map((el, i) => {
            return (
              <tr key={i}>
                <td>{state.cartData[i].id}</td>
                <td>{state.cartData[i].name}</td>
                <td>{state.cartData[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(upCount(state.cartData[i].id)); // 3. dispatch(state변경함수())
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeItem(state.cartData[i].id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
