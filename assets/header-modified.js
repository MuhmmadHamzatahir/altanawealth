  var pagesModifiedHeader = [{
        pageName: "home"
    },
    {
        pageName: "philosophy"
    },
    {
        pageName: "philanthropy"
    },
    {
        pageName: "infrastructure"
    }
];
function addModifiedHeaderIfRequired() {
    // get name of page
    var thisPage = window.location.pathname.split('/').slice(-1)[0];

    // test if page exists in pagesModifiedHeader array
    var result = pagesModifiedHeader.filter(x => x.pageName === thisPage).length;

    if (result != 0) {
      document.getElementsByTagName("BODY")[0].classList.add("header-modified");
    } else {
        // alert("Page DOES NOT requires disclaimer to be accepted");
    }
};
window.addEventListener('DOMContentLoaded', function() {
  addModifiedHeaderIfRequired()
});