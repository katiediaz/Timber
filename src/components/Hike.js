import React from "react";
import "./Hike.css";

const Hike = (props) => {

  return (
    <div className="image">
      <p>
      <h2>{props.name}</h2>
        <img
          src={props.imageurl}
          alt={props.name}
        ></img>
        <div className="reactions">
          <button onClick={() => props.chooseHikeNumber()}>Nope</button> 
        </div>
      </p>
    </div>
  );
};



export default Hike;