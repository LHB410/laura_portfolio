// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

window.onload = function () {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  })

  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));
};



// sccrolling

// $('#sec-1').addClass("active");

//Smooth scrolling
$("#sec-1").click(function () {
  $('html, body').animate({
    scrollTop: $("#one").offset().top - 90
  }, 1000);
  return false;
});

$("#sec-2").click(function () {
  $('html, body').animate({
    scrollTop: $("#two").offset().top - 120
  }, 1000);
  return false;
});

$("#sec-3").click(function () {
  $(' html,body').animate({
    scrollTop: $("#three").offset().top - 112
  }, 1000);
  return false;
});

$('#one').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-1").addClass("active");
}, { offset: 0 });


$('#two').waypoint(function () {

  $(".container ul li").children().removeClass("active");
  $("#sec-2").addClass("active");

}, { offset: 101 });


$('#three').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-3").addClass("active");
}, { offset: 101 });



