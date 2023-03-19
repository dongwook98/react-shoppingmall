import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js'

function App() {
  return (

    // let [shoes] =useState();

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
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="" />
            <h4>{data[0].title}</h4>
            <p>{data[0].content}</p>
            <p>{data[0].price}</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" alt="" />
            <h4>{data[1].title}</h4>
            <p>{data[1].content}</p>
            <p>{data[1].price}</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" alt="" />
            <h4>{data[2].title}</h4>
            <p>{data[2].content}</p>
            <p>{data[2].price}</p>
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
