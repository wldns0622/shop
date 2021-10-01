import React, {useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Shoes from '../components/Shoes';
import axios from 'axios';

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

function Main({shoes, setShoes}) {


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
          {shoes?.map((item) => (<Shoes key={item.id} data={item} />))}
        </ul>
      </div>

      <button className="btn btn-primary" onClick={() => {
        axios.get(`https://codingapple1.github.io/shop/data2.json`)
        .then((res) => {
          setShoes([...shoes, ...res.data]);
        })
        .catch((rej) =>{
          console.log(rej);
        })
        
      }}>더 보기</button>
    </>
  )
}

export default Main;