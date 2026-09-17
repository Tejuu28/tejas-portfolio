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
createScene();

// Navbar
gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1
});

// Hero
gsap.from(".hero-badge", {
    y: 40,
    opacity: 0,
    duration: 1
});

gsap.from(".hero h1", {
    y: 80,
    opacity: 0,
    delay: .2,
    duration: 1
});

gsap.from(".typing", {
    y: 50,
    opacity: 0,
    delay: .5,
    duration: 1
});

gsap.from(".hero p", {
    y: 40,
    opacity: 0,
    delay: .8,
    duration: 1
});

gsap.from(".hero-buttons", {
    y: 40,
    opacity: 0,
    delay: 1,
    duration: 1
});

gsap.from(".hero-stats", {
    y: 40,
    opacity: 0,
    delay: 1.2,
    duration: 1
});

// About
gsap.from(".glass-card", {
    x: -120,
    opacity: 0,
    duration: 1
});

gsap.from(".info-card", {
    x: 120,
    opacity: 0,
    duration: 1,
    stagger: .2
});
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 2500);

});
const cursor=document.querySelector(".cursor");
const outline=document.querySelector(".cursor-outline");

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

outline.style.left=e.clientX+"px";
outline.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-hover");
outline.classList.add("cursor-outline-hover");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-hover");
outline.classList.remove("cursor-outline-hover");

});

});
