import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Cart() {
  let cartData = useSelector((state) => state.cartData);
  console.log(cartData); // [{...}, {...}]

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((el, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{cartData[i].name}</td>
                <td>{cartData[i].count}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
