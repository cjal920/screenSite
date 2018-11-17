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


/* LEAH ROSE PAGE */

// array that holds Leah Rose synopsis
const synopsisLeahRose = [`NEW YORK CITY.`, `SUMMER 1929.`, `She has it all. Youth. Beauty. A handsome and successful lawyer husband. A lavish Upper East Side penthouse. 
And enough money for a lifetime.`, `And during the last summer of the 1920s, popular socialite Leah Rose indulges
in all the delights the good life has to offer with husband Alfred and their circle of fabulous friends.
`, `But what Leah and no one else around her knows is that these glorious golden days
are numbered. She doesn't know that just a few miles south of her
exclusive uptown address, a storm is brewing down on Wall Street. 
A storm born of years of reckless speculation that will strike at the very heart of the global
economy in the final days of October. And when it strikes, it leaves Leah's cherished world 
of privilege and security utterly destroyed.
`, `In the desperate months that follow, while Alfred leaves town to try his hand at bootlegging,
Leah grudgingly goes to stay with a trusted but strapped actor friend from 
Alfred's youth in a squalid house he shares with other starving artists, intellectuals 
and people on the fringes.`, `Living among these Greenwich Village bohemians for whom she has little affection, 
Leah will face hard realities
her pampered existence has left her ill-equipped to meet - an unplanned pregnancy; a landlord who 
wants her out unless she can pay rent; having to find a job with no experience; and with each 
passing day he's gone, the growing fear that Alfred isn't coming back. All against the spectre of 
dangerous new political ideologies on the rise.`, `   Yet even with all she's lost, Leah will come to gain something far more valuable.
Through her difficult journey and the people she meets along the way, Leah 
will discover who she really is. Awakening to the plight of the powerless, 
reconnecting with her Jewish heritage, learning a trade, and sobering up, she will emerge with a sense 
of purpose far greater than anything she's ever known, with the strength and wisdom to 
face whatever the dark days ahead may bring.`];

// variables holding values for timing of synopsis reveal

const synopsisFirst = setInterval(fadeOne, 1000);
const synopsisSecond = setInterval(fadeTwo, 2000);
const synopsisThird = setInterval(fadeThree, 3000);
const synopsisFourth= setInterval(fadeFour, 4000);
const synopsisFifth = setInterval(fadeFive, 5000);
const synopsisSixth = setInterval(fadeSix, 6000);
const synopsisSeventh = setInterval(fadeSeven, 7000);
const synopsisEighth = setInterval(fadeEight, 8000);

// function to display each part of synopsis

// function fadeOne()  {
//   $("#lr-syn").html(synopsisLeahRose[0]);
// };

function fadeOne()  {
  $("#lr-syn1").html(synopsisLeahRose[0]);
};

function fadeTwo()  {
  $("#lr-syn2").html(synopsisLeahRose[1]);
};

function fadeThree()  {
  $("#lr-syn3").html(synopsisLeahRose[2]);
};

function fadeFour()  {
  $("#lr-syn4").html(synopsisLeahRose[3]);
};

function fadeFive()  {
  $("#lr-syn5").html(synopsisLeahRose[4]);
};

function fadeSix()  {
  $("#lr-syn6").html(synopsisLeahRose[5]);
};

function fadeSeven()  {
  $("#lr-syn7").html(synopsisLeahRose[6]);
};

function fadeEight()  {
  $("#lr-syn8").html(synopsisLeahRose[7]);
};

const titles = [`When the world around her lost its way, she made her own.`,
                `Leah Rose`];

const titleOne = setInterval(fadeNine, 2000);
const titleTwo = setInterval(fadeTen, 2300);

function fadeNine()  {
  $("#leah-rose-tag").html(titles[0]);
  };
                
function fadeTen()  {
  $(".leah-rose-title-two").html(titles[1]);
  };


  $("#low-man-img").fadeOut(10000);
  $(".lr-syn").fadeOut(15000);
  $("#low-man-img2").fadeOut(5000);
  $("#lr-full").fadeOut(5000);
  $(".lr-title1").fadeOut(5000);

                

  // $("#lr-syn1").fadeIn();
  // $("#lr-syn2").fadeIn();
  // $("#lr-syn3").fadeIn();
  // $("#lr-syn4").fadeIn();
  // $("#lr-syn5").fadeIn();
  // $("#lr-syn6").fadeIn();
  // $("#lr-syn7").fadeIn();


// variable that holds about text
const aboutMe = `A writer of stage and screen who tells`





});