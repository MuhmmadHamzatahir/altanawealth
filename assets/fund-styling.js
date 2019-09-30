var pageToClassMap = [
{pageName: 'adas-overview', fundClass: 'adas'},
{pageName: 'adas-fund-information', fundClass: 'adas'},
{pageName: 'acbf-overview', fundClass: 'acbf'},
{pageName: 'acbf-fund-information', fundClass: 'acbf'}
];

function addFundClassIfRequired() {
    // get name of page
    var thisPage = window.location.pathname.split('/').slice(-1)[0];

    // test if page exists in pageToClassMap array
    var result = pageToClassMap.filter(x => x.pageName === thisPage).fundClass;

    if (result.length != 0) {
      document.getElementsByTagName("BODY")[0].classList.add(result);
    } else {
    }
};
window.addEventListener('DOMContentLoaded', addFundClassIfRequired);