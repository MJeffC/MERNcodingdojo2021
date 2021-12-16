import axios from "axios";
import React, { useState } from 'react';
import { navigate } from '@reach/router';

const AddAuthor = () => {
    const [name, setName] = useState("");

    const [errors, setErrors] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8001/api/author", {name})
            .then( (response)  => {
                console.log("SUCCESS", response);
                navigate('/');
            })
            .catch(( err ) => setErrors(err.response));
    };

    const cancelAuthor = (e) => {
        navigate('/');
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <button type="button" className="btn btn-primary" style={{ margin: "10px"}} onClick={(e) => {cancelAuthor()}}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{ margin: "10px"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddAuthor;