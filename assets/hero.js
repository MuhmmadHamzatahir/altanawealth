var loop = 0;
var bodyID;
var strap2ID;


window.addEventListener('DOMContentLoaded', function() {
    bodyID= document.getElementsByTagName("BODY")[0];
    document.getElementsByClassName("Parallax-host-outer")[0].getElementsByClassName("Parallax-item")[0].getElementsByTagName("IMG")[0].classList.add("back-image");
    bodyID.classList.add("hero01");
    strap2ID = document.getElementById("hero-strap2");
    loopStyling();
    setInterval(loopStyling, 6000);
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