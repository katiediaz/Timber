import React, { useRef, useMemo, useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { Swipe } from "@mui/icons-material";
import Hike from "./Hike";
import "./HikeViewer.css";
import SwipeButtons from "./SwipeButtons";
import database, { doc, setDoc } from "./Firestore";

function HikeViewer(props) {
  let userId = localStorage.getItem("userId");
  // console.log("user id = " + userId);
  if (!userId) {
    userId = crypto.randomUUID();
    // this creates a random user id in string format
    localStorage.setItem("userId", userId);
  }

  const [Hikes, setHikes] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(database.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const [currentIndex, setCurrentIndex] = useState(-1);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(100)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  useEffect(() => {
    database.collection("Hikes").onSnapshot((snapshot) => {
      setHikes(
        snapshot.docs.map((doc) => Object.assign(doc.data(), { id: doc.id }))
      );
      setCurrentIndex(snapshot.docs.length - 1);
    });
    // blank  brackets will only run once
  }, []);
  const addToFavs = (hikeId) => {
    let myFavs = [];
    // get user doc
    let docRef = database.collection("Users").doc(userId);
    // second user: NBdDrVNBZjw2BANaDl8p
    // may need to hard code in userId: 301c74aa-df74-46ed-912e-7e1c78de8291
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          myFavs = doc.data().favorites;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        myFavs.push(hikeId);
        database
          .collection("Users")
          .doc(userId)
          .set({
            favorites: myFavs,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    //   myFavs.push(hikeId)
    //   database.collection("Users").doc(userId).set({
    //     favorites : myFavs
    // })
    // .then(() => {
    //     console.log("Document successfully written!");
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ", error);
    // });
  };
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (hikeId, dir) => {
    if (dir === "right") addToFavs(hikeId);
    if (dir === "left") console.log("declined");
    // add stored favorite
    // console.log(name + " left the screen on the " + dir);
  };

  const swipe = async (dir) => {
    console.log(currentIndex);
    await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
  };

  return (
    <div className="cardContainer">
      {Hikes.map((Hikes, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={Hikes.name}
          onSwipe={(dir) => swiped(dir, Hikes.name, index)}
          preventSwipe={["up", "down"]}
          onCardLeftScreen={(dir) => outOfFrame(Hikes.id, dir)}
        >
          <div
            style={{ backgroundImage: "url(" + Hikes.url + ")" }}
            className="card"
          >
            <h3>{Hikes.name}</h3>
          </div>
        </TinderCard>
      ))}

      <SwipeButtons
        onClick={(dir) => swipe(dir)}
        // onClick={(dir) => swiped(Hikes && Hikes.length > 0 && Hikes[0].name, dir)}
      />
    </div>
  );
}

export default HikeViewer;
