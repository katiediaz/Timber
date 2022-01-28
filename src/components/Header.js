import React from 'react';
import './Header.css';
import LandscapeIcon from '@mui/icons-material/Landscape';

function Header(){
  return(
    <div className="header">
    <LandscapeIcon className="header__icon" fontSize='large'/>  
    <h1>Timber!</h1>
    <h5 className="about">About</h5>
    </div>
  )
}

export default Header