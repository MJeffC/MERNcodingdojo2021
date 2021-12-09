import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [products, setProducts] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title,
            price,
            description,
        }

        setTitle("");
        setPrice("");
        setDescription("");

        axios.post("http://localhost:8000/api/product", postData)
            .then(( response ) => console.log("SUCCESS", response))
            .catch(( err ) => console.log("ERROR", err.response.data));

    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
          .then( (res) => {
            setProducts(res.data);
          });
      }, [])

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>Product Manager</h1>
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        className="form-control" 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price" className="form-label">Price</label>
                    <input 
                        type="text" 
                        id="price" 
                        className="form-control" 
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        type="text" 
                        id="description" 
                        className="form-control" 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div style= {{marginTop: "10px"}}>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div style= {{marginTop: "20px"}}>
                <h2>Product List</h2>
                {products.map((product, index) => {
                    return (
                    <>
                    <h5 key={index}><Link to={`/product/${product._id}`}>{product.title}</Link></h5>
                    </>
                    )
                })}
            </div>
        </div>

    );
}

export default Form;