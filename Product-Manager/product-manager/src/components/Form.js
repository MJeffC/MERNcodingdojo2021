import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";


const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState("");

    const [products, setProducts] = useState([]);

    const [triggerRequest, setTriggerRequest] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
          .then( (res) => {
            setProducts(res.data);
          });
      }, [triggerRequest])

    const handleFormSubmit = (e) => {
        // e.preventDefault();
        const postData = {
            title,
            price,
            description,
        }

        axios.post("http://localhost:8000/api/product", postData)
            .then( (response)  => {
                console.log("SUCCESS", response);
                setProducts([...postData, response]);
                setTriggerRequest(!triggerRequest);
                console.log("trigger");
            })
            .catch(( err ) => setErrors(err.response));
    };

    const deleteProduct = (product_id) => {
        axios.delete(`http://localhost:8000/api/product/${product_id}`)
            .then((response) => {
                console.log(response);
                setTriggerRequest(!triggerRequest);
            })
            .catch((err) => setErrors(err.response));
    };

    const editProduct = (product_id) => {
        axios.get(`http://localhost:8000/api/product/${product_id}`)
            .then((response) =>{
                navigate(`/${product_id}/edit`);
            })
            .catch((err) => setErrors(err.response));

    };

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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div style= {{marginTop: "20px"}}>
                <h1>Product List</h1>
                <table striped-bordered-hover>
                    <thead>
                        {/* <th>#</th> */}
                        <th style={{width: "300px"}}>Title</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                            <tr>
                                {/* <td>{index}</td> */}
                                <td><Link to={`/${product._id}`}>{product.title}</Link></td>
                                {/* <td><Link to={`/${product._id}/edit`}>Edit</Link> |  */}
                                <td><button type="button" className="btn btn-light" onClick={(e) => {editProduct(product._id)}} >Edit</button>
                                <button type="button" className="btn btn-danger" onClick={(e) => {deleteProduct(product._id)}} >Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Form;