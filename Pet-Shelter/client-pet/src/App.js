import './App.css';
import { Router } from "@reach/router";
import PetList from './components/PetList';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import DetailPet from './components/DetailPet';
import { Navbar, Nav } from 'react-bootstrap';



function App() {
  return (
    <div className="container">
      <div>
        <Navbar>
        <h1>Pet Shelter</h1>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pet/new">New Pet</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <Router>
          <PetList path="/" />
          <NewPet path="/pet/new" />
          <EditPet path="/pet/:id/edit" />
          <DetailPet path="/pet/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
