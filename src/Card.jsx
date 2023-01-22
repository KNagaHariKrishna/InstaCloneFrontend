import React from 'react'
import "./Post.css"
function Card({post}) {
  return (
    <center>
    <section className='concard'>
        <section className='card-header'>
            <div>
                <div className='name'>{post.name}</div>
                <div className='location'>{post.location}</div>
            </div>
            <span>
              <img src={require("./Images/more_icon@2x.jpg")} className="moreopt"/>
            {/* <i className="fa fa-ellipsis-h" aria-hidden="true"></i> */}
            </span>
        </section>
        <section className='card-img'>
            {/* <img src={require(""+post.PostImage)} alt="place"/> */}
            <img src={`http://localhost:8080/images/${post.image}`} className="Cardimg"/>
        </section>
        <div className='footer'>
        <section className='likes'>
        <span>
          <img src={require("./Images/heart.jpg")} alt="heartimg"/><img src={require("./Images/share.jpg")} alt="shareimg" className='share'/>
        </span>
        <span className='date'>{post.date.toString().split("T")[0]}</span>
        </section>
        
        <span className='numlike'>{post.likes} likes</span>
        <section className='description'>{post.discription}</section>
        </div>
    </section>
    </center>
  )
}

export default Card