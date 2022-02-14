import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { Swipe } from "@mui/icons-material";
import Hike from "./Hike";
import "./HikeViewer.css";
import SwipeButtons from "./SwipeButtons";
import database from "./Firestore";

function HikeViewer(props) {
  let userId = localStorage.getItem("userId");
  console.log("user id = " + userId);
  if (!userId) {
    userId = crypto.randomUUID();
    // this creates a random user id in string format 
    localStorage.setItem("userId", userId);
  }

  const [Hikes, setHikes] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(database.length - 1);
  const [lastDirection, setLastDirection] = useState();


  useEffect(() => {
    database.collection("Hikes").onSnapshot(
      (snapshot) => setHikes(snapshot.docs.map((doc) => Object.assign(doc.data(), {id: doc.id}))))     
    // blank  brackets will only run once
  }, []);

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    // updateCurrentIndex(index - 1)
  };

  const outOfFrame = (name, dir) => {
    if (dir === "right") console.log("accepted");
    if (dir === "left") console.log("declined");
    // add stored favorite
    console.log(name + " left the screen on the " + dir);
  };


  return (
    <div className="cardContainer">
      {Hikes.map((Hikes) => (
        <TinderCard
          className="swipe"
          key={Hikes.name}
          onSwipe={(dir) => swiped(dir, Hikes.name)}
          preventSwipe={["up", "down"]}
          onCardLeftScreen={(dir) => outOfFrame(Hikes.name, dir)}
        >
          <div
            style={{ backgroundImage: "url(" + Hikes.url + ")" }}
            className="card"
          >
            <h3>{Hikes.name}</h3>
          </div>
        </TinderCard>
      ))}
       
  <SwipeButtons 
  onClick={(dir) => swiped(dir, Hikes.name)}
  />
     </div>
  );
}

export default HikeViewer;
