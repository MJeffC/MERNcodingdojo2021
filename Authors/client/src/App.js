import './App.css';
import { Router } from "@reach/router";
import AuthorList from './components/AuthorList';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import { Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="container">
      <div>
        <Navbar>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/new">Add New Author</Nav.Link>
            </Nav>
        </Navbar>
      </div>
      <div>
      <Router>
        <AuthorList path="/" />
        <AddAuthor path="/new" />
        <EditAuthor path="/:id/edit" />
      </Router>
      </div>
    </div>
  );
}

export default App;
