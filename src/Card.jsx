import React from 'react'
import "./Post.css"
function Card({post}) {
  return (
    <center>
    <section className='concard'>
        <section className='card-header'>
            <div>
                <div className='name'>{post.name}</div>
                <div className=''>{post.location}</div>
            </div>
            <span>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </span>
        </section>
        <section className='card-img'>
            {/* <img src={require(""+post.PostImage)} alt="place"/> */}
            <img width={100} height={100} style={{border: '2px solid red'}} src={`http://localhost:3004/images/${post.PostImage}`}/>
        </section>
        <section className='likes'>
        <span>
        <i class="fa-regular fa-heart"></i><i class="fa-regular fa-paper-plane"></i>
        </span>
        <span className='date'>{post.date}</span>
        </section>
        
        <span className='numlike'>{post.likes} likes</span>
        <section className='description'>{post.description}</section>
    </section>
    </center>
  )
}

export default Card