import React from 'react'
import "./sidebar.css"

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className='links_container'>
        <ul>
          <li className='link active'>
            Dashboard
          </li>
          <li className='link'>
            Team Members
          </li>
          <li className='link'>
            Clients
          </li>
          <li className='link'>
            Products
          </li>
        </ul>
      </div>

      <div className='logout_container'>
        <p>
          Logout
        </p>
      </div>
    </div>
  )
}

export default Sidebar