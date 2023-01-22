import React from "react";
import Header from "./header";
import {useState} from "react" 
export default function Form() {
  const [name, setName] = useState('')
  const [location , setLocation] = useState('')
  const [PostImage, setPostImage] = useState('') ;
  const [description, setDescritpion] = useState(""); 

  const uploadPost = () => {
    const formData = new FormData();
    // Map => takes the data in the key value format 
    formData.append("name", name)
    formData.append("location", location)
    formData.append("description", description)
    formData.append("PostImage", PostImage)

    fetch("http://localhost:3004/api", {
        method: 'POST',
        body: formData
    })
}
  return (
    <>
      <Header />
      <hr />
      <div className="postform">
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile02"
              onChange={(e) => {
                setPostImage(e.target.files[0]) ;
            }}

            />
            <label className="custom-file-label" htmlFor="inputGroupFile02">
              Choose file
            </label>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ marginLeft: "25px" }}
            placeholder="Location"
            value={location}
            onChange={(e)=>{setLocation(e.target.value)}}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            placeholder="Description"
            value={description}
            onChange={(e)=>{setDescritpion(e.target.value)}}
          />
        </div>
        <button onClick={uploadPost}>Post</button>
      </div>
    </>
  );
}
