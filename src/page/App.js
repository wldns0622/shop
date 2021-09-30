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
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Route exact path="/" component={Main} />
      <Route path="/detail" component={Detail} />
    </div>
  );
}

export default App;
