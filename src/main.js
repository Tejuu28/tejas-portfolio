import "./assets/css/main.css";

import { Certificates } from "./components/Certificates.js";
import gsap from "gsap";
import { Education } from "./components/Education.js";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { About } from "./components/About.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";
import { Experience } from "./components/Experience.js";
import { createScene } from "./three/scene.js";
import { Loader } from "./components/Loader.js";
import { Cursor } from "./components/Cursor.js";
import "./assets/css/experience.css";

/* =========================================================
   APP RENDER
   ========================================================= */

document.querySelector("#app").innerHTML = `
    ${Loader()}
    ${Cursor()}
    ${Navbar()}

    <main>
        ${Hero()}
        ${About()}
        ${Skills()}
        ${Certificates()}
        ${Projects()}
        ${Experience()}
        ${Contact()}
    </main>

    ${Footer()}
`;


/* =========================================================
   THREE.JS SCENE
   ========================================================= */

createScene();


/* =========================================================
   NAVBAR
   ========================================================= */

const navbar = document.querySelector("#navbar");
const menuButton = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");


/* =========================================================
   MOBILE MENU
   ========================================================= */

function openMobileMenu() {
    if (!menuButton || !mobileMenu) return;

    menuButton.classList.add("active");
    mobileMenu.classList.add("active");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close menu");

    document.body.classList.add("menu-open");
}


function closeMobileMenu() {
    if (!menuButton || !mobileMenu) return;

    menuButton.classList.remove("active");
    mobileMenu.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");

    document.body.classList.remove("menu-open");
}


function toggleMobileMenu() {
    if (!mobileMenu) return;

    if (mobileMenu.classList.contains("active")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


if (menuButton) {
    menuButton.addEventListener("click", toggleMobileMenu);
}


/* =========================================================
   MOBILE MENU LINKS
   ========================================================= */

mobileNavLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            closeMobileMenu();

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    });

});


/* =========================================================
   DESKTOP NAVIGATION
   ========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = [
    document.querySelector("#home"),
    document.querySelector("#about"),
    document.querySelector("#skills"),
    document.querySelector("#projects"),
    document.querySelector("#contact")
].filter(Boolean);


function setActiveSection(id) {

    navLinks.forEach((link) => {

        const href = link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === `#${id}`
        );

    });


    mobileNavLinks.forEach((link) => {

        const href = link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === `#${id}`
        );

    });

}


const sectionObserver = new IntersectionObserver(
    (entries) => {

        const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
                (a, b) =>
                    b.intersectionRatio -
                    a.intersectionRatio
            );

        if (visibleSections.length > 0) {

            const sectionId =
                visibleSections[0].target.id;

            setActiveSection(sectionId);

        }

    },
    {
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -55% 0px"
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================================================
   CLOSE MOBILE MENU ON RESIZE
   ========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 700) {
        closeMobileMenu();
    }

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!mobileMenu || !menuButton) return;

    if (!mobileMenu.classList.contains("active")) return;

    const clickedInsideMenu =
        mobileMenu.contains(event.target);

    const clickedButton =
        menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
        closeMobileMenu();
    }

});


/* =========================================================
   ESC KEY — CLOSE MOBILE MENU
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMobileMenu();
    }

});


/* =========================================================
   NAVBAR ENTRANCE ANIMATION
   ========================================================= */

gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


/* =========================================================
   HERO ANIMATIONS
   ========================================================= */

gsap.from(".hero-badge", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".hero h1", {
    y: 80,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".typing", {
    y: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".hero p", {
    y: 40,
    opacity: 0,
    delay: 0.8,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".hero-buttons", {
    y: 40,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".hero-stats", {
    y: 40,
    opacity: 0,
    delay: 1.2,
    duration: 1,
    ease: "power3.out"
});


/* =========================================================
   ABOUT ANIMATIONS
   ========================================================= */

gsap.from(".glass-card", {
    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".info-card", {
    x: 120,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});


/* =========================================================
   LOADER
   ========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 2500);

});


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursor =
    document.querySelector(".cursor");

const outline =
    document.querySelector(".cursor-outline");


if (cursor && outline) {

    window.addEventListener(
        "mousemove",
        (event) => {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

            outline.style.left =
                event.clientX + "px";

            outline.style.top =
                event.clientY + "px";

        },
        { passive: true }
    );


    document
        .querySelectorAll("a, button")
        .forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add(
                        "cursor-hover"
                    );

                    outline.classList.add(
                        "cursor-outline-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove(
                        "cursor-hover"
                    );

                    outline.classList.remove(
                        "cursor-outline-hover"
                    );

                }
            );

        });

}