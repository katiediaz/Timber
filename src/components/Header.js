import React from "react";
import "./Header.css";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <LandscapeIcon className="header__icon" fontSize="large" />
      </Link>
      <h1>Timber!</h1>
      <Link to="/about">
        <h5 className="about">About</h5>
      </Link>
    </div>
  );
}

export default Header;
