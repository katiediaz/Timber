import  React, { useEffect, useState } from 'react';
import "./App.css";
import Hike from './components/Hike';



function App() {
  const [hikeList, updatedHikeList] = useState([ {"name": "Oyster Dome", "url": "https://www.wta.org/site_images/hikes/dscn9597.jpg-1/@@images/777894df-956f-4e76-8302-875cba4ffaa7.jpeg"},
  {"name": "Camp Muir", "url": "https://www.wta.org/site_images/hikes/camp-muir-main.jpg/@@images/9e10e2c6-b5e2-4db8-ba3e-0b4ccd497a25.jpeg"}
  ])

function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}
  // const [selectedBoard, setSelectedBoard] = useState({})
  const myRandomHikeNumber = getRandomInt(2)
  console.log(myRandomHikeNumber)
  console.log(hikeList[myRandomHikeNumber].name)

  
  return (
    <div className="App">
      <h1> Welcome to Timber</h1>
          <Hike name={hikeList[myRandomHikeNumber].name} imageurl={hikeList[myRandomHikeNumber].url}/>
    </div>
  );
  }

export default App;