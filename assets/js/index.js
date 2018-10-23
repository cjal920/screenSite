$(document).ready(function()    {

//plays the Leah Rose theme//
var playLeahRose = $("#leah-rach")[0];
$("#leah-rose-play-btn").on("click", function()   {
    // watchLeahRose();
    playLeahRose.play();
});

// brings us to Leah Rose page and also plays her theme //
$("#play-leah-rose").on("click", function() {
  playLeahRose.play();
});

// fades in Leah Rose logline and play button when we hover over image
$(".leah-rose-img-txt-hover").mouseover(function() {
    $("#leah-rose-img").animate({opacity: "0.5"});  
    $(".leah-rose-txt").css({opacity: "1"});
    $("#leah-rose-play-btn").css({opacity: "0.5"});
  });

// when we leave image, all returns to normal
  $(".leah-rose-img-txt-hover").mouseout(function() {
    $("#leah-rose-img").animate({opacity: "0.5"});
    $(".leah-rose-txt").css({opacity: "0"});
    $("#leah-rose-play-btn").css({opacity: "0"});
  });

  $(".poster-img-lr").mouseout(function() {
    $("#leah-rose-img").animate({opacity: "1"});
  });

// when we hover over play button, it brightens to full white
  $(".play-hover").mouseover(function() {
    $("#leah-rose-img").animate({opacity: "0.5"});
    $("#leah-rose-play-btn").css({opacity: "1"});
    $(".leah-rose-txt").css({opacity: "1"});
  });
});