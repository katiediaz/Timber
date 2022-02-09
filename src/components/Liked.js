import React,  { useEffect, useState } from "react";
import "./Liked.css";
import PhotoIcon from "@mui/icons-material/Photo";
import database  from "./Firestore";
// import { collection, query, where, getDocs } from "firebase/firestore"


function Liked({ name, location, url }) {
  console.log(name)


  const [Favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    database
      .collection("Favorites")
      .onSnapshot((snapshot) =>
        setFavorites(snapshot.docs.map((doc) => doc.data()))
      );
    // blank  brackets will only run oncex
  }, []);


  return (
    <div className="liked">
      {/* <PhotoIcon className="hike_image" src={url}></PhotoIcon> */}
      <div className="hike_details">
        <ul>{Favorites}</ul>
      </div>
    </div>
  );
}

export default Liked;
