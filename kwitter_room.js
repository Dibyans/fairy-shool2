//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAuMNyzswJ8vWQ45iW_Lq_Gb-HA2GHDjyE",
    authDomain: "kwitter-f9a00.firebaseapp.com",
    databaseURL: "https://kwitter-f9a00-default-rtdb.firebaseio.com",
    projectId: "kwitter-f9a00",
    storageBucket: "kwitter-f9a00.appspot.com",
    messagingSenderId: "93245323703",
    appId: "1:93245323703:web:f56a8f2e7a4457841f5032"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();