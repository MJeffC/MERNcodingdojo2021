import './App.css';
import { Router } from "@reach/router";
import Form from "./components/Form";
import Details from "./components/Details";
import Edit from "./components/Edit";
import React from 'react';

function App() {
  return (
    <div className="container">
      <Router>
        <Form path="/" />

        <Details path="/:id" />

        <Edit path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
