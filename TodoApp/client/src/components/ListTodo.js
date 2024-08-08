import React, {Fragment, useEffect, useState} from "react";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

 
// FUNCTION TO EDIT TODO
const editTodo = async(id) =>{
    try {
        const editTodo = await fetch(`http://localhost:3400/todos/${id}`,{
            method: "PUT"
        });
        console.log(editTodo);
    } catch (error) {
        console.error(error.message)
    }
}


// FUNCTION TO DELETE TODO
    const deleteTodo = async(id) =>{
        try {
            const delTodo = await fetch(`http://localhost:3400/todos/${id}`,{
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }

    // SHOW TODOs
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:3400/todos");
            const fetchedData = await response.json();
            setTodos(fetchedData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);
    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                 {todos.map(todo => {
                    return <tr key={todo.todo_id}>
                        <td >{todo.description}</td>
                        <td><button className="btn btn-warning"
                        onClick={() => editTodo(todo.todo_id)}
                        >Edit</button></td>
                        <td><button className="btn btn-danger"
                        onClick={() =>deleteTodo(todo.todo_id)}
                        >Delete</button></td>
                    </tr>
                 })}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodo;