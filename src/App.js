import React from "react";
import './style.css'; 

import { Route,Routes } from "react-router-dom";
import AllPages from "./Components/AllPages";
import Features from "./Components/SubFolder/Features";
import Pricing from "./Components/SubFolder/Pricing";
import Events from "./Components/SubFolder/Events";
import News from "./Components/SubFolder/News";
import Contact from "./Components/SubFolder/Contact";





function App() {
  return (
    <div className="main">
      <Routes>
          <Route path ="/" element ={<AllPages />} />
          <Route path ="/Home" element ={<AllPages />} />
          <Route path="/Features" element ={<Features/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/News" element={<News/>} />
          <Route path="/Contact" element ={<Contact/>} />
        
      </Routes>
    </div>
  );
}

export default App;
