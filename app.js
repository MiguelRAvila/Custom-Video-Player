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
  return true;
}
function stopVideo() {
  return true;
}

// Update Progress and TimeStamp
function updateProgress() {
  return true;
}
function setVideoProgress() {
  return true;
}

// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updateIcon);
video.addEventListener("play", updateIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progre.addEventListener("change", setVideoProgress);
