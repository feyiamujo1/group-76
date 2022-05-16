import React from 'react'

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className='links_container'>
        <ul>
          <li>
            Dashboard
          </li>
          <li>
            Team Members
          </li>
          <li>
            Clients
          </li>
          <li>
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