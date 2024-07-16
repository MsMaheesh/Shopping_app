import React, { useState } from "react";

import './App.css'
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import Shop from "./pages/Shop";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Cartpage from "./pages/Cartpage";
import Datauser from "./pages/Datauser";
import Mansingle from "./components/single-page/Mansingle";
import Womensingle from "./components/single-page/Womensingle";
import Kidssingle from "./components/single-page/Kidssingle";



function App() {

  
  
  const [loginData,setloginData]=useState({
    name:'',
    email:'',
    pass:''
  })
  
    
  
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar name={loginData.name} />
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/men" element={<Men/>}/>
        <Route path="/men/:id" element={<Mansingle />}/>
      <Route path="/women" element={<Women/>}/>
        <Route path="/women/:id" element={<Womensingle />}/>
      <Route path="/kids" element={<Kids/>}/>
        <Route path="/kids/:id"  element={<Kidssingle />}/>
      <Route path="/cartpage" element={<Cartpage />}/>
      <Route path="/datauser" element={<Datauser data={loginData}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
