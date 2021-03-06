import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:8000/api/auth/login";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password : credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success)
        {
            // Save the auth-Token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
        }
        else{
            alert("Invalid Credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <>
        <div className="container my-3">
            <h1 className="text-center">Login to iNoteBook</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' id="password" />
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            </div>
        </>
    )
}

export default Login
