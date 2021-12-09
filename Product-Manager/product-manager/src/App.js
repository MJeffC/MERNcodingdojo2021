import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";
import Form from "./components/Form";
import Display from "./components/Display";
import Details from "./components/Details";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const [products, setProducts] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/product")
  //     .then( (res) => {
  //       setProducts(res.data);
  //       setLoaded(true);
  //     });
  // }, [])
  return (
    <div className="container">
      <Router>
        <Form path="/new" />

        {/* { loaded && <Display path="/new" products={products} /> } */}
        <Details path="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
