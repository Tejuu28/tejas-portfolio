/* ==========================================================================
   KCR GLOBAL — main.js
   Header behaviour, mobile nav, page loader, back-to-top, RFQ form
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Page loader ---- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("page-loader");
    if (loader) {
      setTimeout(function () { loader.classList.add("loaded"); }, 350);
    }
  });

  /* ---- Sticky header on scroll ---- */
  var header = document.querySelector(".site-header");
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      navToggle.classList.toggle("active");
      document.body.classList.toggle("nav-open");
    });
  }

  /* Mobile mega-menu accordion toggle */
  document.querySelectorAll(".has-mega > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        link.parentElement.classList.toggle("mega-open");
      }
    });
  });

  /* ---- Back to top ---- */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    }, { passive: true });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Button ripple effect ---- */
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = (e.clientX - rect.left) + "px";
      ripple.style.top = (e.clientY - rect.top) + "px";
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 650);
    });
  });

  /* ---- Generic form submit handler (RFQ / Inquiry / Newsletter) ---- */
  document.querySelectorAll("form[data-ajax-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var successEl = form.parentElement.querySelector(".form-success");
      form.style.display = "none";
      if (successEl) successEl.classList.add("show");
      form.reset();
    });
  });

  /* ---- Mouse-move parallax on hero shapes ---- */
  var heroSection = document.querySelector(".hero");
  var parallaxLayers = document.querySelectorAll(".parallax-layer");
  if (heroSection && parallaxLayers.length) {
    heroSection.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth) - 0.5;
      var y = (e.clientY / window.innerHeight) - 0.5;
      parallaxLayers.forEach(function (layer) {
        var depth = parseFloat(layer.getAttribute("data-depth")) || 10;
        layer.style.transform = "translate(" + (x * depth) + "px, " + (y * depth) + "px)";
      });
    });
  }

  /* ---- Current year in footer ---- */
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Active nav link highlight ---- */
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[href]").forEach(function (a) {
    var href = a.getAttribute("href").split("/").pop();
    if (href === path) a.classList.add("active");
  });

})();
