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
  const [currentIndex, setCurrentIndex] = useState(database.length - 1);
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
    console.log(name + " left the screen in direction.." + dir);
  };

  console.log(Hikes);

  // const canGoBack = currentIndex < database.length - 1

  // const canSwipe = currentIndex >= 0
  // const swipe = async (dir) => {
  //   if (canSwipe && currentIndex < database.length) {
  //     await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
  //   }
  // }

  // // increase current index and show card
  // const goBack = async () => {
  //   if (!canGoBack) return
  //   const newIndex = currentIndex + 1
  //   updateCurrentIndex(newIndex)
  //   await childRefs[newIndex].current.restoreCard()
  // }

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
      {/* <div className='buttons'>
        <button onClick={() => swiped('left')}>Swipe left!</button>
        {/* <button onClick={() => goBack()}>Undo swipe!</button> */}
        {/* <button onClick={() => swiped('right')}>Swipe right!</button>
      </div> */} 
  <SwipeButtons />
     </div>
  );
}

export default HikeViewer;
