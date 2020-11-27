// Import  the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const Fruits = () =>{
    //const style = {backgroundColor: 'blue', color: 'white'}
    const buttonText = {text: 'Click me'}
    
    return (
        <div>
            <p>List of fruits:</p>
            <ul>
                <li>Orange</li>
                <li>Mango</li>
                <li>Banana</li>
            </ul>
            <label className= "label" htmlFor="name">Name:</label>
            <input id="name" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    )
}

// Show the React Component on the screen
ReactDOM.render(<Fruits/>, document.getElementById('root'));