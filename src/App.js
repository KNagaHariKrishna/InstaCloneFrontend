import React from 'react';
import Landing_page from '../src/LandingPage/landing_page'
import Postview from './postview';
import "./Post.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './form';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page/>}/>
        <Route path="/Postview" element={<Postview/>}/>
        <Route path="/Form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
