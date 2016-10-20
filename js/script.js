"use strict";

var slideId = 1;
var nextSlideId = 2;

$(document).ready(function(){
  $("#slider > img#image_1").fadeIn(300);
  startSlider();
});

function startSlider() {
  var counter = $("#slider > img").length;

  setInterval(function() {

    if (nextSlideId > counter) {
      nextSlideId = 1;
      slideId = 1;
    }

    $("#slider > img").fadeOut(300);
    $("#slider > img#image_" + nextSlideId).fadeIn(300);
    slideId = nextSlideId;
    nextSlideId++;
  }, 3000);
};
