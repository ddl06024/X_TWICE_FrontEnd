import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNvq-FEWr3UUCVizsC_GRJHhCpIu1HHIw",
  authDomain: "x-twice-2021.firebaseapp.com",
  projectId: "x-twice-2021",
  storageBucket: "x-twice-2021.appspot.com",
  messagingSenderId: "647299354886",
  appId: "1:647299354886:web:67017eedc5f55163f2ce87",
  measurementId: "G-SGJ0LDXLGL",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
