import React, {useState} from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import NavBar from '../../components/Navbar/NavBar'

function Login() {
    const [adminDetails, setAdminDetails] = useState({email:"", password:""});

    const handleChange = (e) => {
        setAdminDetails({
            ...adminDetails, [e.target.name] : e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({adminDetails}))
        console.log(adminDetails)
        window.location="/"
    }

  return (
    <div className='login_page'>
        <NavBar />
        <div className='login_container'>
            <div className='form_container'>
                <h1>
                    Admin Login
                </h1>
                <p>Hey, Kindly enter your details to sign in to your account's dashboard</p> 

                <form onSubmit={submitHandler}>
                    <label for="email">Email</label><br></br>
                    <input type="email" placeholder="Enter your email" required name="email" id='email' onChange={handleChange}/><br></br>
                    <label for="password">Password</label><br></br>
                    <input type="password" placeholder="Password" name="password" required id='password' onChange={handleChange}/>
                    <br></br>
                    <input type="checkbox" name="checkbox" value="remember"  />
                    <label for="checkbox"> Remember Me</label>
                    <br>
                    </br>
                    <button className='signBtn'>
                        Sign in
                    </button>
                </form>
                <p>Don't have an account? <Link to="/signup"> SignUp Now</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login