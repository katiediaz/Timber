import React from "react";
import "./Liked.css";
import Hike from "./Hike";
import PhotoIcon from "@mui/icons-material/Photo";

function Liked({ name, location, url }) {
  return (
    <div className="liked">
      <PhotoIcon className="hike_image" src={url}></PhotoIcon>
      <div className="hike_details">
        <Hike> 
        <h2> {name} </h2>
        <p> {location} </p>
        </Hike>
        
      </div>
    </div>
  );
}

export default Liked;
