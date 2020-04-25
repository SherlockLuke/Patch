

var pics = document.getElementById("games");
var btn = document.getElementById('gallery');
var menuBtn = document.getElementById('menu');
var moboNav = document.getElementById('mobo-nav');

function myMenu() {
    if (moboNav.style.display = 'none') {
        moboNav.style.display = 'block'; 
    }
}


function myGallery() {
    if (pics.style.display = 'none') {

        pics.style.display = 'block';
        btn.style.display = 'none';

    }
}