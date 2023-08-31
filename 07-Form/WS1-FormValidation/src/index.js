
// Import : Other Code
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

// Import : Our Code
import Item from './components/item.jsx'
import './index.css';

// React
function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    // Email
    function handleChangeEmail(event) {
        setEmail(event.target.value)
        console.log(event.target.value);
    }

    // Password
    function handleChangePassword(event) {
        setPassword(event.target.value)
        console.log(event.target.value);
    }

    // Submit
    function handleSubmit (event) {
        event.preventDefault();
        console.log('submit');
    }

    return (
        <div className='app'>
            <h1>Sign Up</h1>
            <form className='form__register'>
                <input 
                    type='email'
                    placeholder='email'
                    onChange={handleChangeEmail}
                    value={email}
                />
                <input 
                    type='password'
                    placeholder='password'
                    onChange={handleChangePassword}
                    value={password}
                />
                <input 
                    type='password' 
                    placeholder='confirm password'
                    
                />
                <button 
                    onClick={handleSubmit} type='submit'>Sign up with Email</button>
            </form>
        </div>
    );
}

// ReactDOM
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
