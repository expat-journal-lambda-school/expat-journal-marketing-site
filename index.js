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
//TweenMax.to("header", 2, {opacity:0.85, delay:0.5});  

window.onscroll = function() {myScroll()};

function myScroll() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    TweenMax.to(".row", 0.8, {rotation:360});
  }
}
TweenMax.to(".img2", 2, {opacity:0.7, delay:1.6});
 
 