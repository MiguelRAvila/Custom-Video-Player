const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progre = document.getElementById("progre");
const time = document.getElementById("time");

// Event Listeners
video.addEventListener("click", toggleVideoStatus());
video.addEventListener("pause", updateIcon);
video.addEventListener("play", updateIcon());
video.addEventListener("timeupdate", updateProgress());

play.addEventListener("click", toggleVideoStatus());
stop.addEventListener("click", stopVideo());
progre.addEventListener("change", setVideoProgress());
