import React, { useEffect, useState } from "react";
import "./Liked.css";
// import PhotoIcon from "@mui/icons-material/Photo";
import database from "./Firestore";
import { collection, query, where, getDoc, doc } from "firebase/firestore";

function Liked() {
  const [Favorites, setFavorites] = useState([]);
  const [Hikes, setHikes] = useState([]);
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    console.log("user id = " + userId);
    if (!userId) {
      userId = crypto.randomUUID();
      // this creates a random user id in string format
      localStorage.setItem("userId", userId);
    }

    var docRef = database.collection("Users").doc(userId);
    // may need to hard code in user id: 301c74aa-df74-46ed-912e-7e1c78de8291
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    database
      .collection("Hikes")
      .onSnapshot((snapshot) =>
        setHikes(
          snapshot.docs.map((doc) => Object.assign(doc.data(), { id: doc.id }))
        )
      );
   
  }, []);
  console.log(Hikes);
  // filter all the hikes to favorite hikes
  // iterate through hikes and look to see does this id exist in my favorites list
  // once i have favorite hikes i can render on screne
  // nest steps: swipe right create a new doc if they do have one append to existing favorites 
  // use get() on doc and modify locally the put back the new version using set 
  return (
    <div className="liked">
      {/* <PhotoIcon className="hike_image" src={url}></PhotoIcon> */}
      <div className="hike_details">
        {/* {Hikes.map((Liked) => () */}
        {Favorites}
      </div>
    </div>
  );
}

export default Liked;
