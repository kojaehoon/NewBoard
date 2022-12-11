import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0xuCOZ3vcYMUi560tiGaZGkdr3LNXPVE",
  authDomain: "newtweet-51dd0.firebaseapp.com",
  databaseURL: "https://newtweet-51dd0-default-rtdb.firebaseio.com",
  projectId: "newtweet-51dd0",
  storageBucket: "newtweet-51dd0.appspot.com",
  messagingSenderId: "141196551904",
  appId: "1:141196551904:web:33da668cba90c6e8f25285",
  measurementId: "G-JS96Y3MTD2"
};

firebase.initializeApp(firebaseConfig) ;
export const firebaseInstance = firebase ; 
export const authService = firebase.auth() ; 
export const dbService = firebase.firestore() ; 
export const storageService = firebase.storage();