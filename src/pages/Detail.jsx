import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';

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
  let [boxShow, setBoxShow] = useState(true);
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  let { userid } = useParams();
  let findProduct = shoes.find((product) => {
    return product.id === Number(userid);
  });
  let [numInput, setNumInput] = useState('');
  let [tap, setTap] = useState(0);

  useEffect(() => {
    if (isNaN(numInput) === true) {
      // 문자입력시 실행
      alert('숫자만 입력하세요.');
    }
  }, [numInput]);

  // 컴포넌트의 Lifecycle
  // 1. 페이지에 장착되기도 하고(mount)
  // 2. 가끔 업데이트도 되고 (update)
  // 3. 필요없으면 제거되고 (unmount)

  // for (let i = 0; i < 10000; i++) {
  //   console.log(1);
  // } // useEffect 사용하지않으면 HTML렌더링 전에 실행됨! => 매우 복잡하고 어려운 오래걸리는 연산이 있을경우에는 html 렌더링이 느리게 되게 된다.

  useEffect(() => {
    // 컴포넌트 mount, update시 코드 실행해주는 useEffect
    console.log('useEffect실행됨');

    // for (let i = 0; i < 10000; i++) {
    //   console.log(1);
    // } // useEffect 사용하면 HTML렌더링 후에 실행됨!

    let a = setTimeout(() => {
      // 문제1. 2초사이에 재렌더링 발생하면 타이머가 무수히 많이 생김
      setBoxShow(false);
    }, 2000);

    // 문제2. 만약 서버로 데이터 요청하는 코드가 있고 2초 정도 소요한다고 가정한다면 그 사이에 재렌더링이 발생하면 버그가 많이 발생함

    return () => {
      // 문제1 해결. 기존타이머는 제거해주세요~~
      clearTimeout(a);

      // 문제2 해결. 기존 데이터요청은 제거해주세요~~
    };
  }, [count]);

  if (userid) {
    return findProduct ? (
      <div className='container'>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          useEffect 실행되는 버튼
        </button>
        {count2}
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          useEffect 실행되지않는 버튼
        </button>
        {boxShow ? (
          <div className='alert alert-warning'>2초이내 구매시 할인</div>
        ) : null}
        <Box>
          <Btn bg='blue'>스타일드컴포넌트</Btn>
          <Btn bg='orange'>로 만든</Btn>
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
            <input
              type='text'
              onChange={(e) => {
                setNumInput(e.target.value);
              }}
            />
            <h4 className='pt-5'>{findProduct.title}</h4>
            <p>{findProduct.content}</p>
            <p>{findProduct.price}</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>

        <Nav variant='tabs' defaultActiveKey='link0'>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTap(0);
              }}
              eventKey='link0'
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTap(1);
              }}
              eventKey='link1'
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTap(2);
              }}
              eventKey='link2'
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TapContent tap={tap}></TapContent>
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
            <Btn bg='#2576f7'>
              <Link
                style={{ textDecorationLine: 'none', color: 'white' }}
                to={'/detail/' + i}
              >
                자세히 보기
              </Link>
            </Btn>
          </Col>
        );
      })}
    </div>
  );
}

function TapContent({ tap }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      // flushSync() 써도 automatic batching 막아줌
      setFade('end');
    }, 10);

    return () => {
      setFade('');
    };
  }, [tap]); // tap state를 받아와서 tap state가 변경될때마다 애니메이션 효과주면 됨!!

  // if (tap === 0) {
  //   return <div>내용0</div>;
  // }
  // if (tap === 1) {
  //   return <div>내용1</div>;
  // }
  // if (tap === 2) {
  //   return <div>내용2</div>;
  // }
  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  );
}
