preloadImages([
'https://static1.squarespace.com/static/5be585ad8f5130661d425e56/t/5dd79d920ab5465cb216ad17/1574411668257/main-transparent-1920x1080-01.png?format=2500w',
'/assets/main-lighthouse-16x9-01.jpg',
'/assets/main-lighthouse-16x9-alt-01.jpg',
'/assets/main-beach-16x9-01.jpg',
'/assets/main-lightning-alt-16x9-01.jpg',
'/assets/main-greenhand-16x9-alt-less-green-01.jpg'
], function(){
//    console.log('All images were loaded');
});

var loop = 0;
var bodyID;
var strap2ID;


window.addEventListener('DOMContentLoaded', function() {
    bodyID= document.getElementsByTagName("BODY")[0];
    document.getElementsByClassName("Parallax-host-outer")[0].getElementsByClassName("Parallax-item")[0].getElementsByTagName("IMG")[0].classList.add("back-image");

    bodyID.classList.add("header-modified");
    bodyID.classList.add("landing-page");
    bodyID.classList.add("hero01");

    strap2ID = document.getElementById("hero-strap2");

    loopStyling();
    setInterval(loopStyling, 5000);
});
function loopStyling() {

    var elm = strap2ID;
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
    strap2ID = newone;

    switch (loop) {
        case 0:
            bodyID.classList.remove("hero04");
            bodyID.classList.add("hero01");
            break;
        case 1:
            bodyID.classList.remove("hero01");
            bodyID.classList.add("hero02");
            break;
        case 2:
            bodyID.classList.remove("hero02");
            bodyID.classList.add("hero03");
            break;
        case 3:
            bodyID.classList.remove("hero03");
            bodyID.classList.add("hero04");
            break;
    }
    loop = (loop + 1) % 4;
}

function preloadImages(urls, allImagesLoadedCallback){
    var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function(url){
    preloadImage(url, function(){
        loadedCounter++;
//            console.log('Number of loaded images: ' + loadedCounter);
      if(loadedCounter == toBeLoadedNumber){
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback){
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
  }
}
