import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDXLAhTPsePzFoALuMBoqC_v59PVnJHGXM",
  authDomain: "timber-8dd55.firebaseapp.com",
  projectId: "timber-8dd55",
  storageBucket: "timber-8dd55.appspot.com",
  messagingSenderId: "584613503050",
  appId: "1:584613503050:web:f03439d849f6b7fa2906b3",
  measurementId: "G-VT76EMHN3C"
};

// const app = initializeApp(firebaseConfig);
// const database = getFirestore(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;