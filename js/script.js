"use strict";

var slideId = 1;
var nextSlideId = 2;
var counter = $("#slider > img").length;
var loop;

$(document).ready(function(){
  $("#slider > img#image_1").fadeIn(300);
  startSlider();

  /* Stop slider when the mouse pointer hovers over it */
  $("#slider > img").hover(function() {
    stopSlider();
  }, function() {
    startSlider();
  });
});

function changeSlides() {
  if (nextSlideId > counter) {
    nextSlideId = 1;
    slideId = 1;
  }
  $("#slider > img").fadeOut(300);
  $("#slider > img#image_" + nextSlideId).fadeIn(300);
  slideId = nextSlideId;
  nextSlideId++;
}

function startSlider() {
  loop = setInterval(changeSlides, 3000);
}

function stopSlider() {
  window.clearInterval(loop);
}

function showPreviousSlide() {
  var newId = slideId - 1;
  showNewSlide(newId);
}

function showNextSlide() {
  var newId = slideId + 1;
  showNewSlide(newId);
}

function showNewSlide(id) {
  stopSlider();
  if (id > counter) {
    id = 1;
  } else if (id < 1) {
    id = counter;
  }

  $("#slider > img").fadeOut(300);
  $("#slider > img#image_" + id).fadeIn(300);
  slideId = id;
  nextSlideId = id + 1;
  startSlider();
}
