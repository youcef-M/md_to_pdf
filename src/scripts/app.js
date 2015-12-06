(function () {

  var remote = require('remote');
  var BrowserWindow = remote.require('browser-window');

  function init() {
    document.getElementById("min-btn").addEventListener("click", function (e) {
      var window = BrowserWindow.getFocusedWindow();
      window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
      var window = BrowserWindow.getFocusedWindow();
      window.maximize();
      document.getElementById("max-btn").classList.add("hidden");
      document.getElementById("unmax-btn").classList.remove("hidden");
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
      var window = BrowserWindow.getFocusedWindow();
      window.close();
    });

    document.getElementById("unmax-btn").addEventListener("click", function(e) {
      var window = BrowserWindow.getFocusedWindow();
      window.unmaximize();
      document.getElementById("unmax-btn").classList.add("hidden");
      document.getElementById("max-btn").classList.remove("hidden");
    });

  };

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };

})();
