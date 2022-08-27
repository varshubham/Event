import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleclick = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://git.heroku.com/eventappjs.git/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            setTimeout(() => {
                navigate('/');
            }, 1000);

        }
        else {
            setTimeout(() => {
                alert("Invalid Credentials,if you are new here then sign in first")
            }, 1500);
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const signupclick = () =>{
        navigate("/signup")
    }
    return (
        <div>
            <div className='login'>
                <h1>Login to Event App</h1>
                <form className='login-form' onSubmit={handleclick}>
                    <div className='field'>
                        <label htmlFor="email">Email address </label>
                        <input type="email"  name='email' id="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} required />

                    </div>
                    <div className="field">
                        <label htmlFor="password" >Password</label>
                        <input type="password"  name='password' id="password" value={credentials.password} onChange={onChange} required />
                    </div>
                    <div className="field">
                        <button type="submit" >Submit</button>
                        <button type="submit" className='signup' onClick={signupclick} >Signup</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login

