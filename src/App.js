import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js'; //데이터 불러오기
import ProductList from './components/ProductList.jsx'; // 외부 파일에 있는 컴포넌트 파일 불러오기
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import About from './pages/About';
import EventPage from './pages/EventPage';
import axios from 'axios';

export let Context1 = createContext(); // state보관함

let moreBtnCount = 1; // App 컴포넌트 안에넣으면 재렌더링 될때마다 moreBtnCount가 1로 초기화됨...!!!!

function App() {
  let [shoes, setShoes] = useState(data);
  let [loading, setLoading] = useState(false);
  let [재고] = useState([10, 11, 12]); // Detail, TabContent에서 쓰고싶다고 가정(props쓰면 되겠지만 ContextAPI 사용)
  // let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>DEF마트</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to='/' className='link'>
              홈
            </Link>
            <Link to='/about' className='link'>
              회사 소개
            </Link>
            <Link to='/detail' className='link'>
              상세 페이지
            </Link>
            <Link to='/cart' className='link'>
              장바구니
            </Link>
            <Link to='/event' className='link'>
              이벤트
            </Link>

            {/* useNavigate 
            <Nav.Link className='link' onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link className='link' onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link className='link' onClick={() => navigate(1)}>앞으로 가기</Nav.Link>
            <Nav.Link className='link' onClick={() => navigate(-1)}>뒤로 가기</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <Container>
              <Row>
                <div
                  className='main-bg'
                  style={{ backgroundImage: 'url(' + bg + ')' }}
                ></div>

                {shoes.map((item, i) => {
                  return (
                    <Col md={4} key={i}>
                      <ProductList shoes={shoes[i]} num={i}></ProductList>
                      {/* shoes[i] : shoes 데이터를 다 전달하는게 아니라 한개씩 전달 */}
                    </Col>
                  );
                })}
                {/* map함수로 컴포넌트 중복 제거 */}
              </Row>

              {loading ? (
                <div style={{ background: 'red', color: 'white' }}>
                  로딩중...
                </div>
              ) : null}
              {console.log(moreBtnCount)}
              <button
                onClick={() => {
                  moreBtnCount = moreBtnCount + 1;
                  // 로딩중UI 띄우기~
                  setLoading(true);
                  // axios는 외부라이브러리라 npm install axios 하고 위에 import
                  if (moreBtnCount === 2) {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((result) => {
                        // 데이터 요청성공하면 데이터들의 html 생성
                        // 쌩자바스크립트) html 생성해주세요~
                        // 리액트) state만 추가해주면 알아서 재렌더링해줌
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                        setLoading(false);
                      })
                      .catch(() => {
                        console.log('실패함ㅅㄱ');
                        setLoading(false);
                      });
                  }
                  if (moreBtnCount === 3) {
                    axios
                      .get('https://codingapple1.github.io/shop/data3.json')
                      .then((result) => {
                        console.log(result.data);
                        // 데이터 요청성공하면 데이터들의 html 생성
                        // 쌩자바스크립트) html 생성해주세요~
                        // 리액트) state만 추가해주면 알아서 재렌더링해줌
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                        setLoading(false);
                      })
                      .catch(() => {
                        console.log('실패함ㅅㄱ');
                        setLoading(false);
                      });
                  }

                  if (moreBtnCount >= 4) {
                    alert('상품이 더이상 없습니다.');
                    setLoading(false);
                  }
                }}
              >
                더보기 버튼
              </button>
            </Container>
          }
        ></Route>
        <Route
          path='/detail/:userid'
          element={
            <Context1.Provider value={{ 재고 }}>
              <Detail shoes={shoes}></Detail>
            </Context1.Provider>
          }
        />
        <Route path='/detail' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='*' element={<div>없는페이지요</div>} />
        <Route path='/about' element={<About></About>}>
          <Route
            path='member'
            element={
              <div>
                <h4>회사 직원정보임</h4>
              </div>
            }
          />
          <Route
            path='location'
            element={
              <div>
                <h4>회사 위치정보임</h4>
              </div>
            }
          />
        </Route>
        <Route path='/event' element={<EventPage></EventPage>}>
          <Route
            path='one'
            element={
              <div>
                <h4>첫 주문시 양배추즙 서비스</h4>
              </div>
            }
          ></Route>
          <Route
            path='two'
            element={
              <div>
                <h4>생일기념 쿠폰받기</h4>
              </div>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
