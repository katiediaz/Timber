import React, { useEffect, useState } from "react";
import "./Liked.css";
// import PhotoIcon from "@mui/icons-material/Photo";
import database from "./Firestore";
import Favorite from "@mui/icons-material/Favorite";

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

    let docRef = database
      .collection("Users")
      .doc("301c74aa-df74-46ed-912e-7e1c78de8291");
    // may need to hard code in userId: 301c74aa-df74-46ed-912e-7e1c78de8291
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setFavorites(doc.data().favorites); // Not sure what the field is actually named in the user's document but it was something like this
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
  console.log(Favorites);

  const favoritesSet = new Set(Favorites)

  const favoriteHikes = Hikes.filter(h => favoritesSet.has(h.id)) 
  let likedHikes = favoriteHikes.map((Hikes) => (
    <div className="Fav_container"
      // key={Hikes.name}
      style={{ backgroundImage: "url(" + Hikes.url + ")" }}
      className="Fav_card"
    >
      <div className="Fav_title"> 
        <h2>{Hikes.name}</h2>
      <p>Hike coordinates go here</p>
      </div>
    </div>
  ));


  return (
    <div className="liked">
      <div className="hike_details">
        {likedHikes}
        {Hikes.url}
      </div>
    </div>
  );
}

export default Liked;
