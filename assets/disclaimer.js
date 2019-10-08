window.addEventListener('DOMContentLoaded', function() {

    disclaimerCloseClick();

    document.getElementById('disclaimer-close').addEventListener("click", disclaimerCloseClick);

    var disclaimerButton = document.getElementById('disclaimer');

    if (disclaimerButton != undefined) {disclaimerButton.addEventListener("click", disclaimerClick)};
});

function disclaimerClick(){
    document.getElementById('disclaimer-page').style.display = 'block'; // show
    document.getElementById('cover').style.display = 'block'; 
}

function disclaimerCloseClick(){
    document.getElementById('disclaimer-page').style.display = 'none';
    document.getElementById('cover').style.display = 'none'; 
}