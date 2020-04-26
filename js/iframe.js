(function() {
  function replaceIframe () {
    var iframe = document.getElementsByTagName('iframe')[0];

    iframe.width = window.innerWidth;
    iframe.height = window.innerHeight;
  }

  replaceIframe();

})();