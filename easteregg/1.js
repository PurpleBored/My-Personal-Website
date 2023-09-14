document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector("video");
    var instruction = document.getElementById("instruction");

    document.addEventListener("click", function() {
      video.play();
      video.muted = false;
      instruction.style.display = "none";
    });
  });