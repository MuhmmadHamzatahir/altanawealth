var calledFromPage = "/";
var thisPage = window.location.href;

var pagesRequiringDisclaimerAcceptance = [{
    pageName: "adas-fund-information"
}, {
    pageName: "tbf-fund-information"
}, {
    pageName: "acf-fund-information"
}, {
    pageName: "actf-strategy-information"
}, {
    pageName: "adcf-strategy-information"
}, {
    pageName: "adas-research-and-sentiment-data"
}, {
    pageName: "adas-directors-report-us"
}, {
    pageName: "adas-directors-report-europe"
}, {
    pageName: "adas-directors-report-asia"
}, {
    pageName: "adof-strategy-information"
}, {
    pageName: "aspa-strategy-information"
}, {
    pageName: "pssif-fund-information"
}, {
    pageName: "acbf-fund-information"
}];


var localStorageExists = false;

window.addEventListener('DOMContentLoaded', function() {

    thisPage = window.location.href;
    localStorageExists = (typeof(Storage) !== "undefined");

    closeDisclaimerPopUp();

    document.getElementById('disclaimer-accept').addEventListener("click", disclaimerAccepted);
    document.getElementById('disclaimer-decline').addEventListener("click", disclaimerDeclined);
    document.getElementById('disclaimer-close').addEventListener("click", disclaimerDeclined);

    testDisclaimerRequired();
});

function openDisclaimerPopUp() {
    document.getElementById('disclaimer-page').style.display = 'flex'; // show
    document.getElementById('cover').style.display = 'block';
}

function closeDisclaimerPopUp() {
    document.getElementById('disclaimer-page').style.display = 'none';
    document.getElementById('cover').style.display = 'none';
}


function disclaimerAccepted() {
    console.log('Accepted');
    if (localStorageExists) {
        localStorage.acceptedDisclaimer = true;
        localStorage.acceptedDateTimeUTC = new Date();
        calledFromPage = window.location.href;
        console.log("Accepted: calledFromPage <" + calledFromPage + "> this <" + thisPage + ">");
    }


    closeDisclaimerPopUp();
}

function disclaimerDeclined() {
    console.log('Declined');
    if (localStorageExists) {
        localStorage.acceptedDisclaimer = false;
        localStorage.acceptedDateTimeUTC = new Date();
    }
    closeDisclaimerPopUp();
        console.log("Declined: calledFromPage <" + calledFromPage + "> this <" + thisPage + ">");
    location.replace(calledFromPage);
}


function testDisclaimerRequired() {

    // get name of page
    var thisPage = window.location.pathname.split('/').slice(-1)[0];
    console.log("this page <" + thisPage + ">");
    console.log(localStorage);

    // test if page exists in pagesRequiringDisclaimerAcceptance array
    var result = pagesRequiringDisclaimerAcceptance.filter(x => x.pageName === thisPage).length;

    if (result != 0) {
        // debug only
        if (1 === 1) {
            console.log("Page requires disclaimer to be accepted");
//            if (localStorageExists && confirm("Clear local Storage?")) {
                localStorage.clear();
//            }
        }
        // debug only
        if (localStorageExists) { // IF Local storage exists, may not on some browsers
            if (localStorage.acceptedDisclaimer) { // acceptedDisclaimer exists
            } // end acceptedDisclaimer exists
            else { // acceptedDisclaimer NOT exists
                localStorage.acceptedDisclaimer = false;
                localStorage.acceptedDateTimeUTC = new Date();
            } // end acceptedDisclaimer NOT exists

            if (localStorage.acceptedDisclaimer === 'false') {
                openDisclaimerPopUp();
            }
        } // end Local storage exists
        else { // Local storage NOT exists so have to ask every time since have no ability to store
            // can add session permanence via global JS variable
            openDisclaimerPopUp();
        } // end Local storage NOT exists
    } else {
        // console.log("Page DOES NOT requires disclaimer to be accepted");
    }
};