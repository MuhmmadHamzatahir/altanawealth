  // When the user scrolls the page, execute toggleStickyHeader 
window.onscroll = function() {toggleStickyHeader()};


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleStickyHeader() {
  // Get the header
  var headerID = document.getElementsByTagName("header");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    headerID[0].classList.add("sticky");
  } else {
    headerID[0].classList.remove("sticky");
  }  
}