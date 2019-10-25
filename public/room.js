var db = firebase.firestore();
const player_list = document.querySelector('#players_list');

const urlParams = new URLSearchParams(window.location.search);
const roomName = urlParams.get('roomName');
console.log("Room name: " + roomName);

var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true
});

// create element and render player 
function renderPlayers(doc) {
    let li = document.createElement('li');

    let name = document.createElement('span');
    let score = document.createElement('span');

    li.setAttribute('data-id', doc.id);

    name.textContent = doc.id;
    score.textContent = doc.data().score;



    li.appendChild(name);
    li.appendChild(score);

    player_list.appendChild(li);
}

db.collection("game_room").doc(roomName).collection("players").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPlayers(doc);
    })
})


wavesurfer.load('https://firebasestorage.googleapis.com/v0/b/sparktify-a6108.appspot.com/o/audio%2Fabc.mp3?alt=media&token=26a5f8c0-b97f-43c1-881a-e8db15bdbb06.mp3');
wavesurfer.on('ready', function() {
    wavesurfer.stop();
});

//add event listener
startButton.addEventListener('click', function(event) {
    wavesurfer.play();
});

//add event listener
stopButton.addEventListener('click', function(event) {
    wavesurfer.stop();
});

function stopBGMusic() {
    wavesurfer.stop();
}