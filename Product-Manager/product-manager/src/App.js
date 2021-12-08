import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <Router>
        <Form path="/new" />
      </Router>
    </div>
  );
}

export default App;
