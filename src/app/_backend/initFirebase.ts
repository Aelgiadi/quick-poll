// Import the functions you need from the SDKs you need
import {getApps, initializeApp, getApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import { once } from "./once";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.measurementId
// };

const firebaseConfig = {
    apiKey: "AIzaSyAplcEfANhgVCNrpAlpzt6AOBZJfeAbrS0",
    authDomain: "quick-poll-maker.firebaseapp.com",
    databaseURL: "https://quick-poll-maker-default-rtdb.firebaseio.com",
    projectId: "quick-poll-maker",
    storageBucket: "quick-poll-maker.firebasestorage.app",
    messagingSenderId: "907832664079",
    appId: "1:907832664079:web:3d3a3a8c642d01741d837a",
    measurementId: "G-MX2PJMBTWD"
  };


const app = initializeApp(firebaseConfig, 'quick-poll');
const database = getDatabase(app)



export { database };