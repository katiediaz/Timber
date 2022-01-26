import React from "react";
import "./Image.css";

const Image = () => {
  return (
    <div className="image">
      <p>
        <img
          src="https://www.wta.org/site_images/hikes/dscn9597.jpg-1/@@images/777894df-956f-4e76-8302-875cba4ffaa7.jpeg"
          alt="Oyster Dome"
          width="650"
          height="500"
        ></img>
        <div className="reactions">
          <button>Nope</button>
          <button>Get Hiking</button>
        </div>
      </p>
    </div>
  );
};

export default Image;
