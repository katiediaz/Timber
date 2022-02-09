import React,  { useEffect, useState } from "react";
import "./Liked.css";
// import PhotoIcon from "@mui/icons-material/Photo";
import database  from "./Firestore";
import { collection, query, where, getDocs } from "firebase/firestore"


function Liked({ Hikes }) {
// const favoriteRef = collection(database, "favorite");

// Create a query against the collection.
// const favoriteQuery = favoriteRef.where("Hikes", "==", true);
  // query = ref.orderByChild("Hikes").equalTo("favorite")
  // const favorited = Hikes.filter(task => Hikes.favorite === "True");

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  // const [Favorites, setFavorites] = useState([]);
 
  // useEffect(() => {
  //   database
  //     .collection("Favorites")
  //     .onSnapshot((snapshot) =>
  //       setFavorites(snapshot.docs.map((doc) => doc.data()))
        
  //     );
  //   // blank  brackets will only run oncex
  //   console.log(setFavorites)
  // }, []);


  return (
    <div className="liked">
      
      {/* <PhotoIcon className="hike_image" src={url}></PhotoIcon> */}
      <div className="hike_details">
      {/* {Hikes.map((Liked) => () */}
        {/* {favoriteQuery} */}
      </div>
    </div>
  );
}

export default Liked;
