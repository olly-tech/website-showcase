function topNavFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// BLOBS
const svg = document.getElementById("organicSVG");
const audio = document.getElementById("ambientAudio");
audio.volume = 0.75;
const muteButton = document.getElementById("toggleMute")



function pauseAll() {
    svg.pauseAnimations();
    audio.pause();
  }

function playAll() {
    svg.unpauseAnimations();
    audio.play();
  }

function toggleMute(){
  // If its currently muted, unmute it
  if (audio.muted === true){
      audio.muted = false;
      muteButton.textContent = "Mute";
    } 

   // If it's not muted, mute it
  else {
    audio.muted = true;
    muteButton.textContent = "Unmute"
  }
}