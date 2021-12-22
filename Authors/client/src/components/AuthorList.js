import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';

const AuthorList = () => {
    // const [name, setName] = useState("");

    const [errors, setErrors] = useState("");

    const [authors, setAuthors] = useState([]);

    const [triggerRequest, setTriggerRequest] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8001/api/author")
          .then( (res) => {
            setAuthors(res.data);
          });
    }, [triggerRequest])

      const deleteAuthor = (author_id) => {
        axios.delete(`http://localhost:8001/api/author/${author_id}`)
            .then((response) => {
                console.log(response);
                setTriggerRequest(!triggerRequest);
            })
            .catch((err) => setErrors(err.response));
    };

    const editAuthor = (author_id) => {
        axios.get(`http://localhost:8001/api/author/${author_id}`)
            .then((response) =>{
                navigate(`/${author_id}/edit`);
            })
            .catch((err) => setErrors(err.response));
    };

    return (
        <div className="container" style= {{marginTop: "20px"}}>
        <h1>Author List</h1>
        <table striped-bordered-hover>
            <thead>
                {/* <th>#</th> */}
                <th style={{width: "300px"}}>Authors Name</th>
                <th>Action</th>
            </thead>
            <tbody>
                {authors.map((author, index) => {
                    return (
                    <tr>
                        {/* <td>{index}</td> */}
                        <td><Link to={`/${author._id}`}>{author.name}</Link></td>
                        {/* <td><Link to={`/${product._id}/edit`}>Edit</Link> |  */}
                        <td><button type="button" className="btn btn-light" onClick={(e) => {editAuthor(author._id)}} >Edit</button>
                        <button type="button" className="btn btn-danger" onClick={(e) => {deleteAuthor(author._id)}} >Delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default AuthorList;