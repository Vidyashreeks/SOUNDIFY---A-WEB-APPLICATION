console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex=0;
/*let audioElement=new Audio('1.mp3');*/
/*let audioElement=new Audio('https://www.downloadmobileringtones.com/mp3ringtone/Let-Me-Love-You-Ariana-Grande-Song-Ringtone-dmr.mp3');*/
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName: "Salam-e-Ishq", filePath: "https://www.downloadmobileringtones.com/mp3ringtone/Let-Me-Love-You-Ariana-Grande-Song-Ringtone-dmr.mp3",coverPath:"image.png"},
    /*{songName: "Salan-e-Ishq", filePath: ""},
    /*{songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1. jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salan-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},*/
]
/*let son=[];
son.push("\FULLSTACK\PRO1\songs\1.mp3");*/

let audioElement=new Audio('https://www.downloadmobileringtones.com/mp3ringtone/Let-Me-Love-You-Ariana-Grande-Song-Ringtone-dmr.mp3');
masterPlay.addEventListener("click", ()=> {
    /*let audioElement=new Audio('https://www.downloadmobileringtones.com/mp3ringtone/Let-Me-Love-You-Ariana-Grande-Song-Ringtone-dmr.mp3');*/
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    }
    
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       }
       
    
})
audioElement=new Audio('https://www.downloadmobileringtones.com/mp3ringtone/Let-Me-Love-You-Ariana-Grande-Song-Ringtone-dmr.mp3');
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
    if(progress===100){
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // Update Seekbar
    }

    
   
})
