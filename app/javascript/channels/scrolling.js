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
    scrollTop: $("#two").offset().top - 112
  }, 1000);
  return false;
});

$("#sec-3").click(function () {
  $(' html,body').animate({
    scrollTop: $("#three").offset().top - 160
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


