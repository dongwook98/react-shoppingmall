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
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">당근 마켓</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='link'>홈</Link>
            <Link to="/detail" className='link'>상세 페이지</Link>
            <Link to="/cart" className='link'>장바구니</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Container>
            <Row>
              {/* <Col>
              <ProductList shoes={shoes} index={0} src='https://codingapple1.github.io/shop/shoes1.jpg'></ProductList>
            </Col>
            <Col>
              <ProductList shoes={shoes} index={1} src='https://codingapple1.github.io/shop/shoes2.jpg'></ProductList>
            </Col>
            <Col>
              <ProductList shoes={shoes} index={2} src='https://codingapple1.github.io/shop/shoes3.jpg'></ProductList>
            </Col> */}
              <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>

              {
                shoes.map((item, i) => {
                  return (
                    <Col>
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
        <Route path='/detail' element={<div>상세페이지임</div>} />
        <Route path='/about' element={<div>어바웃페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
