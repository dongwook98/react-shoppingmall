import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductList({ shoes, num }) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate('/detail/' + num);
      }}
    >
      <img
        src={'https://codingapple1.github.io/shop/shoes' + (num + 1) + '.jpg'}
        width='200px'
        alt=''
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}
