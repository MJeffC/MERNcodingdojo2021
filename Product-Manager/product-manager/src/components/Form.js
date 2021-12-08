import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title,
            price,
            description,
        }
        axios.post("http://localhost:8000/api/product", postData)
            .then(( response ) => console.log("SUCCESS", response))
            .catch(( err ) => console.log("ERROR", err));
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
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;