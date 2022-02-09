import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { Swipe } from "@mui/icons-material";
import Hike from "./Hike";
import "./HikeViewer.css";
import SwipeButtons from "./SwipeButtons";
// import firebase from 'firebase/app';
import database  from "./Firestore";
// import { collection, query, where, getDocs } from "firebase/firestore"

function HikeViewer(props) {
// async function HikeViewer(props) {
  const [Hikes, setHikes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(database.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // ##### CURRENT WAVE ADDING FAVORITES FILE FROM FIRESTORE #####
  // const favoritesRef = collection(database, "Hikes");
  // const q = query(favoritesRef, where('Favorites', 'in', [['Favorites']]));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // }
  // );
  // ##### END CURRENT WAVE ADDING FAVORITES FILE FROM FIRESTORE #####

  useEffect(() => {
    database
      .collection("Hikes")
      .onSnapshot((snapshot) =>
        setHikes(snapshot.docs.map((doc) => doc.data()))
        // (doc) => { doc.collection(“Favorites”).onSnapshot(….) ...}
      );
      console.log()
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
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => goBack()}>Undo swipe!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div> */}
      
      <SwipeButtons />
     </div>
  );
      }

export default HikeViewer;
