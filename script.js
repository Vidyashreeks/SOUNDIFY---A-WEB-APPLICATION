console.log("Helcome to Spotify");
// Initialize the Variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElememtById('myProgressBar');
let songs=[
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1. jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]

masterPlay.addEventListener("click", ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    
})

myProgressBar.addEventlistener('timeupdate', ()=>{
    console.log('timeupdate');
   // Update Seekbar
})
