import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import { Context1 } from './../App.js';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store';
import { useNavigate } from 'react-router-dom';

// ! 스타일 컴포넌트 학습한 부분!
// let Btn = styled(Link)`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg === 'blue' ? 'white' : 'black')};
//   padding: 10px;
//   display: inline-block;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

export default function Detail({ shoes }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // let { 재고 } = useContext(Context1);

  let [boxShow, setBoxShow] = useState(true);
  let [count, setCount] = useState(0);
  let { userid } = useParams(); // 유저가 url path에 입력한 값
  let findProduct = shoes.find((product) => product.id == userid); // 유저가 path에 입력한 상품을 찾음
  let [numInput, setNumInput] = useState('');
  let [tap, setTap] = useState(0); // Tap UI 의 상태 저장
  let [fade2, setFade2] = useState('');
  console.log(findProduct);
  console.log('userid', userid);

  useEffect(() => {
    if (isNaN(numInput) === true) {
      // 문자입력시 실행
      alert('숫자만 입력하세요.');
    }
  }, [numInput]);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade2('end');
    }, 100);

    return () => {
      setFade2('');
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    // 컴포넌트 mount, update시 코드 실행해주는 useEffect
    console.log('useEffect실행됨');

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

  useEffect(() => {
    // 누가 Detail 페이지 접속하면
    // 그페이지에 보이는 상품id를 가져와서
    // localStrage에 watched 항목에 추가
    let 꺼낸거 = localStorage.getItem('watched');
    꺼낸거 = JSON.parse(꺼낸거);
    // 이미 있으면 push 하지마라 if문 사용해도 되지만 Set자료형 사용
    꺼낸거.push(findProduct.id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem('watched', JSON.stringify(꺼낸거));
  }, []);

  return (
    <div className={'container start ' + fade2}>
      {/* {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          useEffect 실행되는 버튼
        </button> */}
      {boxShow ? (
        <div className='alert alert-warning'>2초이내 구매시 할인</div>
      ) : null}
      {/* <Box>
          <Btn bg='blue'>스타일드컴포넌트</Btn>
          <Btn bg='orange'>로 만든</Btn>
          <Btn bg='green'>버튼</Btn>
        </Box> */}
      {/* {재고} */}
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

          <button
            className='btn btn-danger'
            onClick={() => {
              dispatch(
                addItem({
                  id: findProduct.id,
                  name: findProduct.title,
                  count: 1,
                })
              );
              navigate('/cart');
            }}
          >
            주문하기
          </button>
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
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey='link1'
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey='link2'
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(3);
            }}
            eventKey='link3'
          >
            반품/교환정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap}></TapContent>
    </div>
  );
}

function TapContent({ tap }) {
  let [fade, setFade] = useState('');
  let { 재고 } = useContext(Context1);

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
      {
        [
          <div>재고 : {재고}</div>,
          <div>강동욱 : 너무 좋은 상품이에요!</div>,
          <div>강동욱 : 신발사이즈는 5사이즈씩 나오나요?</div>,
          <div>강동욱 : 260에서 270으로 교환했습니다~</div>,
        ][tap]
      }
    </div>
  );
}
