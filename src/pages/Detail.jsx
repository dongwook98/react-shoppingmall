import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail({ shoes }) {
  let { userid } = useParams();
  let findProduct = shoes.find((product) => {
    return product.id === Number(userid);
  });
  console.log(findProduct);
  return findProduct ? (
    <div className='container'>
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
