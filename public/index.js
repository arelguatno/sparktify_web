// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuHMQ1zj6JvP_OpHibHdRcjr5vEQpOz2s",
    authDomain: "sparktify-a6108.firebaseapp.com",
    databaseURL: "https://sparktify-a6108.firebaseio.com",
    projectId: "sparktify-a6108",
    storageBucket: "sparktify-a6108.appspot.com",
    messagingSenderId: "826003442822",
    appId: "1:826003442822:web:d0754f767ef83ec98ad507",
    measurementId: "G-M19LQM21DT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

var roomName = document.getElementById("room_name");
function onClick() {
    var docData = {
        dateCreated: firebase.firestore.Timestamp.fromDate(new Date())
    };

    db.collection("game_room").doc(roomName.value).set(docData).then(function () {
        window.location.href = "room.html";

    }).catch(function (error) {
        console.error("Error writing document: ", error);
    });

}

