import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo_container'>
        <p className='logo'>
          76gems
        </p>
      </div>
      <div>
        <div className='button_container'>
          <Link to="/signup">
            <button className='regbtn'>
              Register
            </button>
          </Link>

          <Link to = "/login">
            <button>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar