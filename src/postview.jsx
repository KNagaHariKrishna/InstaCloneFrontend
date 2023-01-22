import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import Header from './header';

export default function Postview() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
  fetch("http://localhost:3004").then((res)=>res.json()
  ).then((data)=>{setPosts(data)
    console.log(data)
  },
  
  ).catch((err)=>{if(err){
    console.log(err)
  }})
  },[])
  let data=posts.map((post,index)=>{
    return(
      <Card post={post} key={index}/>
    )
  })
  return(
    <div className=''>
      <Header/>
      <hr/>
      {data}
    </div>
  )
}