var modal = null;
var span = null;

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('share-email').addEventListener("click", shareByEmail);
    document.getElementById('share-facebook').addEventListener("click", shareByFacebook);
    document.getElementById('share-linkedin').addEventListener("click", shareByLinkedin);
    document.getElementById('share-messenger').addEventListener("click", shareBymessenger);
    document.getElementById('share-twitter').addEventListener("click", shareByTwitter);
    document.getElementById('share-whatsapp').addEventListener("click", shareByWhatsapp);
    document.getElementById('share-share').addEventListener("click", shareByShare);
});

function shareByEmail() {
    var mail = document.createElement("a");
    var href = 'mailto:?subject=Shared%20from%20Altana%20Wealth\&body=Sharing content from Altana Wealth ' + window.location;

    mail.href = href;
    mail.click();

};

function shareByFacebook() {
    var thisPage = window.location.pathname; + window.location.pathname;
    alert('Hi <' + thisPage + '>');
};

function shareByLinkedin() {
    var thisPage = window.location.pathname;
    alert('Hi <' + thisPage + '>');
};

function shareBymessenger() {
    var thisPage = window.location.pathname;
    alert('Hi <' + thisPage + '>');
};

function shareByTwitter() {
    var url = window.location;
    var hashtags = "altanawealth,altana";
    var text = "A page of interest on Altana Wealth website";
    window.open(encodeURI('https://twitter.com/intent/tweet?text=' + text + '\&url=' + url + '\&hashtags=' + hashtags), '_blank', 'toolbar=no,scrollbars=yes,resizable=no,fullscreen=no,top=50,left=50,width=550,height=250')
};

function shareByWhatsapp() {
    var thisPage = window.location.pathname;
    alert('Hi <' + thisPage + '>');
};

function shareByShare() {
    var copyText = document.createElement("textarea");
    document.body.appendChild(copyText);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    copyText.value = encodeURI(window.location.pathname);
    copyText.select();
    document.execCommand("copy");

    // Get the modal
    modal = document.getElementById("copyModal");
    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    var a = document.getElementById("copy-text")
    a.innerHTML =  window.location.pathname;
    a.href = copyText.value;
    modal.style.display = "block";

    document.body.removeChild(copyText);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};