"use strict";
let n = null;
let prev_n = null;
let currentAudio = null;
let omikujiSound_sound1 = new Audio("./sound/omikuji_sound1.mp3");
let omikujiSound_sound2 = new Audio("./sound/omikuji_sound2.mp3");
let omikujiSound_sound3 = new Audio("./sound/omikuji_sound3.mp3");
let omikujiSound_sound4 = new Audio("./sound/omikuji_sound4.mp3");
let omikujiSound_sound5 = new Audio("./sound/omikuji_sound5.mp3");
let omikujiSound_sound6 = new Audio("./sound/omikuji_sound6.mp3");
let resultSound = [
  omikujiSound_sound1,
  omikujiSound_sound2,
  omikujiSound_sound3,
  omikujiSound_sound4,
  omikujiSound_sound5,
  omikujiSound_sound6,
];
window.addEventListener(
  "DOMContentLoaded",
  function () {
    $("header").textillate({
      loop: false,
      minDisplayTime: 9000,
      initialDelay: 1000,
      autoStart: true,
      in: {
        effect: "fadeInLeftBig",
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: true,
      },
    });
    $(function () {
      ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    this.setTimeout(function () {
      let popMessage = "いらっしゃい！　おみくじ引いてって！";
      this.window.alert(popMessage);
    }, "3000");
  },
  false
);

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener(
  "click",
  function () {
    let resultTextImage = [
      "./01_omikuji01-12/img/omikuji_daikichi.png",
      "./01_omikuji01-12/img/omikuji_kichi.png",
      "./01_omikuji01-12/img/omikuji_chuukichi.png",
      "./01_omikuji01-12/img/omikuji_syoukichi.png",
      "./01_omikuji01-12/img/omikuji_suekichi.png",
      "./01_omikuji01-12/img/omikuji_kyou.png",
    ];

    let resultMaxSpeed = [20, 15, 10, 5, 5, 5];
    let resultMaxSize = [50, 30, 40, 40, 20, 30];
    let resultMinSize = [35, 15, 30, 20, 10, 15];
    let resultImage = [
      "img/star.png",
      "img/sakura_hanabira.png",
      "img/redLeaves4.png",
      "img/flower.png",
      "img/leaf.png",
      "img/snowflakes.png",
    ];
    while (n === prev_n) {
      n = Math.floor(Math.random() * resultTextImage.length);
    }
    prev_n = n;

    omikujiTextImage.src = resultTextImage[n];
    omikujiTextImage.classList.add("omikujiPaper");
    omikujiTextImage.addEventListener(
      "animationend",
      function () {
        omikujiTextImage.classList.remove("omikujiPaper");
      },
      false
    );
    soundControl(resultSound[n]);
    $(document).snowfall("clear");

    $(document).ready(function () {
      $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,
        maxSize: resultMaxSize[n],
        minSize: resultMinSize[n],
        image: resultImage[n],
      });
    });
  },
  false
);

function soundControl(w_sound) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  w_sound.play();
  currentAudio = w_sound;
}
