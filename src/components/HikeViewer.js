import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { Swipe } from "@mui/icons-material";
import Hike from "./Hike";
import "./HikeViewer.css";
import SwipeButtons from "./SwipeButtons";
import database from "./Firestore";

function HikeViewer(props) {
  const [Hikes, setHikes] = useState([]);

  useEffect(() => {
    // code runs here
    database
      .collection('Hikes')
      .onSnapshot(snapshot =>
        setHikes(snapshot.docs.map((doc) => doc.data()))
      );
    // blank  brackets will only run once
  }, []);

  const outOfFrame = (name, dir) => {
    if (dir === "right")
    console.log("accepted")
    if (dir === "left")
    console.log("declined")
    console.log(name + " left the screen in direction.." + dir);
  };

  return (
    <div className="cardContainer">
      {Hikes.map((Hikes) => (
        <TinderCard
          className="swipe"
          key={Hikes.name}
          // onSwipe={(dir) => swiped(dir, Hikes.name)}
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
      <SwipeButtons />
    </div>
  );
}

export default HikeViewer;
