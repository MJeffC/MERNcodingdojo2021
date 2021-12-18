import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const EditPet = (props) => {
    const {id} = props;
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState("");
    const [petSkillTwo, setPetSkillTwo] = useState("");
    const [petSkillThree, setPetSkillThree] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then( res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setPetSkillOne(res.data.petSkill[0]);
                setPetSkillTwo(res.data.petSkill[1]);
                setPetSkillThree(res.data.petSkill[2]);
            })
            .catch(err => console.log(err));
    }, [])

    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, {
            petName,
            petType,
            petDescription,
            petSkillOne,
            petSkillTwo,
            petSkillThree,
        })
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch(( err ) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            });    };

    return (
        <div className="container">
            <form onSubmit={updatePet}>
                <h3>Edit {petName}</h3>
                <div>
                <div style={{width: "45%"}}>
                <div>
                    <label htmlFor="petName" className="form-label">Pet Name</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="petName"
                        className="form-control"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="petType" className="form-label">Pet Type</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="petType"
                        className="form-control"
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="petDescription" className="form-label">Pet Description</label>
                </div>
                <div>
                    <textarea 
                        type="text"
                        id="petDescription"
                        className="form-control"
                        value={petDescription}
                        onChange={(e) => setPetDescription(e.target.value)}
                    />
                </div>
                </div>
                <div style={{width: "45%"}}>
                Skills (optional)
                <div>
                    <label htmlFor="petSkillOne" className="form-label">Skill 1</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="petSkillOne"
                        className="form-control"
                        value={petSkillOne}
                        onChange={(e) => setPetSkillOne(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="petSkillTwo" className="form-label">Skill 2</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="petSkillTwo"
                        className="form-control"
                        value={petSkillTwo}
                        onChange={(e) => setPetSkillTwo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="petSkillThree" className="form-label">Skill 3</label>
                </div>
                <div>
                    <input 
                        type="text"
                        id="petSkillThree"
                        className="form-control"
                        value={petSkillThree}
                        onChange={(e) => setPetSkillThree(e.target.value)}
                    />
                </div>
                </div>
                <div style= {{marginTop: "10px"}}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
            {errors && Object.keys(errors).map((errKey, index) => {
                return (
                    <p className="error-text" key={index} style={{ color: "red"}}>
                        {errors[errKey].message}
                    </p>
                );
            })}
        </div>
    )
}

export default EditPet;