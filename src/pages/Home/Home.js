import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../../components/Dashboard/Dashboard'
import Topbar from '../../components/Topbar/Topbar'
import "./home.css"


function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='container'>
        <Topbar />
        <div className='main_display'>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Home