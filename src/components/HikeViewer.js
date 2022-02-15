import React, { useRef, useMemo, useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { Swipe } from "@mui/icons-material";
import Hike from "./Hike";
import "./HikeViewer.css";
import SwipeButtons from "./SwipeButtons";
import database from "./Firestore";

function HikeViewer(props) {
  let userId = localStorage.getItem("userId");
  // console.log("user id = " + userId);
  if (!userId) {
    userId = crypto.randomUUID();
    // this creates a random user id in string format
    localStorage.setItem("userId", userId);
  }

  const [Hikes, setHikes] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(database.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const [currentIndex, setCurrentIndex] = useState(6);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(7)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  useEffect(() => {
    database
      .collection("Hikes")
      .onSnapshot((snapshot) =>
        setHikes(
          snapshot.docs.map((doc) => Object.assign(doc.data(), { id: doc.id }))
        )
      );
    // blank  brackets will only run once
  }, []);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }
 
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1)
  };

  const outOfFrame = (name, dir) => {
    if (dir === "right") console.log("accepted");
    if (dir === "left") console.log("declined");
    // add stored favorite
    console.log(name + " left the screen on the " + dir);
  };

  const swipe = async (dir) => {
    console.log(currentIndex)
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
  
  };

  return (
    <div className="cardContainer">
      {Hikes.map((Hikes, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={Hikes.name}
          onSwipe={(dir) => swiped(dir, Hikes.name, index)}
          preventSwipe={["up", "down"]}
          onCardLeftScreen={(dir) => outOfFrame(Hikes.name, index)}
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
        onClick={(dir) =>
          swipe(dir)
        }
        // onClick={(dir) => swiped(Hikes && Hikes.length > 0 && Hikes[0].name, dir)}
      />
    </div>
  );
}

export default HikeViewer;
