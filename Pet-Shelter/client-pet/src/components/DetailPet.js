import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const DetailPet = (props) => {
    const {id} = props;
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState("");
    const [petSkillTwo, setPetSkillTwo] = useState("");
    const [petSkillThree, setPetSkillThree] = useState("");
    const [petSkill, setPetSkill] = useState([]);

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then( res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setPetSkill(res.data.petSkill);
            })
            .catch(err => console.log(err));
    }, [])

    const deletePet = (pet_id) => {
        axios.delete(`http://localhost:8000/api/pet/${pet_id}`)
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((err) => setErrors(err.response));
    };

    return (
        <div className="container">
            <h3>Details about {petName}</h3>
            <button type="button" className="btn btn-danger" onClick={(e) => {deletePet(id)}} >Adopt {petName}</button>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <td style={{ width: "150px"}}>Pet type:</td>
                        <td>{petType}</td>
                    </tr>
                    <tr>
                        <td>Pet Description:</td>
                        <td>{petDescription}</td>
                    </tr>
                    <tr>
                        <td>Skills:</td>
                        <td>
                            {petSkill.map((skill, index) => {
                                return (
                                    <>{skill}<br /></>
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailPet;