import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Edit = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price, 
            description
        })
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => setErrors(err.response));
    };

    const deleteProduct = (product_id) => {
        axios.delete(`http://localhost:8000/api/product/${product_id}`)
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => setErrors(err.response));
    };

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        className="form-control" 
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="price" className="form-label">Price</label>
                    <input 
                        type="text" 
                        id="price" 
                        className="form-control" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        type="text" 
                        id="description" 
                        className="form-control" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div style= {{marginTop: "10px"}}>
                    <button type="submit" className="btn btn-primary" >Update</button>
                </div>
                </form>
                <div style= {{marginTop: "10px"}}>
                    <button type="button" className="btn btn-danger" onClick={(e) => {deleteProduct(id)}}>Delete</button>
                </div>
        </div>
    )
}
export default Edit;

