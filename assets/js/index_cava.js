$(document).ready(function()    {





// $("#main-titles").animate(5000);
 
var start = function()  {

  var openCredits = document.getElementById("cava-rust");
  var playButton = document.getElementById("play-btn");
  var pauseButton = document.getElementById("pause-btn");
  var ppButton = document.getElementById("pp-btn");

  var mainTitles = ["Paramount Pictures Presents", "A Colin Larkin Picture", "Leah Rose"];


  var soundPlay = function(e) {
      openCredits.play();
      picturePlay();
//        pictureFade();
      console.log("it's playing!")
  }
 
  var soundPause = function(e) {
      openCredits.pause();
      console.log("it paused!")
  }

  var soundPP = function(e)   {
      if (openCredits.paused)  {
          openCredits.play();
          ppButton.textContent = "PAUSE"
      }
      else {
          openCredits.pause();
          ppButton.textContent = "PLAY"
  }
}
  var picturePlay = function(e)   {
     for (let i = 0; i < mainTitles.length; i++) {            // let?   // forEach()?
      $("#main-titles").html("<h1>" + mainTitles[i] + "</h1>");
      paramountPlay();
//        colinlarkinPlay();
//         $("#main-titles").fadeIn(2000);
//        $("#main-titles").fadeIn(5000);
      console.log("it's playing!")
    }
  }


  var paramountPlay = function(e) {
      $("#main-titles").html("<h1>" + mainTitles[0] + "</h1>");
      $("#main-titles").fadeIn(2000);
      $("#main-titles").fadeOut(2000);

      console.log("it's paramount")
      return;                                         // return to stop function?
  }

//       var paramountStop = function(e) {
//
//        }



  var colinlarkinPlay = function(e) {
      $("#main-titles").html("<h1>" + mainTitles[1] + "</h1>");
      $("#main-titles").fadeIn(2000);
      $("#main-titles").fadeOut(2000);
      console.log("it's colin larkin!")
  }

  stop();



//     var pictureFade = function(e)  {
//         $("#main-titles").fadeIn(5000);
//   }


//    var pictureFade = function(e)   {
//           mainTitles.fadeIn("slow", function() {
//          console.log("it's fading in!")
//         mainTitles.animate({opacity: "1"}, 3000);
// $("#main-titles").fadeIn(5000);
// };


$("#play-btn").on("click", function() {
 soundPlay(openCredits);
});

$("#pause-btn").on("click", function() {
 soundPause(openCredits);
});

$("#pp-btn").on("click", function() {
 soundPP(openCredits);
});

//  $("#title-credits").fadeIn("slow", function())    {

// }

//  picturePlay();


//  $("#play-btn").click(function(){
//   $("#main-titles").fadeIn();
//    $("#div2").fadeIn("slow");
//    $("#div3").fadeIn(3000);
//   });


};

//  playButton.addEventListener("click", soundPlay, false);
// pauseButton.addEventListener("click", soundPause, false);
// ppButton.addEventListener("click", soundPP, false);



window.onload = start;









/* MAIN PAGE */  

// from bottom index, brings us to Leah Rose trailer and plays trailer theme //
const movieLeahRose = $("#leah-eliz")[0];
$("#lr-play-symbol__index").on("click", function()   {
  movieLeahRose.play();
});


/* LEAH ROSE PAGE */

// array that holds Leah Rose synopsis
const synopsisLeahRose = [`NEW YORK CITY.`, `SUMMER 1929.`, `She has it all. Youth. Beauty. A great man. A beautiful home. 
Enough money for a lifetime.`, `And during the last summer of the 1920s, popular socialite Leah Rose indulges
in all the delights the good life has to offer with her fella and their circle of fabulous friends.
`, `But what Leah and no one else around her knows is that these glorious golden days
are numbered. Down on Wall Street, just a few miles south of her
exclusive Upper East Side address, a storm is brewing.
A storm born of years of reckless stock speculation that will strike at the very heart of the global
economy. And when it does in the final days of October, it leaves Leah's world 
of privilege and security utterly destroyed.
`, `In the desperate months that follow, while her husband Alfred leaves town to try his hand at 
bootlegging in a bid to restore some measure of that cherished world,
Leah grudgingly agrees to stay with a trusted but strapped actor friend from 
Alfred's youth in a squalid house he shares with other starving artists, intellectuals 
and people on the fringes of society.`, `Living among these Greenwich Village bohemians for whom 
she has little affection, Leah will face hard realities
her pampered existence has left her ill-equipped to meet - an unplanned pregnancy; a landlord who 
wants her out unless she can pay rent; having to find a job with no experience; and with each 
passing day he's gone, the growing fear that Alfred isn't coming back. All against the spectre of 
dangerous new political ideologies on the rise.`, `   
Yet even with all she's lost, Leah will come to gain something far more valuable.
Through her difficult journey and the people she meets along the way, Leah 
will discover who she really is. Learning a trade and sobering up, she reconnects with her roots and 
awakens to the plight of the powerless, and emerges with a sense 
of purpose far greater than anything she's ever known, and the strength and wisdom to 
face whatever the dark days ahead may bring.`];

//fades in after 1 second//
//fades out after 5 seconds//
  $("#lr-syn1__index").html(synopsisLeahRose[0]).delay(1000).fadeIn(500).delay(4000).fadeOut(500);
  $("#lr-syn2__index").html(synopsisLeahRose[1]).delay(2500).fadeIn(1000).delay(2000).fadeOut(500); 
  $("#outdoor-party").delay(8000).fadeIn(500).delay(5000).fadeOut(17500);
  $("#lr-syn3__index").html(synopsisLeahRose[2]).delay(10000).fadeIn(500).delay(20000).fadeOut(500);
  $("#lr-syn4__index").html(synopsisLeahRose[3]).delay(13000).fadeIn(500).delay(17000).fadeOut(500);
  $("#lr-syn5__index").html(synopsisLeahRose[4]).delay(16000).fadeIn(500).delay(14000).fadeOut(500);
  $("#lr-syn6__index").html(synopsisLeahRose[5]).delay(19000).fadeIn(500).delay(11000).fadeOut(500);
  $("#lr-syn7__index").html(synopsisLeahRose[6]).delay(22000).fadeIn(500).delay(8000).fadeOut(500);
  $("#lr-syn8__index").html(synopsisLeahRose[7]).delay(25000).fadeIn(500).delay(5000).fadeOut(500);


// array that holds Leah Rose tag and title
const tagTitle = [`When the world around her lost its way, she made her own.`,
                `Leah Rose`];

//fades in after 37 seconds//
//fades out after 43 seconds//
  $("#lr-tagline-two").html(tagTitle[0]).delay(33000).fadeIn(500).delay(7000).fadeOut(500);
  $(".lr-title-two").html(tagTitle[1]).delay(37000).fadeIn(500).delay(3000).fadeOut(500);





  // 
  // 
  // 

});



 