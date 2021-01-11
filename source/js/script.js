const header = document.querySelector(".page-header");
const headerToggle = document.querySelector(".page-header__toggle");
const businessLink = document.querySelector(".tariffs__link");
const businessModal = document.querySelector(".tariffs__modal");
const businessClose = document.querySelector(".tariffs__modal-button");
const progressBar = document.querySelector(".level__progress");
const radius = progressBar.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const trackDrop = document.querySelector(".track__dropdown");
const dropOpener = document.querySelector(".track__button--choose");
const dropCloser = document.querySelector(".dropdown__button");

//header

header.classList.remove("page-header--nojs");

headerToggle.addEventListener("click", function(evt) {
  const headerHeight = header.offsetHeight;

  if (header.classList.contains("page-header--opened")) {
    header.classList.remove("page-header--opened")
    document.body.style.paddingTop = 0;
  } else {
    header.classList.add("page-header--opened")
    document.body.style.paddingTop = "${headerHeight}px";
  }
});

//business-modal
if (businessLink) {
  businessLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    businessModal.classList.add("tariffs__modal--opened");
  });

  businessClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    businessModal.classList.remove("tariffs__modal--opened");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (businessModal.classList.contains("tariffs__modal--opened")) {
        evt.preventDefault();
        businessModal.classList.remove("tariffs__modal--opened");
      }
    }
  });
};

//progress-bar

progressBar.style.strokeDasharray = "${circumference} ${circumference}";
progressBar.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  progressBar.style.strokeDashoffset = offset;
}

setProgress(20)


//track__dropdown

if (dropOpener) {
  dropOpener.addEventListener("click", function(evt) {
    evt.preventDefault();
    trackDrop.classList.add("track__dropdown--opened");
  });

  dropCloser.addEventListener("click", function(evt) {
    evt.preventDefault();
    trackDrop.classList.remove("track__dropdown--opened");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (trackDrop.classList.contains("track__dropdown--opened")) {
        evt.preventDefault();
        trackDrop.classList.remove("tariffs__modal--opened");
      }
    }
  });
};
