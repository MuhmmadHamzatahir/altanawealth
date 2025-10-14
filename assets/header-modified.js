(function(altana, undefined) {
    var pagesModifiedHeader = ['home', 'home-new']; // Simpler array structure
    
    function addModifiedHeaderIfRequired() {
        var pathname = window.location.pathname;
        var pageName = pathname.split('/').filter(Boolean).pop() || 'home';
        
        if (pagesModifiedHeader.includes(pageName)) {
            document.body.classList.add("header-modified");
        }
    };
    
    window.addEventListener('DOMContentLoaded', addModifiedHeaderIfRequired);
})(window.altana = window.altana || {});
