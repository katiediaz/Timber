import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hike from "./components/Hike";
import HikeViewer from "./components/HikeViewer";
import SwipeButtons from "./components/SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/about" element={<h1>AboutPage</h1>}>
          </Route>
          <Route
            path="/" element={
             <HikeViewer/>
            }
          ></Route>
          <Route>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
