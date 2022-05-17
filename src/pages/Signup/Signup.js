import React, { useState } from 'react'
import {Link} from "react-router-dom"
import NavBar from '../../components/Navbar/NavBar'
import "./signup.css"

function Signup() {
  const [newAdminDetails, setNewAdminDetails] = useState({
    fname:"",
    lname:"",
    mname:"",
    phone:"",
    email:"", 
    password:"",
  });

    const handleChange = (e) => {
      setNewAdminDetails({
            ...newAdminDetails, [e.target.name] : e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({newAdminDetails}))
        // console.log(newadminDetails)
        // window.location="/"
    }

  return (
    <div>
        <NavBar />
        <div className='signup_container'>
            <div className='signup_form_container'>
                <h1>
                    Register
                </h1>
                <p>Hey, Kindly fill the form with correct details to create your account</p> 

                <form onSubmit={submitHandler}>
                    <div className='form_input_container'>
                      <label for="fname">First Name</label><br></br>
                      <input type="text" required name="fname" id='fname' onChange={handleChange}/><br></br>
                    </div>
                    <div className='form_input_container'>
                      <label for="lname">Last Name</label><br></br>
                      <input type="text" required name="lname" id='lname' onChange={handleChange}/><br></br>
                    </div>
                    <div className='form_input_container'>
                      <label for="mname">Middle Name</label><br></br>
                      <input type="text" required name="mname" id='mname' onChange={handleChange}/><br></br>
                    </div>
                    <div className='form_input_container'>
                      <label for="phone">Phone Number</label><br></br>
                      <input type="tel" required name="phone" id='phone' onChange={handleChange}/><br></br>
                    </div>
                    <div className='other_form_input_container'>
                      <label for="email">Email</label><br></br>
                      <input type="email" required name="email" id='email' onChange={handleChange}/><br></br>
                      <label for="password">Password</label><br></br>
                      <input type="password" name="password" required id='password' onChange={handleChange}/>
                      <label for="Cpassword">Confirm Password</label><br></br>
                      <input type="password" name="Cpassword" required id='Cpassword' onChange={handleChange}/>
                      <br></br>
                    </div>
                    <button className='signBtn'>
                        Sign up
                    </button>
                </form>
                <p>Already have an account? <Link to=""> Login Now</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup