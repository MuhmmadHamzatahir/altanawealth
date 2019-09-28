var loop = 0;
var bodyID;
var imgID;
var strap2ID;


window.addEventListener('DOMContentLoaded', function() {
    bodyID= document.getElementsByTagName("BODY")[0];
    bodyID.classList.add("hero01");
    imgID = document.getElementsByClassName("Parallax-host-outer")[0].getElementsByClassName("Parallax-item")[0].getElementsByTagName("IMG")[0];
    imgID.classList.add("back-image");
    strap2ID = document.getElementById("hero-strap2");
    loopStyling();
    setInterval(loopStyling, 4000);
});
function loopStyling() {

    var elm = strap2ID;
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
    strap2ID = newone;

    switch (loop) {
        case 0:
            bodyID.classList.remove("hero04");
            bodyID.classList.add("hero01");
            break;
        case 1:
            bodyID.classList.remove("hero01");
            bodyID.classList.add("hero02");
            break;
        case 2:
            bodyID.classList.remove("hero02");
            bodyID.classList.add("hero03");
            break;
        case 3:
            bodyID.classList.remove("hero03");
            bodyID.classList.add("hero04");
            break;
    }
    loop = (loop + 1) % 4;
}