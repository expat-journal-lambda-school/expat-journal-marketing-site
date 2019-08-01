// basic JS animation on scroll with a toggle menu 'openNav' function


/* Toggle nav */
function openNav() {
  let e = document.getElementById("myLinks");
  if (e.style.display === "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
}
//TweenMax javascript rotations animation

window.onscroll = function() {myScroll()};

function myScroll() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 450) {
    TweenMax.to(".row", 0.8, {rotation:360});
  }
}
//variables for a carousel
let i = 0;
let images = [];
let time = 4000;

// Images Array

images[0] = 'img/backgroundcity.png';
images[1] = 'img/egypt1.jpg';
images[2] = 'img/st_tropez.jpeg';
images[3] = 'img/sicily1.jpg';
// implement timed shift of imgs
function shiftImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++; }  
    else {
      i = 0;
    }
    setTimeout('shiftImg()', time);
  }

window.onload = shiftImg;
