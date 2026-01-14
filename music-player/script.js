var arr = [
    { songName: "Pehle Bhi Main", img: "./images/animal.jpg", url: "./songs/Pehle Bhi Main.mp3" },
    {songName: "Jale 2", img:"./images/jale.jpg", url: "./songs/Jale 2.mp3"},
    { songName: "Ran Siya Ram", img: "./images/ram.jpg", url: "./songs/Ram Siya Ram.mp3" },
    { songName: "Arjun Vailly Ne", img: "./images/animal.jpg", url: "./songs/Arjun Vailly Ne.mp3" }   
]

var allsong = document.querySelector("#all-song")

var audio = new Audio()
var poster = document.querySelector("#left")
var selectedSong = 0;
var play = document.querySelector("#Play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")

function mainFunction(){
    var clutter = "";

    arr.forEach(function (play, indx) {
        clutter += ` <div class="song-card" id = ${indx}>
                <div class="part1">
                    <img src="${play.img}" alt="">
                    <h4>${play.songName}</h4>
                </div>
                <h6>3:45</h6>
            </div>`;
    })
    
    allsong.innerHTML = clutter;

    audio.src = arr[selectedSong].url;
    

    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}

mainFunction();

allsong.addEventListener("click", function(details){
    selectedSong = details.target.id
   
    mainFunction();
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    // audio.src = arr[details.target.id].url
    audio.play()
})

var flag = 0;

play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainFunction();
        audio.play();
        flag = 1;
    }
    else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction();
        audio.pause();
        flag = 0;
    }
})

forward.addEventListener("click", function(){
    if(selectedSong <= arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }
    else {
        backward.style.opacity = 0.4
    }
})
