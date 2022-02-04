import React from "react";
import "./Hike.css";
import Liked from "./Liked"


function Hike() {
  return (
    <div className="savedhike">
      <Liked
        name="Oyster Dome"
        location="map"
        url="https://www.wta.org/site_images/hikes/dscn9597.jpg-1/@@images/777894df-956f-4e76-8302-875cba4ffaa7.jpeg"
      ></Liked>
    </div>
  );
}

export default Hike;
