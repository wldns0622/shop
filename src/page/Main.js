import React, {useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Shoes from '../components/Shoes';

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

function Main({shoes}) {


  return (
    <>
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
    </>
  )
}

export default Main;