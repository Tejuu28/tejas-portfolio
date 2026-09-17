/* ==========================================================================
   animations.js — scroll reveal engine for [data-reveal] / [data-reveal-group]
   ========================================================================== */

(function () {
  "use strict";

  var targets = document.querySelectorAll("[data-reveal], [data-reveal-group], .text-reveal");
  if (!targets.length) return;

  /* wrap text-reveal headline words in spans if not already */
  document.querySelectorAll(".text-reveal").forEach(function (el) {
    if (el.dataset.wrapped) return;
    var text = el.textContent;
    el.innerHTML = "<span>" + text + "</span>";
    el.dataset.wrapped = "true";
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  targets.forEach(function (el) { observer.observe(el); });

  /* Image zoom-on-hover already handled via CSS; parallax scroll for hero shapes */
  var shapes = document.querySelectorAll(".hero-shapes span");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    shapes.forEach(function (shape, i) {
      shape.style.transform = "translateY(" + (y * (0.08 + i * 0.04)) + "px)";
    });
  }, { passive: true });
})();
