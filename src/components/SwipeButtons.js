import React from "react";
import "./SwipeButtons.css";

import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from "@mui/material";
import {Link} from "react-router-dom";

function SwipeButtons(props) {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_left"> 
        <CloseIcon fontSize="large"/>
      </IconButton>  
      <IconButton className="swipeButtons_repeat"> 
        <ReplayIcon fontSize="large" />
      </IconButton>
     <Link to="liked" >
      <IconButton className="swipeButtons_saved">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      </Link>
      <IconButton className="swipeButtons_right">
        <ThumbUpIcon fontSize="large" />
      </IconButton>
      <div className="reactions">
      </div>
    </div>
  );
}

export default SwipeButtons;
