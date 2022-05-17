import React from 'react'
import { NotificationsNone, Settings, AccountCircleRounded } from '@mui/icons-material';
import "./topbar.css"

function Topbar() {
  return (
    <div className='topbar'>
       <div className='logo_container'>
          <p className='logo'>
            76gems
          </p>
        </div> 
        <div className='icon_container'>
          <div>
            <NotificationsNone/>
          </div>
          <div>
            <Settings/>
          </div>
          <div>
            <AccountCircleRounded />
          </div>
        </div>

    </div>
  )
}

export default Topbar