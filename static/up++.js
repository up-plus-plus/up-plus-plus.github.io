

uppp = {
  "init" : function() {
      var background = document.querySelector("div.parallax_background");
      window.addEventListener("scroll", function (evt) {
          background.style.top = (document.body.scrollTop / 2) + "px";
      });
  }
}

uppp.init();
