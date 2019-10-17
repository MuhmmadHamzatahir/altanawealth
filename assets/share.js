var modal = null;
var span = null;

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('share-email').addEventListener("click", shareByEmail);
    document.getElementById('share-facebook').addEventListener("click", shareByFacebook);
    document.getElementById('share-linkedin').addEventListener("click", shareByLinkedin);
    document.getElementById('share-messenger-desktop').addEventListener("click", shareBymessengerDesktop);
    document.getElementById('share-messenger-mobile').addEventListener("click", shareBymessengerMobile);
    document.getElementById('share-twitter').addEventListener("click", shareByTwitter);
    document.getElementById('share-whatsapp').addEventListener("click", shareByWhatsapp);
    document.getElementById('share-share').addEventListener("click", shareByShare);
    document.getElementById('follow-email').addEventListener("click", followByEmail);
    document.getElementById('follow-linkedin').addEventListener("click", followByLinkedin);
    document.getElementById('follow-teamtailor').addEventListener("click", followByTeamtailor);

});

function shareByEmail() {
    var href = "mailto:?subject=";
    href = href + "Shared from Altana Wealth";
    href = href + "\&body=Sharing content from Altana Wealth " + window.location;
    hrefClick(href);
};
function followByEmail() {
  signUpButtonClick()
};

function shareByFacebook() {
// https://developers.facebook.com/docs/sharing/reference/feed-dialog/

    var href="http://www.facebook.com/dialog/feed"
    href = href + "?app_id=972752376410619";
    href = href + "&amp;redirect_uri=" + encodeURI(window.location);
    href = href + "&amp;display=popup";
    href = href + "&amp;link=" + encodeURI(window.location);

    hrefClick(href);
};

function shareByLinkedin() {
    var url = window.location;
    var text = "A page of interest on Altana Wealth website";
    console.log(encodeURI('https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=&summary=' + text + '&source=Altana Wealth'));
    window.open(encodeURI('https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=&summary=' + text + '&source=Altana Wealth'), '_blank');
};
function followByLinkedin() {
    window.open(encodeURI("https://www.linkedin.com/company/altana-wealth/about/"), '_blank');
};
function followByTeamtailor() {
    window.open(encodeURI("https://altanawealth.teamtailor.com"), '_blank');
};


function shareBymessengerMobile() {
    var url = window.location;
    var href = "fb-messenger://share";
    href = href + "?app_id=972752376410619";
    href = href + "&amp;redirect_uri=" + url;
    href = href + "&amp;link=" + url;

    var attributes = [
        {name: "rel",   value: "noopener"},
        {name: "target",        value: "_blank"}];

    hrefClick(href, attributes);
};
function shareBymessengerDesktop() {
    var url = window.location;
    var href = "http://www.facebook.com/dialog/send";
    href = href + "?app_id=972752376410619";
    href = href + "&amp;redirect_uri=" + url;
    href = href + "&amp;link=" + url;
    href = href + "&amp;display=popup";
    hrefClick(href);
};





function shareByTwitter() {
    var url = window.location;
    var hashtags = "altanawealth,altana";
    var text = "A page of interest on Altana Wealth website";
    window.open(encodeURI('https://twitter.com/intent/tweet?text=' + text + '\&url=' + url + '\&hashtags=' + hashtags), '_blank', 'toolbar=no,scrollbars=yes,resizable=no,fullscreen=no,top=50,left=50,width=550,height=250')
};

function shareByWhatsapp() {
    var url = window.location;
    var shareText = "A page of interest on Altana Wealth website";
    var attributes = [
        {name: "data-action",   value: "share/whatsapp/share"},
        {name: "target",        value: "_blank"}];

    var href = encodeURI('whatsapp://send?text=' + shareText + ' ' + url);

    hrefClick(href, attributes);
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

function hrefClick(href, attributes) {

if (typeof attributes === 'undefined') { attributes =  []; }

    var a = document.createElement("a");

    a.href = encodeURI(href);
    a.href = href;

    for (var i = 0; i < attributes.length; i++) {
      a.setAttribute(attributes[i].name, attributes[i].value);
    }
    a.click();
}