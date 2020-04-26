const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progre = document.getElementById("progress");
const time = document.getElementById("timestapm");

// Play and Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Update Progress and TimeStamp
function updateProgress() {
  progre.value = (video.currentTime / video.duration) * 100;
}
function setVideoProgress() {
  video.currentTime = (+progre.value * video.duration) / 100;
}

// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updateIcon);
video.addEventListener("play", updateIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progre.addEventListener("change", setVideoProgress);
