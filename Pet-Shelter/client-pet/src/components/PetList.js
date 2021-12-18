import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';


const PetList = () => {
    const [errors, setErrors] = useState("");

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then( (res) => {
                setPets(res.data);
            });
    }, [])

    const editPet = (pet_id) => {
        axios.get(`http://localhost:8000/api/pet/${pet_id}`)
            .then((response) => {
                navigate(`/pet/${pet_id}/edit`);
            })
            .catch((err) => setErrors(err.response));
    };

    const detailPet = (pet_id) => {
        axios.get(`http://localhost:8000/api/pet/${pet_id}`)
            .then((response) => {
                navigate(`/pet/${pet_id}`);
            })
            .catch((err) => setErrors(err.response));
    };

    return (
        <div className="container" style= {{marginTop: "20px"}}>
        <h3>These pets are looking for a good home</h3>
        <table className="table table-striped">
            <thead>
                <th style={{width: "300px"}}>Authors Name</th>
                <th style={{width: "100px"}}>Type</th>
                <th style={{width: "150px"}}>Action</th>
            </thead>
            <tbody>
                {pets.map((pet, index) => {
                    return (
                    <tr>
                        <td>{pet.petName}</td>
                        <td>{pet.petType}</td>
                        <td><button type="button" className="btn btn-primary" onClick={(e) => {detailPet(pet._id)}} >Details</button>
                        <button type="button" className="btn btn-light" onClick={(e) => {editPet(pet._id)}} >Edit</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default PetList;