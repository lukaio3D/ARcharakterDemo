/* Credits */

const creditBtn = document.getElementById("creditBtn");
const credits = document.getElementById("credits");
let creditFlag = true;

creditBtn.addEventListener("click", function () {
  if (creditFlag) {
    credits.style.visibility = "visible";
    creditFlag = false;
  } else {
    credits.style.visibility = "hidden";
    creditFlag = true;
  }
});

/* Character Animation Controller */

const character = document.getElementById("CharacterEntity");
function playAnimation() {
  character.setAttribute("animation-mixer", "clip: Armature|2024_1_20_13_15_56")
}

const characterSound = document.getElementById("characterSound")
function playSound(){
  characterSound.components.sound.playSound()
}



/* Sequenzen */

const ui = document.getElementById("ui");
const uiHdr = document.getElementById("uiHeader");
const uiBtn1 = document.getElementById("uiBtn1");
const uiBtn2 = document.getElementById("uiBtn2");
const uiBtn3 = document.getElementById("uiBtn3");


uiBtn1.addEventListener("click", function () {
  setTimeout(function func () {
    playSound();
    setTimeout(playAnimation(), 5000)
  }, 1000)
  ui.style.visibility = "hidden";
  uiBtn1.style.display = "none";
});

uiBtn2.addEventListener("click", function () {
  videoPlayer.pause();
  videoPlayer.setAttribute("src", "src/Elefant.mp4");
  videoPlayer.play();
  setTimeout(function () {
    elephant.setAttribute("visible", "true");
  }, 1800);
});

uiBtn3.addEventListener("click", function () {
  videoPlayer.pause();
  videoPlayer.setAttribute("src", "src/Steine.mp4");
  videoPlayer.play();
  setTimeout(function () {
    BaumIn3D.setAttribute("visible", "true");
  }, 2000);
});

