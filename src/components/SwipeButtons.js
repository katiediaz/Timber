import React, { useState, useMemo, useRef } from "react";
import "./SwipeButtons.css";
import TinderCard from 'react-tinder-card'
import database from "./Firestore";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from "@mui/material";
import {Link} from "react-router-dom";

function SwipeButtons({dir}) {
  // const [lastDirection, setLastDirection] = useState();

  const swiped = (dir) => {
  };

  console.log(swiped)


  
  return (
    
    <div className="swipeButtons" >
      <IconButton className="swipeButtons_left" onClick={(dir) => swiped(dir)}> 
        <CloseIcon fontSize="large"/> 
      </IconButton>  

      <IconButton className="swipeButtons_right" onClick={(dir) => swiped(dir)}>
        <ThumbUpIcon fontSize="large" />
      </IconButton>


      <section className="saved">
      <Link to="liked" >
      <IconButton className="swipeButtons_saved">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      </Link>
      </section>
      
    </div>
  );
}

export default SwipeButtons;
