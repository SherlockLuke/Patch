


var pics = document.getElementById("games");
var btn = document.getElementById('gallery');
var menuBtn = document.getElementById('menu');
var moboNav = document.getElementById('mobo-nav');

function myMenu() {
    if (moboNav.style.display === 'none') {
        moboNav.style.display = 'block'; 
    } else {
        moboNav.style.display = 'none';
    }
}


// function myGallery() {
//     if (pics.style.display = 'none') {

//         pics.style.display = 'block';
//         btn.style.display = 'none';

//     }
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}