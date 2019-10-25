var db = firebase.firestore();
const roomName = document.getElementById("room_name");

function onClick() {
    var docData = {
        dateCreated: firebase.firestore.Timestamp.fromDate(new Date())
    };

    db.collection("game_room").doc(roomName.value).set(docData).then(function () {
        window.location.href = "room.html" + "?roomName=" + roomName.value;
    }).catch(function (error) {
        console.error("Error writing document: ", error);
    });

}




