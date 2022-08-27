import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: ""});

  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://git.heroku.com/eventappjs.git/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authtoken);


      setTimeout(() => {
        navigate('/')
      }, 1500);
    }
    else {

      setTimeout(() => {
        alert("Invalid Credentials")
      }, 1500);
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const signupclick = () =>{
    navigate("/login")
}

  return (
    <div>

      <div className='login'>
        <h1 >Signup to Event App</h1>
        <form className='login-form' onSubmit={handleclick}>
          <div className="field">
            <label htmlFor="name" >Name</label>
            <input type="text" id="name" name='name' onChange={onChange} required />

          </div>
          <div className="field">
            <label htmlFor="email" >Email address</label>
            <input type="email"  id="email" name='email' onChange={onChange} aria-describedby="emailHelp" required />

          </div>
          <div className="field">
            <label htmlFor="password" >Password</label>
            <input type="password"  id="password" name='password' onChange={onChange} minLength={5} required />
          </div>
          <div className="field">
            <button type="submit" >Submit</button>
            <button type="submit" className='signup' onClick={signupclick} >Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
