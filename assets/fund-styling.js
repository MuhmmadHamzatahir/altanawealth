var pageToClassMap = [
{pageName: 'adas-overview', fundClass: 'adas'},
{pageName: 'adas-fund-information', fundClass: 'adas'},
{pageName: 'adas-research-and-sentiment-data', fundClass: 'adas'},
{pageName: 'adas-directors-report-us', fundClass: 'adas'},
{pageName: 'adas-directors-report-europe', fundClass: 'adas'},
{pageName: 'adas-directors-report-asia', fundClass: 'adas'},
{pageName: 'acbf-overview', fundClass: 'acbf'},
{pageName: 'acbf-fund-information', fundClass: 'acbf'},
{pageName: 'top-test', fundClass: 'acbf'},
{pageName: 'apas-strategy-information', fundClass: 'apas'},
{pageName: 'tbf-overview', fundClass: 'tbf'},
{pageName: 'tbf-fund-information', fundClass: 'tbf'},
{pageName: 'pssif-overview', fundClass: 'pssif'},
{pageName: 'pssif-fund-information', fundClass: 'pssif'},
{pageName: 'aspa-overview', fundClass: 'aspa'},
{pageName: 'aspa-strategy-information', fundClass: 'aspa'},
{pageName: 'acf-overview', fundClass: 'acf'},
{pageName: 'acf-fund-information', fundClass: 'acf'},
{pageName: 'actf-overview', fundClass: 'actf'},
{pageName: 'actf-strategy-information', fundClass: 'actf'},
{pageName: 'adcf-overview', fundClass: 'adcf'},
{pageName: 'adcf-strategy-information', fundClass: 'adcf'},
{pageName: 'adof-overview', fundClass: 'adof'},
{pageName: 'adof-strategy-information', fundClass: 'adof'},
{pageName: 'all-funds-documents', fundClass: ''},
{pageName: 'all-funds', fundClass: ''}
];



function addFundClassIfRequired() {
  // get name of page
  var thisPage = window.location.pathname.split('/').slice(-1)[0];



  // test if page exists in pageToClassMap array
  // pageToClassMap defined in codeInjections
  var result = pageToClassMap.filter(x => x.pageName === thisPage);

  if (result.length != 0) {
    document.getElementsByTagName("BODY")[0].classList.add("page-with-fund-headers");
    if (result[0].fundClass != '') {
      document.getElementsByTagName("BODY")[0].classList.add(result[0].fundClass);
    }
  }
};
window.addEventListener('DOMContentLoaded', addFundClassIfRequired);