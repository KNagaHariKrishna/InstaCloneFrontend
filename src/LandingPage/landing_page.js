import React from 'react'
import "./Land.css"
import {Link,Outlet} from "react-router-dom";

export default function Landing_page() {
  return (
    <div className='Main'>
      <section className=''>
      <img src={require("../Images/lens-1418954@2x.png")} alt="Landing Img" className='landImage'/>
      </section>
      <section className='Text'>
      <h1 className='team'>10x Team 04</h1>
        <Link to="/Postview">
        <button>Enter</button>
        </Link>
      </section>
      <Outlet/>
    </div>
  )
}
