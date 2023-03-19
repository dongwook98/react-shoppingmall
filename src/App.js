import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js' //데이터 불러오기
import ProductList from './components/ProductList.jsx'; // 외부 파일에 있는 컴포넌트 파일 불러오기
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import About from './pages/About';
import EventPage from './pages/EventPage';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">당근 마켓</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='link'>홈</Link>
            <Link to="/about" className='link'>회사 소개</Link>
            <Link to="/detail" className='link'>상세 페이지</Link>
            <Link to="/cart" className='link'>장바구니</Link>
            <Link to="/event" className='link'>이벤트</Link>

            {/* <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate(1)}>앞으로 가기</Nav.Link>
            <Nav.Link onClick={() => navigate(-1)}>뒤로 가기</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Container>
            <Row>
              <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>

              {
                shoes.map((item, i) => {
                  return (
                    <Col key={i}>
                      <ProductList shoes={shoes[i]} num={i}></ProductList>
                      {/* shoes[i] : shoes 데이터를 다 전달하는게 아니라 한개씩 전달 */}
                    </Col>
                  )
                })
              }
              {/* map함수로 컴포넌트 중복 제거 */}
            </Row>
          </Container>
        }></Route>
        <Route path='/detail/:userid' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/detail' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='*' element={<div>없는페이지요</div>} />
        <Route path='/about' element={<About></About>} >
          <Route path='member' element={<div><h4>회사 직원정보임</h4></div>} />
          <Route path='location' element={<div><h4>회사 위치정보임</h4></div>} />
        </Route>
        <Route path='/event' element={<EventPage></EventPage>}>
          <Route path='one' element={<div><h4>첫 주문시 양배추즙 서비스</h4></div>}></Route>
          <Route path='two' element={<div><h4>생일기념 쿠폰받기</h4></div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
