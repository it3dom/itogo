const play = document.querySelector(".play");
const stop2 = document.querySelector(".stop");
const volume = document.querySelector(".volume");
const rangeVideo = document.querySelector(".timeing");
const rangeAudio = document.querySelector(".audio");
const video = document.querySelector("video");

play.addEventListener("click", () => {
  video.play();
});
stop2.addEventListener("click", () => {
  video.pause();
});
// volume.addEventListener('click', ()=>{
//     video.muted();
// })
rangeVideo.addEventListener("input", () => {
  video.currentTime = (rangeVideo.value / 100) * video.duration;
});

rangeAudio.addEventListener("input", ()=>{
    video.volume = rangeAudio.value
})