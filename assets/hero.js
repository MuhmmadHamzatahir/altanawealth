var loop = 0;
var imgID = document.getElementsByTagName("BODY")[0];
var heroMainH1ID;
var heroStrap1ID;
var heroStrap2ID;


window.addEventListener('DOMContentLoaded', function() {
    imgID = document.getElementsByClassName("Parallax-host-outer")[0].getElementsByClassName("Parallax-item")[0].getElementsByTagName("IMG")[0];
    imgID.classList.add("hero");
    imgID.classList.add("hero-pic01");
    heroMainH1ID = document.getElementById("hero-main-h1");
    heroStrap1ID = document.getElementById("hero-strap1");
    heroStrap2ID = document.getElementById("hero-strap2");
    loopPictures();
    setInterval(loopPictures, 3000);
});

function loopPictures() {

    switch (loop) {
        case 0:
            imgID.classList.remove("hero-pic04");
            imgID.classList.add("hero-pic01");
            heroMainH1ID.classList.remove("h1-pic04");
            heroMainH1ID.classList.add("h1-pic01");
            heroStrap1ID.classList.remove("sl4a");
            heroStrap2ID.classList.remove("sl4b");
            heroStrap1ID.classList.add("sl1a");
            break;
        case 1:
            heroStrap2ID.classList.add("sl1b");
            break;
        case 2:
            imgID.classList.remove("hero-pic01");
            imgID.classList.add("hero-pic02");
            heroMainH1ID.classList.remove("h1-pic01");
            heroMainH1ID.classList.add("h1-pic02");
            heroStrap1ID.classList.remove("sl1a");
            heroStrap2ID.classList.remove("sl1b");
            heroStrap1ID.classList.add("sl2a");
            break;
        case 3:
            heroStrap2ID.classList.add("sl2b");
            break;
        case 4:
            imgID.classList.remove("hero-pic02");
            imgID.classList.add("hero-pic03");
            heroMainH1ID.classList.remove("h1-pic02");
            heroMainH1ID.classList.add("h1-pic03");
            heroMainH1ID.classList.add("h1-pic03");
            heroStrap1ID.classList.remove("sl2a");
            heroStrap2ID.classList.remove("sl2b");
            heroStrap1ID.classList.add("sl3a");
            break;
        case 5:
            heroStrap2ID.classList.add("sl3b");
            break;
        case 6:
            imgID.classList.remove("hero-pic03");
            imgID.classList.add("hero-pic04");
            heroMainH1ID.classList.remove("h1-pic03");
            heroMainH1ID.classList.add("h1-pic04");
            heroStrap1ID.classList.remove("sl3a");
            heroStrap2ID.classList.remove("sl3b");
            heroStrap1ID.classList.add("sl4a");
            break;
        case 7:
            heroStrap2ID.classList.add("sl4b");
            break;
    }
    loop = (loop + 1) % 8;
}