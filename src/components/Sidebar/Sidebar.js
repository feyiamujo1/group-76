import React from 'react'
import "./sidebar.css"
import Logo from "../../images/logo2.png"
import {GridViewRounded, GroupWorkRounded, PeopleRounded, Inventory2Rounded, ExitToAppRounded} from "@mui/icons-material"

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className='links_container'>
        <div className='logo_container'>
          <img src={Logo} alt="logo"/>
        </div>
        <ul>
          <li className='link selected'>
            <GridViewRounded/>
            Dashboard
          </li>
          <li className='link'>
            <GroupWorkRounded/>
            Team Members
          </li>
          <li className='link'>
            <PeopleRounded/>
            Clients
          </li>
          <li className='link'>
            <Inventory2Rounded/>
            Products
          </li>
        </ul>
      </div>
      
        <div>
          <div className='line_container'>
          </div>
          <div className='logout_container'>
          <ExitToAppRounded />
            <p>
              Logout
            </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar