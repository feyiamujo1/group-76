import React from 'react'
import { NotificationsNone, Settings, Menu} from '@mui/icons-material';
import "./topbar.css"
import Profile from "../../images/profile.png"

function Topbar() {
  
  // const [showNav, setShowNav] = useState(true);
  const openNav = () => {
    document.getElementById("sidebar").style.display = "flex";
  }
  // const closeNav = () => {
  //   document.getElementById("sidebar").style.display = "none";
  // } 
  // const toggleNav = () =>{
  //   if(showNav){
  //     setShowNav(false)
  //     closeNav()
  //   }else{
  //     openNav()
  //     setShowNav(true)
  //   }
  // }
  //   console.log(showNav)
  // }
  // useEffect(() => {
  //   setShowNav("")
  // }, [])
  

  return (
    <div className='topbar'>
        <div className='menu_container' > {/* onClick={toggleNav} */}
          <Menu id="menubtn" onClick={openNav}/>
        </div> 
        <div className='icon_container'>
          <div>
            <NotificationsNone className='icon'/>
          </div>
          <div>
            <Settings className='icon'/>
          </div>
          <div className='profile_image_container'>
            <img src= {Profile} alt="profile" className='icon'/>
          </div>
        </div>

    </div>
  )
}

export default Topbar