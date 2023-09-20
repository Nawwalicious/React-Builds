// Importing necessary modules
import React, { useState } from "react";

// Importing stylesheet
import './Login.scss'

// Login component
function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

    function handleInputChange(event) {
        if(event.target.name === 'Username') {
            setUsername(event.target.value);
        }

        if(event.target.name === 'Password') {
            setPassword(event.target.value);
        }
    }

    function handleLogin(event) {
        event.preventDefault(); // To prevent page Reload's
        console.log(`${Username} & ${Password}`);
        setIsSubmitted(true); // Set isSubmitted to true when the form is submitted
    }
    
    return (
        <form onSubmit={handleLogin}>
            <div className="login-container">
                <div className="login-box">

                    <h1 className="login-header">Login</h1>

                    <div className="input-fields">
                        
                        <div className="username-field">
                            <label>Username: </label>
                            <input type="text" placeholder="Username" name="Username" onChange={handleInputChange}></input>
                        </div>
                        <div className="password-field">
                            <label>Password: </label>
                            <input type="password" placeholder="Password" name="Password" onChange={handleInputChange}></input>
                        </div>

                    </div>

                    {/* Add a conditional class to the button based on whether the form has been submitted */}
                    <button className={`login-button ${isSubmitted ? 'submitted' : ''}`} type="submit">Login</button>
                </div>
            </div>
        </form>
    );
}

export default Login;
