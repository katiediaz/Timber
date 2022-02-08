import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hike from "./components/Hike";
import HikeViewer from "./components/HikeViewer";
import SwipeButtons from "./components/SwipeButtons";
import Liked from "./components/Liked";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/liked" element={<Hike/>}></Route>
          <Route path="/about" element={<h1>AboutPage</h1>}></Route>
          <Route path="/" element={<HikeViewer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
