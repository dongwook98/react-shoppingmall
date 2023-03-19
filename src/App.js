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

function App() {

  let [shoes] = useState(data);

  return (

    <div className="App">

      <Navbar bg="primary" variant="dark" id='gnb-root'>
        <Container>
          <Navbar.Brand href="#home" id='logo'>당근 마켓</Navbar.Brand>
          <Nav className="me-auto menus">
            <Nav.Link href="#home" className='menu'>중고거래</Nav.Link>
            <Nav.Link href="#features" className='menu'>동네가게</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>알바</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>부동산 직거래</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>중고차 직거래</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>

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

          {
            shoes.map((item, i) => {
              return (
                <Col>
                  <ProductList shoes={shoes} index={i} src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}></ProductList>
                </Col>
              )
            })
          }
          {/* map함수로 컴포넌트 중복 제거 */}


        </Row>
      </Container>



    </div>
  );
}

export default App;
