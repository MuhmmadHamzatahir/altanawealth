(function(altana, undefined) {
    function reBaseHrefs() {
        // get list of href to files
        var hrefs = Array.from(document.getElementsByTagName("A")).filter(linkOfInterest);

        //disclaimer will log to console for now then open in blank window when implemented logic to go in disclaimerGate function
        hrefs.forEach(function(element) {
//                element.href = href;
            console.log(element.href);
        });
    };

    function linkOfInterest(a) {
        let soughtAddress = ["mybrightidea.squarespace.com"];
        return soughtAddress.some(o => (a.href.toLowerCase()).includes(o));
    }

    window.addEventListener('DOMContentLoaded', reBaseHrefs);

})(window.altana = window.altana || {});