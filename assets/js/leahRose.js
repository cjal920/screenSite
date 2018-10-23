$(document).ready(function()    {

//   window.onload = function() {
//     document.getElementById("leah-rach").play();
// }

// $("#leah-rach").get(0).play();


// var leahRose = document.getElementById("leah-rach")    
// var playLeahRose = function(e)  {
//     leahRose.hover();
// };

// watchLeahRose = on("click", function() {
//     window.location.href="leahRose.html";
//     });

// $("#play-leah-rose").on("click", function()  {
//     window.location.href="leahRose.html";
// });

var playLeahRose = $("#leah-rach")[0];
$("#leah-rose-play-btn").on("click", function()   {
    // watchLeahRose();
    playLeahRose.play();
});




// $("#leah-rose-play-btn").on("click", function() {
//     window.location.href="leahRose.html";
// });



    // .mouseenter(function()  {
    //     playLeahRose.play();
    // });

// var audioLeahRose = document.getElementById("leah-rach");

// function playRach() {
//     audioLeahRose.play();

// item.addEventListener("mouseover", audioLeahRose.playRach, false);
// }


$(".leah-rose-img-txt-hover").mouseover(function() {
    $("#leah-rose-img").animate({opacity: "0.5"});  
    $(".leah-rose-txt").css({opacity: "1"});
    $("#leah-rose-play-btn").css({opacity: "0.5"});

    // $("#audio-lr").play();
    // playLeahRose.play();
  });

//   $(".play-hover").mouseover(function() {
//       $("#leah-rose-play-btn").css({opacity: "1"});
//   });
  
  $(".leah-rose-img-txt-hover").mouseout(function() {
    $("#leah-rose-img").animate({opacity: "0.5"});
    $(".leah-rose-txt").css({opacity: "0"});
    $("#leah-rose-play-btn").css({opacity: "0"});
  });

  $(".play-hover").mouseover(function() {
    $("#leah-rose-img").animate({opacity: "0.5"});
    $("#leah-rose-play-btn").css({opacity: "1"});
    $(".leah-rose-txt").css({opacity: "1"});
  });

  $(".poster-img-lr").mouseout(function() {
    $("#leah-rose-img").animate({opacity: "1"});
  });









//   $(".play-hover").mouseover(function() {
//     $("#leah-rose-play-btn").css({opacity: "0"});
// });




});