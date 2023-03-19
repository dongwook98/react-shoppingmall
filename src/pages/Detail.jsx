import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

let NewBtn = styled.button(Btn)`

`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

export default function Detail({ shoes }) {
  let { userid } = useParams();
  let findProduct = shoes.find((product) => {
    return product.id === Number(userid);
  });

  return findProduct ? (
    <div className='container'>
      <Box>
        <Btn bg='blue'>버튼</Btn>
        <Btn bg='orange'>버튼</Btn>
        <Btn bg='green'>버튼</Btn>
      </Box>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              findProduct.id +
              '.jpg'
            }
            width='100%'
          />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div>찾으시는 상품이없습니다.</div>
    </div>
  );
}
