import React from 'react';

export default function ProductList({ shoes, num }) {
  return (
    <div>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + (num + 1) + '.jpg'}
        width='80%'
        alt=''
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </div>
  );
}
