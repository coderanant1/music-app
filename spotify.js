console.log("Spotify.js loaded");
let play = document.querySelector(".buttons span");
let next = document.getElementById("next");
// var audio = new Audio(
//   "songs/Do Patti_ Raanjhan (Full Video) Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara.mp3"
// );
let playm = "false";
let playmusic = () => {
  play.addEventListener("click", function () {
    if (playm == "false") {
      playm = "true";
      document.getElementById("play").style =
        "background-color:white ; background-image : url(resume.svg); width : 15px ; height: 15px; border-radius:10%; border:none;";
      audio.play();
    } else if (playm == "true") {
      playm = "false";
      document.getElementById("play").style =
        "background-color:white ; background-image : url(play.svg); width : 15px ; height: 15px; border-radius:10%; border:none;";
      audio.pause();
    }
  });
};
playmusic();
async function fetchSongs() {
  const response = await fetch("http://127.0.0.1:5500/songs/");
  const data = await response.text();
  let div = document.createElement("div");
  div.innerHTML = data;

  let as = div.getElementsByTagName("a");
  let songs=[];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href); 
    }
  }
  return songs;
}
fetchSongs();


async function main(value) {
  const songs = await fetchSongs();
  console.log(songs);
  let i = 0;
  var audio = new Audio(songs[0 ]);
  audio.play();
  
}


let nextmusic = () => {
  next.addEventListener("click", function () {
    console.log("Next music");
    if (i == songs.length - 1) {
      i = 0;
main(i)
    }
    
    let i = 0;
    
 
    document.getElementById("play").style =
        "background-color:white ; background-image : url(resume.svg); width : 15px ; height: 15px; border-radius:10%; border:none;";
  
  });
}
nextmusic();
