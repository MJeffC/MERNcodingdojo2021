import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const EditAuthor = (props) => {
    const {id} = props;
    const [name, setName] = useState("");
    const [nameID, setNameID] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8001/api/author/" + id)
            .then( res => {
                setName(res.data.name);
                setNameID(res.data._id);
            })
            .catch(err => console.log(err));
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8001/api/author/${id}`, {
            name,
        })
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => setErrors(err.response));
    };

    const cancelAuthor = (e) => {
        navigate('/');
    };

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8001/api/author/${nameID}`)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => setErrors(err.response));
    };

    return (
        <div className="container">
            <form onSubmit={updateAuthor}>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <button type="button" className="btn btn-primary" style={{ margin: "10px"}} onClick={(e) => {cancelAuthor()}}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{ margin: "10px"}}>Update</button>
                    <button type="button" className="btn btn-danger" style={{ margin: "10px"}} onClick={(e) => {deleteAuthor()}} >Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditAuthor;