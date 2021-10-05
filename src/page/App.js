import React, {useState} from 'react';
import '../style/app.css'
import Main from './Main';
import Detail from './Detail';
import Cart from './Cart';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

import data from '../data';

export let stockContext = React.createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
          <Nav.Link as={Link} to="/cart" >Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/detail/:id" >
            <Detail shoes={shoes} stock={stock} setStock={setStock}/>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/:id">
          <div>아무거나적었을때 이거 보여주셈</div>
        </Route>
        <Route path="/">
          <stockContext.Provider value={stock}>
            <Main shoes={shoes} setShoes={setShoes} />
          </stockContext.Provider>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
