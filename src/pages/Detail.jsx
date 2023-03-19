import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Col from 'react-bootstrap/Col';

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === 'blue' ? 'white' : 'black')};
  padding: 10px;
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

  if (userid) {
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
                (findProduct.id + 1) +
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

  return (
    <div>
      <h2>제품 상세페이지입니다.</h2>
      {shoes.map((item, i) => {
        return (
          <Col key={i}>
            <ProductList shoes={shoes[i]} num={i}></ProductList>
            {/* shoes[i] : shoes 데이터를 다 전달하는게 아니라 한개씩 전달 */}
            <Link to={'/detail/' + i}>자세히 보기</Link>
          </Col>
        );
      })}
    </div>
  );
}
