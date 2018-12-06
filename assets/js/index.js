$(document).ready(function()    {

/* MAIN PAGE */  

//plays the Leah Rose main theme//
var playLeahRose = $("#leah-eliz")[0];
$("#lr-play-symbol-index").on("click", function()   {
    // watchLeahRose();
    playLeahRose.play();
});

// brings us to Leah Rose page and also plays her theme //
$("#lr-btn-1-index").on("click", function() {
  playLeahRose.play();
});

//plays the Leah Rose trailer theme//
var playLeahRoseTrailer = $("#leah-bugsy")[0];
$("#lr-play-symbol-index").on("click", function()   {
    // watchLeahRose();
    playLeahRoseTrailer.play();
});

// brings us to Leah Rose trailer and plays trailer theme //
$("#lr-btn-2-index").on("click", function() {
  playLeahRoseTrailer.play();
});

// fades in Leah Rose logline and play button when we hover over image
$(".lr-img-container-index").mouseover(function() {
    $("#lr-img-index").animate({opacity: "0.5"});  
    $(".lr-p-index").css({opacity: "1"});
    $("#lr-play-symbol-index").css({opacity: "0.5"});
  });

// when we leave image, all returns to normal
  $(".lr-img-container-index").mouseout(function() {
    $("#lr-img-index").animate({opacity: "0.5"});
    $(".lr-p-index").css({opacity: "0"});
    $("#lr-play-symbol-index").css({opacity: "0"});
  });

  $(".lr-container-index").mouseout(function() {
    $("#lr-img-index").animate({opacity: "1"});
  });

// when we hover over play button, it brightens to full white
  $(".lr-play-container-index").mouseover(function() {
    $("#lr-img-index").animate({opacity: "0.5"});
    $("#lr-play-symbol-index").css({opacity: "1"});
    $(".lr-p-index").css({opacity: "1"});
  });


/* LEAH ROSE PAGE */

// array that holds Leah Rose synopsis
const synopsisLeahRose = [`NEW YORK CITY.`, `SUMMER 1929.`, `She has it all. Youth. Beauty. A great man. A beautiful home. 
And enough money for a lifetime.`, `And during the last summer of the 1920s, popular socialite Leah Rose indulges
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
  $("#lr-syn1-two").html(synopsisLeahRose[0]).delay(1000).fadeIn(500).delay(4000).fadeOut(500);
  $("#lr-syn2-two").html(synopsisLeahRose[1]).delay(2500).fadeIn(1000).delay(2000).fadeOut(500); 
  $("#outdoor-party").delay(8000).fadeIn(500).delay(5000).fadeOut(17500);
  $("#lr-syn3-two").html(synopsisLeahRose[2]).delay(10000).fadeIn(500).delay(20000).fadeOut(500);
  $("#lr-syn4-two").html(synopsisLeahRose[3]).delay(13000).fadeIn(500).delay(17000).fadeOut(500);
  $("#lr-syn5-two").html(synopsisLeahRose[4]).delay(16000).fadeIn(500).delay(14000).fadeOut(500);
  $("#lr-syn6-two").html(synopsisLeahRose[5]).delay(19000).fadeIn(500).delay(11000).fadeOut(500);
  $("#lr-syn7-two").html(synopsisLeahRose[6]).delay(22000).fadeIn(500).delay(8000).fadeOut(500);
  $("#lr-syn8-two").html(synopsisLeahRose[7]).delay(25000).fadeIn(500).delay(5000).fadeOut(500);


// array that holds Leah Rose tag and title
const tagTitle = [`When the world around her lost its way, she made her own.`,
                `Leah Rose`];

//fades in after 37 seconds//
//fades out after 43 seconds//
  $("#lr-tagline-two").html(tagTitle[0]).delay(37000).fadeIn(500).delay(5000).fadeOut(500);
  $(".lr-title-two").html(tagTitle[1]).delay(40000).fadeIn(500).delay(2000).fadeOut(500);

//fades in after 50 seconds//
  $("#lr-full").delay(50000).fadeIn(500).delay(5000).fadeOut(500);
  $(".lr-title1").delay(50000).fadeIn(500).delay(5000).fadeOut(500);


//fades in after 60 seconds//
/* WORK IN PROGRESS */

$("#lr-half").delay(60000).fadeIn(500).delay(5000);
$(".lr-title2").delay(60000).fadeIn(500).delay(5000);

});



 