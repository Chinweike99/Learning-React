import React, {Fragment, useState} from "react";

const InputTodo = () => {
    const [description, setDescription] = useState('')
    // const [submitData, setsubmitData] = useState([]);

    const handleChange = (event)=>{
        setDescription(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:3400/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/"; // Refreshes page and returns to homePage
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={description} onChange={handleChange} required/>
                <button className="btn btn-success" >Add</button>
            </form>
            <p>{description}</p>
        </Fragment>
    );
};

export default InputTodo;