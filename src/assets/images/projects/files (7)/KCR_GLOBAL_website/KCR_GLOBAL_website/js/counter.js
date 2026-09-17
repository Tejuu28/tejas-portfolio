/* ==========================================================================
   counter.js — animated number counters, triggered on scroll into view
   ========================================================================== */

(function () {
  "use strict";

  var counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-counter"));
    var duration = 1600;
    var start = null;
    var decimals = (el.getAttribute("data-counter").split(".")[1] || "").length;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); /* ease-out-cubic */
      var value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString();
        el.classList.add("counting");
      }
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { observer.observe(el); });
})();
