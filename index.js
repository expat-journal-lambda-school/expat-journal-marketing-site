// basic JS template build
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
//TweenMax javscript rotations animation

window.onscroll = function() {myScroll()};

function myScroll() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
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
