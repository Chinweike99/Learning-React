import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import '../index.css';
// import { Form } from './Form';
import { useToggle } from './useToggle';
import "../App.css";
 

function App(){
    const [isVisible, toggle] = useToggle();
    const [isVisible1, toggle1] = useToggle();


    return (
        <div className='App'>
            Welcome
            <button onClick={toggle}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1>Hidden Text</h1>}

            <button onClick={toggle1}>
                {isVisible1 ? "Hide" : "Show"}
            </button>
            {isVisible1 && <h1>Collapse Text</h1>}
        </div>
    )
}

export default App;