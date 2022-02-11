import React, { useEffect, useState } from "react";
import "./Liked.css";
// import PhotoIcon from "@mui/icons-material/Photo";
import database from "./Firestore";
import { collection, query, where, getDoc, doc } from "firebase/firestore";
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

  // let favoritesData = [Favorites];
  // for (let Hikes of favoritesData) {
  //   if (Favorites.id === Hikes.id) {
  //     Favorites = Hikes;
  //   }
  // }
  // const favoriteHikes = hikes.filter(...)
  // favorite.has(Hikes.id)
  // documentData.favorites

  // const likes = new Set()
  // const favoriteHikes = Hikes.filter()

  // const favoritesSet = new Set(favorites);

  // Hikes.filter((h) => favoritesSet.has(h.id));
  const favoritesSet = new Set(Favorites)

  const favoriteHikes = Hikes.filter(h => favoritesSet.has(h.id)) 
  let likedHikes = favoriteHikes.map((Hikes) => (
    <div
      key={Hikes.name}
      style={{ backgroundImage: "url(" + Hikes.url + ")" }}
      className="card"
    >
      <h3>{Hikes.name}</h3>
    </div>
  ));

  // filter all the hikes to favorite hikes
  // iterate through hikes and look to see does this id exist in my favorites list
  // once i have favorite hikes i can render on screne
  // next steps: swipe right create a new doc if they do have one append to existing favorites
  // use get() on doc and modify locally the put back the new version using set()

  return (
    <div className="liked">
      {/* <PhotoIcon className="hike_image" src={url}></PhotoIcon> */}
      <div className="hike_details">
        {/* {Hikes.map((Liked) => () */}
        {likedHikes}
      </div>
    </div>
  );
}

export default Liked;
