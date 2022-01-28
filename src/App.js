import React, { useEffect, useState } from "react";
import "./App.css";
import Hike from "./components/Hike";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const hikeList = []
  //updateHikeList([hikeList ... "oyster dome", ...])
  const [hikeList, updateHikeList] = useState([
    {
      name: "Oyster Dome",
      url: "https://www.wta.org/site_images/hikes/dscn9597.jpg-1/@@images/777894df-956f-4e76-8302-875cba4ffaa7.jpeg",
    },
    {
      name: "Camp Muir",
      url: "https://www.wta.org/site_images/hikes/camp-muir-main.jpg/@@images/9e10e2c6-b5e2-4db8-ba3e-0b4ccd497a25.jpeg",
    },
    {
      name: "Panther Creek Falls",
      url: "https://www.wta.org/site_images/hikes/panther-creek-falls_austineats.jpeg/@@images/2d895071-bae3-46ed-ad6f-76bca0de5055.jpeg",
    },
  ]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const [myRandomHikeNumber, updateRandomHikeNumber] = useState(0);
  function chooseHikeNumber() {
    const newNumber = getRandomInt(hikeList.length);
    updateRandomHikeNumber(newNumber);
  }
  console.log(myRandomHikeNumber);
  console.log(hikeList[myRandomHikeNumber].name);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/about" element={<h1>AboutPage</h1>}>
          </Route>
          <Route
            path="/"
            element={
              <Hike
                chooseHikeNumber={chooseHikeNumber}
                name={hikeList[myRandomHikeNumber].name}
                imageurl={hikeList[myRandomHikeNumber].url}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
