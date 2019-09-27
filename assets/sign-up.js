window.addEventListener('DOMContentLoaded', function() {
    signUpCloseButtonClick();
    document.getElementById('sign-up-close').addEventListener("click", signUpCloseButtonClick);
    document.getElementById('sign-up').addEventListener("click", signUpButtonClick);

});

function signUpButtonClick(){
    document.getElementById('sign-up-page').style.display = 'block'; // show
    document.getElementById('cover').style.display = 'block'; 
}

function signUpCloseButtonClick(){
    document.getElementById('sign-up-page').style.display = 'none';
    document.getElementById('cover').style.display = 'none'; 
}