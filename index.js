"use strict";

const img = document.querySelectorAll(".img");
const fotoImage = document.querySelector(".foto-images");
const fotoTape = document.querySelector(".foto-tape");
const arrowNext = document.querySelector(".next");
const arrowPrev = document.querySelector(".prev");
const box = document.querySelectorAll(".box");
const workList = document.querySelector(".worklist");
let translateXCount = 0;
let count = 0;
// *****************переменные для видео********************

const videoTape = document.querySelector(".video-tape");
const arrowNextVideo = document.querySelector(".nextvideo");
const arrowPrevVideo = document.querySelector(".prevvideo");
const frame = document.querySelectorAll(".frame");
const videobox = document.querySelectorAll(".videobox");

// *****************/переменные для видео********************

// *****************переменные для отзывов********************

const feedbackTape = document.querySelector(".feedback-tape");
const arrowNextFeedback = document.querySelector(".nextfeedback");
const arrowPrevFeedback = document.querySelector(".prevfeedback");
const feedBackbox = document.querySelectorAll(".feedbackbox");
const imgFeedback = document.querySelectorAll(".imgfeedback");

// *****************/переменные для отзывов********************
let distance;
let fotoImagesWidth;
const numberOfImage = 3;
let imagesWidthWithoutMargin;

// получаем дистанцию перемещения фото, при нажатии на кнопки вперед/назад
function getDistance() {
  fotoImagesWidth = fotoImage.clientWidth;

  // вычитываем margin у fotoImages 2% от внутреннего пространства и получаем ширину внутреннего пространства
  imagesWidthWithoutMargin = fotoImagesWidth / 1.04;

  // ниже учитываем gap 3%
  distance =
    numberOfImage > 1
      ? (imagesWidthWithoutMargin * 0.97 ** (numberOfImage - 1)) /
          numberOfImage +
        imagesWidthWithoutMargin * 0.03
      : imagesWidthWithoutMargin + imagesWidthWithoutMargin * 0.03;
}
getDistance();

// устанавливаем минимальную ширину Box и videobox, в которых лежат img и frame, в зависимости от numberOfImage
function getMinWidthBox() {
  box.forEach((box) => {
    const minWidthBox =
      (imagesWidthWithoutMargin * 0.97 ** (numberOfImage - 1)) / numberOfImage;
    box.style.minWidth = `${minWidthBox}px`;
  });

  videobox.forEach((videobox) => {
    const minWidthBox =
      (imagesWidthWithoutMargin * 0.97 ** (numberOfImage - 1)) / numberOfImage;
    videobox.style.minWidth = `${minWidthBox}px`;
  });
  feedBackbox.forEach((feedBackbox) => {
    const minWidthBox =
      (imagesWidthWithoutMargin * 0.97 ** (numberOfImage - 1)) / numberOfImage;
    feedBackbox.style.minWidth = `${minWidthBox}px`;
  });
}
getMinWidthBox();

window.addEventListener("resize", function () {
  translateXCount = 0;
  fotoTape.style.transform = `translateX(${translateXCount}px)`;
  getDistance();
  getMinWidthBox();
});

arrowNext.addEventListener("click", function () {
  if (count > Math.abs(img.length - 1 - numberOfImage)) {
    translateXCount = 0;
    count = 0;
    fotoTape.style.transform = `translateX(${0}px)`;
  } else {
    fotoTape.style.transform = `translateX(${translateXCount - distance}px)`;
    translateXCount = translateXCount - distance;
    count++;
  }
});

arrowPrev.addEventListener("click", function () {
  if (count <= 0) {
    fotoTape.style.transform = `translateX(${0}px)`;
    count = 0;
  } else {
    fotoTape.style.transform = `translateX(${translateXCount + distance}px)`;
    translateXCount = translateXCount + distance;
    count--;
  }
});

setTimeout(() => (workList.style.transform = "translateX(0px)"), 200);

// ************галерея видео************************

let translateXCountVideo = 0;
let countVideo = 0;

window.addEventListener("resize", function () {
  translateXCountVideo = 0;
  videoTape.style.transform = `translateX(${translateXCountVideo}px)`;
  // getDistance();
  // getMinWidthBox();
});

arrowNextVideo.addEventListener("click", function () {
  if (countVideo > Math.abs(frame.length - 1 - numberOfImage)) {
    translateXCountVideo = 0;
    countVideo = 0;
    videoTape.style.transform = `translateX(${0}px)`;
  } else {
    videoTape.style.transform = `translateX(${
      translateXCountVideo - distance
    }px)`;
    translateXCountVideo -= distance;
    countVideo++;
  }
});

arrowPrevVideo.addEventListener("click", function () {
  if (countVideo <= 0) {
    videoTape.style.transform = `translateX(${0}px)`;
    countVideo = 0;
  } else {
    videoTape.style.transform = `translateX(${
      translateXCountVideo + distance
    }px)`;
    translateXCountVideo += distance;
    countVideo--;
  }
});

// ************галерея отзывов************************

let translateXCountFeedback = 0;
let countFeedback = 0;

window.addEventListener("resize", function () {
  translateXCountFeedback = 0;
  feedbackTape.style.transform = `translateX(${translateXCountFeedback}px)`;
  // getDistance();
  // getMinWidthBox();
});

arrowNextFeedback.addEventListener("click", function () {
  if (countFeedback > Math.abs(imgFeedback.length - 1 - numberOfImage)) {
    translateXCountFeedback = 0;
    countFeedback = 0;
    feedbackTape.style.transform = `translateX(${0}px)`;
  } else {
    feedbackTape.style.transform = `translateX(${
      translateXCountFeedback - distance
    }px)`;
    translateXCountFeedback -= distance;
    countFeedback++;
  }
});

arrowPrevFeedback.addEventListener("click", function () {
  if (countFeedback <= 0) {
    feedbackTape.style.transform = `translateX(${0}px)`;
    countFeedback = 0;
  } else {
    feedbackTape.style.transform = `translateX(${
      translateXCountFeedback + distance
    }px)`;
    translateXCountFeedback += distance;
    countFeedback--;
  }
});

// window.onload = () => {
//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1,
//   };
//   let observer = new IntersectionObserver(() => {
//     document.querySelector(".slidebar").style.backgroundColor = "white";
//   }, options);
//   let target = document.querySelector(".slidebar");
//   observer.observe(target);
// };

// window.addEventListener(
//   "load",
//   () => {
//     const slideBar = document.querySelector(".slidebar");
//     createObserver();

//     function createObserver() {
//       let observer;
//       let options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 1,
//       };

//       observer = new IntersectionObserver(handleIntersect, options);

//       observer.observe(slideBar);
//     }

//     function handleIntersect(entries, observer) {
//       entries.forEach((entry) => {
//         console.log(entry);
//       });
//     }
//   },
//   false
// );

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const trueCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(
        ".slidebar"
      ).style.transform = `translateY(${0}px)`;

      // document.querySelector(".slidebar").style.zIndex = "+3";
    } else {
      document.querySelector(
        ".slidebar"
      ).style.transform = `translateY(${-50}px)`;
      // document.querySelector(".slidebar").style.zIndex = "-1";
    }
  });
};

const observer = new IntersectionObserver(trueCallback, options);

const target = document.querySelector(".target");

observer.observe(target);
// запускаем "слежку" за элементом(ами) в константе target

// callback-функция (возвратная функция)

const closebutton = document.querySelector(".buttonclose");

closebutton.addEventListener("click", function () {
  document.querySelector(".form-call-back").classList.add("hidden");
});

const callback = document.querySelector(".callback");
callback.addEventListener("click", function () {
  document.querySelector(".form-call-back").classList.remove("hidden");
});
