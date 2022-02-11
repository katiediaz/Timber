import React from "react";
import "./About.css";

function About() {
  return ( 
    <div className="aboutContainer">
      <div> 
      <h3 className="title"> Thank You for Visiting Timber!</h3>
<p className="text"> Users who live in the PacificNorthWest are always 
just a moment away from a beautiful landscape view, 
nature walk, hike or beach. Users like to hike but 
maybe they are not the best at remembering names of places. 
If only there was an app that would allow users to 
choose a hike based solely on looks. With Timber that 
dream became a reality. Users can swipe 
through photos  of hikes and "swipe right" on hikes 
that they find attractive.  The user can then decide to 
meet the hike or keep swiping. Once users have matched with 
a hike they will be able to see more information 
about that hike by visiting <a href="https://www.wta.org/">WA Trails Association</a></p>
<img className="image" src="https://www.wta.org/site_images/trip-reports/2022/tripreport-image-2022-01-31-8304058756/@@images/261a0a0f-c96a-4433-b6a4-1203c8f82c86.jpeg" alt="landscape" ></img>
 </div>
 </div>
  );
}

export default About;