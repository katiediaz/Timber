import React from "react";
import "./Hike.css";
import TinderCard from "react-tinder-card";

const Hike = (props) => {
  return (
    <div className="image">
      <TinderCard className="swipe" preventSwipe={["up", "down"]}>
        <h2 id="name">{props.name}</h2>
        <img id="photo" src={props.imageurl} alt={props.name}></img>
      </TinderCard>

      <div className="reactions">
        <button onClick={() => props.chooseHikeNumber()}>Nope</button>
      </div>
    </div>
  );
};

export default Hike;
