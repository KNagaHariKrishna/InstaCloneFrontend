import React from 'react'
import "./Post.css"
import {Link,Outlet} from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <section className='logo'>
            <img src={require("./Images/icon.png")} alt="logo" className='logo'/>
            <span className='heading'>Instaclone</span>
        </section>
        <section className='cam'>
        <Link to="/Form">
        <img src={require("./Images/camera.png")} alt="logo" className='cam'/>
        </Link>
        </section>
        <Outlet/>
    </div>
  )
}

export default Header