$(document).ready(function()    {

/* MAIN PAGE */  

//plays the Leah Rose theme//
var playLeahRose = $("#leah-zimmer")[0];
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


/* LEAH ROSE PAGE */

// array that holds Leah Rose synopsis
const synopsisLeahRose = [`NEW YORK CITY.`, `SUMMER 1929.`, `She has it all. Youth. Beauty. A great man. A beautiful home. 
And enough money for a lifetime.`, `And during the last summer of the 1920s, popular socialite Leah Rose indulges
in all the delights the good life has to offer with husband Alfred and their circle of fabulous friends.
`, `But what Leah and no one else around her knows is that these glorious golden days
are numbered. Down on Wall Street, just a few miles south of her
exclusive Upper East Side address, a storm is brewing.
A storm born of years of reckless stock speculation that will strike at the very heart of the global
economy in the final days of October. And when it strikes, it leaves Leah's world 
of privilege and security utterly destroyed.
`, `In the desperate months that follow, while Alfred leaves town to try his hand at bootlegging in a bid to restore some measure of that cherished world,
Leah grudgingly agrees to stay with a trusted but strapped actor friend from 
Alfred's youth in a squalid house he shares with other starving artists, intellectuals 
and people on the fringes of society.`, `Living among these Greenwich Village bohemians for whom she has little affection, 
Leah will face hard realities
her pampered existence has left her ill-equipped to meet - an unplanned pregnancy; a landlord who 
wants her out unless she can pay rent; having to find a job with no experience; and with each 
passing day he's gone, the growing fear that Alfred isn't coming back. All against the spectre of 
dangerous new political ideologies on the rise.`, `   Yet even with all she's lost, Leah will come to gain something far more valuable.
Through her difficult journey and the people she meets along the way, Leah 
will discover who she really is. Awakening to the plight of the powerless, 
reconnecting with her roots, learning a trade and sobering up, she will emerge with a sense 
of purpose far greater than anything she's ever known, with the strength and wisdom to 
face whatever the dark days ahead may bring.`];

//fades in after 1 second//
//fades out after 5 seconds//
  $("#lr-syn1").html(synopsisLeahRose[0]).delay(1000).fadeIn(500).delay(4000).fadeOut(500);
  $("#lr-syn2").html(synopsisLeahRose[1]).delay(2500).fadeIn(1000).delay(2000).fadeOut(500); 
  $("#outdoor-party").delay(8000).fadeIn(500).delay(5000).fadeOut(17500);
  $("#lr-syn3").html(synopsisLeahRose[2]).delay(10000).fadeIn(500).delay(20000).fadeOut(500);
  $("#lr-syn4").html(synopsisLeahRose[3]).delay(13000).fadeIn(500).delay(17000).fadeOut(500);
  $("#lr-syn5").html(synopsisLeahRose[4]).delay(16000).fadeIn(500).delay(14000).fadeOut(500);
  $("#lr-syn6").html(synopsisLeahRose[5]).delay(19000).fadeIn(500).delay(11000).fadeOut(500);
  $("#lr-syn7").html(synopsisLeahRose[6]).delay(22000).fadeIn(500).delay(8000).fadeOut(500);
  $("#lr-syn8").html(synopsisLeahRose[7]).delay(25000).fadeIn(500).delay(5000).fadeOut(500);


// array that holds Leah Rose tag and title
const titles = [`When the world around her lost its way, she made her own.`,
                `Leah Rose`];

//fades in after 37 seconds//
//fades out after 43 seconds//
  $("#leah-rose-tag").html(titles[0]).delay(37000).fadeIn(500).delay(5000).fadeOut(500);
  $(".leah-rose-title-two").html(titles[1]).delay(40000).fadeIn(500).delay(2000).fadeOut(500);

//fades in after 50 seconds//
  $("#lr-full").delay(50000).fadeIn(500);
  $(".lr-title1").delay(50000).fadeIn(500);
});



 