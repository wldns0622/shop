import '../style/app.css'
import Main from './Main';
import Detail from './Detail';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link to="/">Home</Link></Nav.Link>
          <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
          <Nav.Link >Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/detail" component={Detail} />
        <Route path="/:id">
          <div>아무거나적었을때 이거 보여주셈</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
