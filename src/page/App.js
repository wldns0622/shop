import React, {useState, lazy, Suspense} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

import data from '../data';
import '../style/app.css'


// import Main from './Main';
// import Detail from './Detail';
// import Cart from './Cart';

let Main = lazy(() => import('./Main.js') );
let Detail = lazy(() => import('./Detail.js') );
let Cart = lazy(() => import('./Cart.js') );




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
          <Nav.Link as={Link} to="/cart" >Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/detail/:id" >
          <Suspense fallback={<div>로딩중이에요</div>}>
            <Detail shoes={shoes} stock={stock} setStock={setStock}/>
          </Suspense>
        </Route>
        <Route path="/cart">
          <Suspense fallback={<div>로딩중이에요</div>}>
            <Cart />
          </Suspense>
        </Route>
        <Route path="/:id">
          <div>잘못된 요청입니다!</div>
        </Route>
        <Route path="/">
          <Suspense fallback={<div>로딩중이에요</div>}>
            <stockContext.Provider value={stock}>
              <Main shoes={shoes} setShoes={setShoes} />
            </stockContext.Provider>
          </Suspense>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
