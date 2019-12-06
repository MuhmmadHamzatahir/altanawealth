(function(altana, undefined){
    altana.calledFromPage = "/";
    altana.thisPage = window.location.href;

    altana.pagesRequiringDisclaimerAcceptance = [{
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

    const debug = (1 === 1);

    altana.localStorageExists = false;
    localStorage.altana = localStorage.altana || {};

    window.addEventListener('DOMContentLoaded', function() {

        altana.thisPage = window.location.href;
        altana.localStorageExists = (typeof(Storage) !== "undefined");

        altana.closeDisclaimerPopUp();

        document.getElementById('disclaimer-accept').addEventListener("click", altana.disclaimerAccepted);
        document.getElementById('disclaimer-decline').addEventListener("click", altana.disclaimerDeclined);
        document.getElementById('disclaimer-close').addEventListener("click", altana.disclaimerDeclined);

        altana.testDisclaimerRequired();
    });

    altana.openDisclaimerPopUp = function() {
        document.getElementById('disclaimer-page').style.display = 'flex'; // show
        document.getElementById('cover').style.display = 'block';
    }

    altana.closeDisclaimerPopUp = function() {
        document.getElementById('disclaimer-page').style.display = 'none';
        document.getElementById('cover').style.display = 'none';
    }

    altana.disclaimerAccepted = function() {
        console.log('Accepted');
        if (altana.localStorageExists) {
            localStorage.altana.acceptedDisclaimer = true;
            localStorage.altana.acceptedDateTimeUTC = new Date();
            calledFromPage = window.location.href;
            console.log("Accepted: calledFromPage <" + calledFromPage + "> this <" + thisPage + ">");
        }
        altana.closeDisclaimerPopUp();
    }
    altana.disclaimerDeclined = function() {
        console.log('Declined');
        if (altana.localStorageExists) {
            localStorage.altana.acceptedDisclaimer = false;
            localStorage.altana.acceptedDateTimeUTC = new Date();
        }
        altana.closeDisclaimerPopUp();
        console.log("Declined: calledFromPage <" + calledFromPage + "> this <" + thisPage + ">");
        location.replace(calledFromPage);
    }

    altana.testDisclaimerRequired = function() {
        // get name of page
        var thisPage = window.location.pathname.split('/').slice(-1)[0];
        console.log("this page <" + thisPage + ">");
        console.log(localStorage.altana);

        // test if page exists in pagesRequiringDisclaimerAcceptance array
        var result = altana.pagesRequiringDisclaimerAcceptance.filter(x => x.pageName === thisPage).length;

        if (result != 0) {

            // debug only
            if (debug) {
                console.log("Page requires disclaimer to be accepted");
                if (altana.localStorageExists && confirm("Clear local Storage?")) {
                    localStorage.altana.clear();
                }
            }
            // END debug only

            if (altana.localStorageExists) { // IF Local storage exists, may not on some browsers
                if (localStorage.altana.acceptedDisclaimer)
                { // acceptedDisclaimer exists
                    var today = new Date();
                    var diffMs = (today - localStorage.altana.acceptedDateTimeUTC); // milliseconds difference
                    var diffMins = diffMs / 60000; // minutes

                    console.log('Disclaimer last accepted ' + diffMins.toFixed(2) + ' seconds ago');


                } // end acceptedDisclaimer exists
                else { // acceptedDisclaimer NOT exists
                    localStorage.altana.acceptedDisclaimer = false;
                    localStorage.altana.acceptedDateTimeUTC = new Date();
                } // end acceptedDisclaimer NOT exists

                if (localStorage.altana.acceptedDisclaimer === 'false') {
                    altana.openDisclaimerPopUp();
                }
            } // end Local storage exists
            else { // Local storage NOT exists so have to ask every time since have no ability to store
                // can add session permanence via global JS variable
                altana.openDisclaimerPopUp();
            } // end Local storage NOT exists
        } else {
            if (debug) {
                console.log("Page DOES NOT requires disclaimer to be accepted");
            }
        }
    };

})(window.altana = window.altana || {});