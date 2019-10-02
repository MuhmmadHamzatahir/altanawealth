window.addEventListener('DOMContentLoaded', function() {
    signUpCloseButtonClick();
    document.getElementById('sign-up-close').addEventListener("click", signUpCloseButtonClick);
    var signUpButton = document.getElementById('sign-up');
    if (signUpButton != undefined) {signUpButton.addEventListener("click", signUpButtonClick)};
});

function signUpButtonClick(){
    document.getElementById('sign-up-page').style.display = 'block'; // show
    document.getElementById('cover').style.display = 'block'; 
}

function signUpCloseButtonClick(){
    document.getElementById('sign-up-page').style.display = 'none';
    document.getElementById('cover').style.display = 'none'; 
}