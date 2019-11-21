  var pagesModifiedHeader = [{
        pageName: "home"
    },
    {
        pageName: "home-new"
    }
];
function addModifiedHeaderIfRequired() {
    // get name of page
    var thisPage = window.location.pathname.split('/').slice(-1)[0];

    // test if page exists in pagesModifiedHeader array
// NOT WORK IN INTERNET EXPLORER    var result = pagesModifiedHeader.filter(x => x.pageName === thisPage).length;
    var result = pagesModifiedHeader.filter(function(x) { return x.pageName === thisPage; }.length);

    if (result != 0) {
      document.getElementsByTagName("BODY")[0].classList.add("header-modified");
    } else {
        // alert("Page DOES NOT requires disclaimer to be accepted");
    }
};
window.addEventListener('DOMContentLoaded', function() {
//  addModifiedHeaderIfRequired()
// No have on all pages
      document.getElementsByTagName("BODY")[0].classList.add("header-modified");
});