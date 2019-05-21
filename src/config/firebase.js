const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAszy0dne-OmxyG1AEwv-4ubyRg_-x3wlY",
    authDomain: "apiteste-4a119.firebaseapp.com",
    databaseURL: "https://apiteste-4a119.firebaseio.com",
    projectId: "apiteste-4a119",
    storageBucket: "apiteste-4a119.appspot.com",
    messagingSenderId: "116782513729",
    appId: "1:116782513729:web:e1d5112db2d3a845"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

module.exports = {fire};