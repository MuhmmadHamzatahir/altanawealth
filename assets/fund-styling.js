/*
var pageToClassMap = [
{pageName: 'adas-overview', fundClass: 'adas'},
{pageName: 'adas-fund-information', fundClass: 'adas'},
{pageName: 'acbf-overview', fundClass: 'acbf'},
{pageName: 'acbf-fund-information', fundClass: 'acbf'},

{pageName: 'all-funds', fundClass: ''}
];
*/
function addFundClassIfRequired() {
  // get name of page
  var thisPage = window.location.pathname.split('/').slice(-1)[0];



  // test if page exists in pageToClassMap array
  // pageToClassMap defined in codeInjections
  var result = pageToClassMap.filter(x => x.pageName === thisPage);

  if (result != undefined && != "") {
    document.getElementsByTagName("BODY")[0].classList.add("page-with-fund-headers");
    if (result[0].fundClass != '') {
      document.getElementsByTagName("BODY")[0].classList.add(result[0].fundClass);
    }
  }
};
window.addEventListener('DOMContentLoaded', addFundClassIfRequired);