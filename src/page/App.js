import { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import '../style/app.css'
import data from '../data';
import Shoes from '../components/Shoes';

function App() {

  let [shoes, setShoes] = useState(data);

  const Wrapper = styled.section`
    padding: 4em;
    background-color: #eceef2;
    text-align: center;
  `;

  const Title = styled.h1`
    color: #4572fe;
    font-size: 4rem;
    font-weight: 700;
  `;

  const Description = styled.p`
    margin: 1em 0;
    font-size: 1.2em;
  `;

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Wrapper className="background">
        <Title>
          Hello World!
        </Title>
        <Description>
          helloodjadlajdlkasjdklsa
        </Description>
        <Button variant="primary" size="lg">
          Large button
        </Button>
      </Wrapper>

      <div className="container">
        <ul style={{listStyle: 'none'}} className="row">
          {shoes.map((item) => (<Shoes key={item.id} data={item} />))}
        </ul>
      </div>

    </div>
  );
}

export default App;
