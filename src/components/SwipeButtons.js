import React from "react";
import "./SwipeButtons.css";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from "@mui/material";
import {Link} from "react-router-dom";

function SwipeButtons(props) {

  return (
    
    <div className="swipeButtons" >
      <IconButton className="swipeButtons_left" onClick={() => props.onClick("left")}> 
        <CloseIcon fontSize="large"/> 
      </IconButton>  

      <IconButton className="swipeButtons_right" onClick={() => props.onClick("right")}>
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
