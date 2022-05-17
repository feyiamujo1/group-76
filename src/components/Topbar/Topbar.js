import React from 'react'
import { NotificationsNone, Settings } from '@mui/icons-material';
import "./topbar.css"
import Profile from "../../images/profile.png"

function Topbar() {
  return (
    <div className='topbar'>
       <div className='logo_container'>
          {/* <p className='logo'>
            76gems
          </p> */}
          
        </div> 
        <div className='icon_container'>
          <div>
            <NotificationsNone/>
          </div>
          <div>
            <Settings/>
          </div>
          <div className='profile_image_container'>
            <img src= {Profile} alt="profile"/>
          </div>
        </div>

    </div>
  )
}

export default Topbar