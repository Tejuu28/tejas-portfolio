/* ==========================================================================
   slider.js — lightweight dependency-free carousel
   Used for: testimonials (mobile), related products, blog (if needed)
   ========================================================================== */

(function () {
  "use strict";

  function initSlider(root) {
    var track = root.querySelector("[data-slider-track]");
    if (!track) return;
    var slides = Array.from(track.children);
    var prevBtn = root.querySelector("[data-slider-prev]");
    var nextBtn = root.querySelector("[data-slider-next]");
    var dotsWrap = root.querySelector("[data-slider-dots]");
    var index = 0;

    function perView() {
      var w = window.innerWidth;
      var pv = parseInt(root.getAttribute("data-per-view-desktop") || "3", 10);
      if (w <= 620) pv = 1;
      else if (w <= 960) pv = 2;
      return pv;
    }

    function update() {
      var pv = perView();
      var max = Math.max(0, slides.length - pv);
      if (index > max) index = max;
      var slideWidth = slides[0] ? slides[0].getBoundingClientRect().width + 24 : 0;
      track.style.transform = "translateX(" + (-index * slideWidth) + "px)";
      if (dotsWrap) {
        Array.from(dotsWrap.children).forEach(function (dot, i) {
          dot.classList.toggle("active", i === index);
        });
      }
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      var pv = perView();
      var dotCount = Math.max(1, slides.length - pv + 1);
      for (var i = 0; i < dotCount; i++) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.addEventListener("click", (function (idx) {
          return function () { index = idx; update(); };
        })(i));
        dotsWrap.appendChild(dot);
      }
    }

    if (nextBtn) nextBtn.addEventListener("click", function () {
      var pv = perView();
      var max = Math.max(0, slides.length - pv);
      index = Math.min(index + 1, max);
      update();
    });
    if (prevBtn) prevBtn.addEventListener("click", function () {
      index = Math.max(index - 1, 0);
      update();
    });

    window.addEventListener("resize", update);
    update();
  }

  document.querySelectorAll("[data-slider]").forEach(initSlider);
})();
