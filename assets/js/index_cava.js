$(document).ready(function()    {


// $("#main-titles").animate(5000);
 
const start = function()  {

  const openCredits = document.getElementById("cava-rust");
  const playButton = document.getElementById("play-btn");
  const pauseButton = document.getElementById("pause-btn");
  const ppButton = document.getElementById("pp-btn");

  const mainTitles = ["Paramount Pictures Presents", "A Colin Larkin Picture", "Leah Rose"];

// array that holds Leah Rose titles
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
face whatever the dark days ahead may bring.`, `When the world around her lost its way, she made her own.`,
`Leah Rose`];


const soundPlay = function(e) {
      openCredits.play();
      picturePlay();
      console.log("it's playing!")
  }
 
  const soundPause = function(e) {
      openCredits.pause();
      console.log("it paused!")
  }

  const soundPP = function(e)   {
      if (openCredits.paused)  {
          openCredits.play();
          ppButton.textContent = "PAUSE"
      }
      else {
          openCredits.pause();
          ppButton.textContent = "PLAY"
  }
}
const picturePlay = function(e)   {
       paramountPlay();
  }


  const paramountPlay = function(e) {
      $("#lr-syn1__index").html("<p>" + synopsisLeahRose[0] + "</p").delay(1000).fadeIn(500).delay(4000).fadeOut(500);
      $("#lr-syn2__index").html("<p>" + synopsisLeahRose[1] + "</p>").delay(2500).fadeIn(1000).delay(2000).fadeOut(500);
      $("#lr-syn3__index").html("<p>" + synopsisLeahRose[2] + "</p>").delay(10000).fadeIn(500).delay(20000).fadeOut(500);
      $("#lr-syn4__index").html("<p>" + synopsisLeahRose[3] + "</p>").delay(13000).fadeIn(500).delay(17000).fadeOut(500);
      $("#lr-syn5__index").html("<p>" + synopsisLeahRose[4] + "</p>").delay(16000).fadeIn(500).delay(14000).fadeOut(500);
      $("#lr-syn6__index").html("<p>" + synopsisLeahRose[5] + "</p>").delay(19000).fadeIn(500).delay(11000).fadeOut(500);
      $("#lr-syn7__index").html("<p>" + synopsisLeahRose[6] + "</p>").delay(22000).fadeIn(500).delay(8000).fadeOut(500);
      $("#lr-syn8__index").html("<p>" + synopsisLeahRose[7] + "</p>").delay(25000).fadeIn(500).delay(5000).fadeOut(500);
      $("#lr-syn9__index").html("<h3>" + synopsisLeahRose[8] + "</h3>").delay(33000).fadeIn(500).delay(7000).fadeOut(500);
      $("#lr-syn10__index").html("<h1>" + synopsisLeahRose[9] + "</h1>").delay(37000).fadeIn(500).delay(3000).fadeOut(500);
         

      console.log("it's paramount")
      // return;                                         // return to stop function?
  }


  stop();


$("#play-btn").on("click", function() {
 soundPlay(openCredits);
});

$("#pause-btn").on("click", function() {
 soundPause(openCredits);
});

$("#pp-btn").on("click", function() {
 soundPP(openCredits);
});

};




window.onload = start;


/* MAIN PAGE */  

// from bottom index, brings us to Leah Rose trailer and plays trailer theme //
const movieLeahRose = $("#leah-eliz")[0];
$("#lr-play-symbol__index").on("click", function()   {
  movieLeahRose.play();
});


/* LEAH ROSE PAGE */





});



 