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
import { CommandPalette } from "./components/CommandPalette.js";
import { ProjectCaseStudy } from "./components/ProjectCaseStudy.js";


/* =========================================================
   APP RENDER
   ========================================================= */

document.querySelector("#app").innerHTML = `
    ${Loader()}
    ${Cursor()}
    ${Navbar()}
    ${CommandPalette()}
    ${ProjectCaseStudy()}

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

        setTimeout(() => {

            loader.remove();

        }, 900);

    }, 1200);

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
/* =========================================================
   DEVELOPER COMMAND PALETTE
   ========================================================= */

const commandOverlay = document.querySelector("#command-overlay");
const commandPalette = document.querySelector("#command-palette");
const commandSearch = document.querySelector("#command-search-input");
const commandClose = document.querySelector("#command-close");

const commandItems = Array.from(
    document.querySelectorAll(".command-item")
);

let selectedCommandIndex = 0;


/* =========================
   OPEN
   ========================= */

function openCommandPalette() {

    if (!commandOverlay) return;

    commandOverlay.classList.add("active");

    document.body.classList.add("command-open");

    selectedCommandIndex = 0;

    updateSelectedCommand();

    setTimeout(() => {
        if (commandSearch) {
            commandSearch.focus();
        }
    }, 80);
}


/* =========================
   CLOSE
   ========================= */

function closeCommandPalette() {

    if (!commandOverlay) return;

    commandOverlay.classList.remove("active");

    document.body.classList.remove("command-open");

    if (commandSearch) {
        commandSearch.value = "";
    }

    filterCommands("");

    selectedCommandIndex = 0;

    updateSelectedCommand();

}


/* =========================
   TOGGLE
   ========================= */

function toggleCommandPalette() {

    if (!commandOverlay) return;

    if (commandOverlay.classList.contains("active")) {
        closeCommandPalette();
    } else {
        openCommandPalette();
    }

}


/* =========================
   KEYBOARD SHORTCUT
   CTRL + K
   ========================= */

document.addEventListener("keydown", (event) => {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        toggleCommandPalette();

    }

});


/* =========================
   ESC
   ========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (
            commandOverlay &&
            commandOverlay.classList.contains("active")
        ) {
            closeCommandPalette();
        }

    }

});


/* =========================
   CLOSE BUTTON
   ========================= */

if (commandClose) {

    commandClose.addEventListener(
        "click",
        closeCommandPalette
    );

}


/* =========================
   CLICK OUTSIDE
   ========================= */

if (commandOverlay) {

    commandOverlay.addEventListener(
        "click",
        (event) => {

            if (event.target === commandOverlay) {
                closeCommandPalette();
            }

        }
    );

}


/* =========================
   COMMAND ACTIONS
   ========================= */

function executeCommand(command) {

    if (!command) return;


    const sections = {
        home: "#home",
        about: "#about",
        skills: "#skills",
        projects: "#projects",
        experience: "#experience",
        certificates: "#certificates",
        contact: "#contact"
    };


    /* =========================
       NAVIGATION
       ========================= */

    if (sections[command]) {

        const target =
            document.querySelector(sections[command]);

        if (target) {

            closeCommandPalette();

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 120);

        }

        return;
    }


    /* =========================
       RESUME
       ========================= */

    if (command === "resume") {

        const resumeLink =
            document.querySelector(
                'a[href*="resume"]'
            );

        if (resumeLink) {

            closeCommandPalette();

            resumeLink.click();

        }

        return;
    }


    /* =========================
       GITHUB
       ========================= */

    if (command === "github") {

        closeCommandPalette();

        window.open(
            "https://github.com/Tejuu28",
            "_blank",
            "noopener,noreferrer"
        );

        return;
    }


    /* =========================
       LINKEDIN
       ========================= */

    if (command === "linkedin") {

        closeCommandPalette();

        window.open(
            "https://www.linkedin.com/in/tejas-prabhakar-mane/",
            "_blank",
            "noopener,noreferrer"
        );

        return;
    }

}


/* =========================
   COMMAND CLICK
   ========================= */

commandItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        const command =
            item.dataset.command;

        selectedCommandIndex = index;

        executeCommand(command);

    });

});


/* =========================
   SEARCH
   ========================= */

function filterCommands(searchValue) {

    const query =
        searchValue.trim().toLowerCase();


    commandItems.forEach((item) => {

        const text =
            item.textContent.toLowerCase();

        const matches =
            text.includes(query);

        item.style.display =
            matches ? "" : "none";

    });


    const visibleItems =
        commandItems.filter(
            (item) =>
                item.style.display !== "none"
        );


    if (
        selectedCommandIndex >=
        visibleItems.length
    ) {
        selectedCommandIndex = 0;
    }


    updateSelectedCommand();

}


if (commandSearch) {

    commandSearch.addEventListener(
        "input",
        (event) => {

            filterCommands(
                event.target.value
            );

        }
    );

}


/* =========================
   SELECTED ITEM
   ========================= */

function getVisibleCommandItems() {

    return commandItems.filter(
        (item) =>
            item.style.display !== "none"
    );

}


function updateSelectedCommand() {

    const visibleItems =
        getVisibleCommandItems();


    commandItems.forEach((item) => {

        item.classList.remove("selected");

    });


    if (!visibleItems.length) return;


    if (
        selectedCommandIndex <
        0
    ) {
        selectedCommandIndex =
            visibleItems.length - 1;
    }


    if (
        selectedCommandIndex >=
        visibleItems.length
    ) {
        selectedCommandIndex = 0;
    }


    const selected =
        visibleItems[
            selectedCommandIndex
        ];


    if (selected) {

        selected.classList.add(
            "selected"
        );

        selected.scrollIntoView({
            block: "nearest"
        });

    }

}


/* =========================
   ARROW NAVIGATION
   ========================= */

document.addEventListener("keydown", (event) => {

    if (
        !commandOverlay ||
        !commandOverlay.classList.contains("active")
    ) {
        return;
    }


    const visibleItems =
        getVisibleCommandItems();


    if (!visibleItems.length) return;


    if (event.key === "ArrowDown") {

        event.preventDefault();

        selectedCommandIndex++;

        if (
            selectedCommandIndex >=
            visibleItems.length
        ) {
            selectedCommandIndex = 0;
        }

        updateSelectedCommand();

    }


    if (event.key === "ArrowUp") {

        event.preventDefault();

        selectedCommandIndex--;

        if (
            selectedCommandIndex < 0
        ) {
            selectedCommandIndex =
                visibleItems.length - 1;
        }

        updateSelectedCommand();

    }


    if (event.key === "Enter") {

        event.preventDefault();

        const selected =
            visibleItems[
                selectedCommandIndex
            ];

        if (selected) {

            executeCommand(
                selected.dataset.command
            );

        }

    }

});


/* =========================
   COMMAND PALETTE BODY LOCK
   ========================= */

const commandStyle =
    document.createElement("style");

commandStyle.textContent = `
    body.command-open {
        overflow: hidden;
    }
`;

document.head.appendChild(commandStyle);
/* =========================================================
   PROJECT CASE STUDY FUNCTIONALITY
   ========================================================= */

const caseStudyOverlay =
    document.querySelector("#case-study-overlay");

const caseStudyClose =
    document.querySelector("#case-study-close");

const caseStudyTitle =
    document.querySelector("#case-study-title");

const caseStudyCategory =
    document.querySelector("#case-study-category");

const caseStudyDescription =
    document.querySelector("#case-study-description");

const caseStudyNumber =
    document.querySelector("#case-study-number");

const caseStudyTech =
    document.querySelector("#case-study-tech");

const caseStudyFeatures =
    document.querySelector("#case-study-features");

const caseStudyFocus =
    document.querySelector("#case-study-focus");

const caseStudyGithub =
    document.querySelector("#case-study-github");

const caseStudyLive =
    document.querySelector("#case-study-live");

const architectureOne =
    document.querySelector("#architecture-one");

const architectureTwo =
    document.querySelector("#architecture-two");

const architectureThree =
    document.querySelector("#architecture-three");


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projectCaseStudies = [

    {
        number: "01",

        category: "ASP.NET CORE WEB APPLICATION",

        title: "Hospital Management System",

        description:
            "A database-driven hospital management application designed to manage patients, doctors and appointments through a structured web-based system.",

        tech: [
            "ASP.NET Core MVC",
            "C#",
            ".NET 8",
            "Entity Framework Core",
            "PostgreSQL",
            "Npgsql"
        ],

        features: [
            "Patient Management",
            "Doctor Management",
            "Appointment Management",
            "Database Integration",
            "Role-Based Access",
            "Responsive Interface"
        ],

        focus:
            "Building a structured healthcare application with reliable database integration, reusable architecture and scalable application workflows.",

        architecture: [
            "ASP.NET Core MVC",
            "Entity Framework Core",
            "PostgreSQL"
        ],

        github: "#",

        live: "#"
    },


    {
        number: "02",

        category: "STUDENT MANAGEMENT SYSTEM",

        title: "Student Management System",

        description:
            "A student management platform focused on organizing student information, admissions, attendance, marks and academic reports.",

        tech: [
            "Node.js",
            "JavaScript",
            "SQLite",
            "HTML",
            "CSS"
        ],

        features: [
            "Student Records",
            "Admission Management",
            "Attendance Tracking",
            "Marks Management",
            "Academic Reports",
            "Database Operations"
        ],

        focus:
            "Developing an organized academic management workflow with structured data handling and a responsive user interface.",

        architecture: [
            "JavaScript Interface",
            "Node.js",
            "SQLite"
        ],

        github: "#",

        live: "#"
    },


    {
        number: "03",

        category: ".NET WEB APPLICATION",

        title: "Online Job Portal",

        description:
            "A web-based recruitment platform connecting job seekers and recruiters through profiles, job listings and application workflows.",

        tech: [
            ".NET",
            "C#",
            "SQL",
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Job Listings",
            "Recruiter Profiles",
            "Job Seeker Profiles",
            "Application Management",
            "Search Workflow",
            "Database Integration"
        ],

        focus:
            "Creating a structured recruitment workflow that connects job seekers and recruiters through a database-driven application.",

        architecture: [
            ".NET Application",
            "Business Logic",
            "SQL Database"
        ],

        github: "#",

        live: "#"
    },


    {
        number: "04",

        category: ".NET WEB APPLICATION",

        title: "Online Examination System",

        description:
            "An online examination platform designed to manage questions, timed examinations, automatic evaluation and result generation.",

        tech: [
            ".NET",
            "C#",
            "SQL",
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Online Examination",
            "Question Management",
            "Exam Timer",
            "Automatic Evaluation",
            "Result Generation",
            "Database Management"
        ],

        focus:
            "Building a reliable examination workflow with timed assessments, automated evaluation and structured result processing.",

        architecture: [
            ".NET Application",
            "Examination Logic",
            "SQL Database"
        ],

        github: "#",

        live: "#"
    },


    {
        number: "05",

        category: "RESPONSIVE WEB DEVELOPMENT",

        title: "College Website",

        description:
            "A responsive college website presenting academic information, courses, faculty and institutional content through a modern web interface.",

        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design"
        ],

        features: [
            "Responsive Layout",
            "Course Information",
            "Faculty Information",
            "Institutional Content",
            "Interactive UI",
            "Mobile Compatibility"
        ],

        focus:
            "Creating a responsive institutional website with clear information architecture and a user-friendly browsing experience.",

        architecture: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        github: "#",

        live: "#"
    }

];


/* =========================================================
   OPEN CASE STUDY
   ========================================================= */

function openProjectCaseStudy(index) {

    const project =
        projectCaseStudies[index];

    if (!project || !caseStudyOverlay) {
        return;
    }


    if (caseStudyNumber) {
        caseStudyNumber.textContent =
            project.number;
    }


    if (caseStudyCategory) {
        caseStudyCategory.textContent =
            project.category;
    }


    if (caseStudyTitle) {
        caseStudyTitle.textContent =
            project.title;
    }


    if (caseStudyDescription) {
        caseStudyDescription.textContent =
            project.description;
    }


    if (caseStudyFocus) {
        caseStudyFocus.textContent =
            project.focus;
    }


    /* =========================
       TECHNOLOGY
       ========================= */

    if (caseStudyTech) {

        caseStudyTech.innerHTML =
            project.tech
                .map(
                    (technology) =>
                        `<span>${technology}</span>`
                )
                .join("");

    }


    /* =========================
       FEATURES
       ========================= */

    if (caseStudyFeatures) {

        caseStudyFeatures.innerHTML =
            project.features
                .map(
                    (feature) =>
                        `<span class="case-study-feature">${feature}</span>`
                )
                .join("");

    }


    /* =========================
       ARCHITECTURE
       ========================= */

    if (architectureOne) {
        architectureOne.textContent =
            project.architecture[0];
    }

    if (architectureTwo) {
        architectureTwo.textContent =
            project.architecture[1];
    }

    if (architectureThree) {
        architectureThree.textContent =
            project.architecture[2];
    }


    /* =========================
       LINKS
       ========================= */

    if (caseStudyGithub) {

        caseStudyGithub.href =
            project.github;

        caseStudyGithub.style.display =
            project.github === "#"
                ? "none"
                : "";

    }


    if (caseStudyLive) {

        caseStudyLive.href =
            project.live;

        caseStudyLive.style.display =
            project.live === "#"
                ? "none"
                : "";

    }


    /* =========================
       SHOW
       ========================= */

    caseStudyOverlay.classList.add(
        "active"
    );

    document.body.classList.add(
        "case-study-open"
    );

}


/* =========================================================
   CLOSE CASE STUDY
   ========================================================= */

function closeProjectCaseStudy() {

    if (!caseStudyOverlay) {
        return;
    }

    caseStudyOverlay.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "case-study-open"
    );

}


/* =========================================================
   PROJECT NODE CLICK
   ========================================================= */

const projectNodes =
    document.querySelectorAll(
        ".project-node"
    );


projectNodes.forEach((node, index) => {

    node.addEventListener(
        "click",
        () => {

            openProjectCaseStudy(
                index
            );

        }
    );

});


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

if (caseStudyClose) {

    caseStudyClose.addEventListener(
        "click",
        closeProjectCaseStudy
    );

}


/* =========================================================
   CLICK OUTSIDE
   ========================================================= */

if (caseStudyOverlay) {

    caseStudyOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                caseStudyOverlay
            ) {

                closeProjectCaseStudy();

            }

        }
    );

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            caseStudyOverlay &&
            caseStudyOverlay.classList.contains(
                "active"
            )
        ) {

            closeProjectCaseStudy();

        }

    }
);


/* =========================================================
   BODY SCROLL LOCK
   ========================================================= */

const caseStudyBodyStyle =
    document.createElement("style");

caseStudyBodyStyle.textContent = `
    body.case-study-open {
        overflow: hidden;
    }
`;

document.head.appendChild(
    caseStudyBodyStyle
);
/* =========================================================
   CINEMATIC SCROLL SYSTEM
   Existing functionality preserved
   ========================================================= */

(function initCinematicScroll() {

    const sections = document.querySelectorAll(
        "main > section"
    );

    if (!sections.length) return;

    /*
     * Add reveal class to sections
     */

    sections.forEach((section) => {

        if (!section.classList.contains("hero")) {
            section.classList.add("cinematic-reveal");
        }

    });


    /*
     * Reveal sections when entering viewport
     */

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -8% 0px"
        }
    );


    sections.forEach((section) => {

        if (!section.classList.contains("hero")) {
            revealObserver.observe(section);
        }

    });


    /*
     * Active cinematic section
     */

    const activeObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    sections.forEach((section) => {
                        section.classList.remove(
                            "cinematic-active"
                        );
                    });

                    entry.target.classList.add(
                        "cinematic-active"
                    );

                }

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach((section) => {
        activeObserver.observe(section);
    });


    /*
     * Subtle scroll depth effect
     */

    let ticking = false;

    function updateScrollDepth() {

        const viewportCenter =
            window.innerHeight / 2;

        sections.forEach((section) => {

            const rect =
                section.getBoundingClientRect();

            const sectionCenter =
                rect.top + rect.height / 2;

            const distance =
                sectionCenter - viewportCenter;

            const normalized =
                Math.max(
                    -1,
                    Math.min(
                        1,
                        distance /
                        window.innerHeight
                    )
                );

            section.style.setProperty(
                "--scroll-depth",
                normalized.toFixed(3)
            );

        });

        ticking = false;

    }


    function requestScrollUpdate() {

        if (!ticking) {

            window.requestAnimationFrame(
                updateScrollDepth
            );

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        requestScrollUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestScrollUpdate
    );


    updateScrollDepth();

})();
/* =========================================================
   HERO CINEMATIC INTERACTION
   ========================================================= */

(function initHeroCinematicMotion() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const isMobile = () =>
        window.matchMedia("(max-width: 768px)").matches;


    /* Mouse depth */

    hero.addEventListener("mousemove", (event) => {

        if (isMobile()) return;

        const rect = hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;

        hero.style.setProperty(
            "--hero-mouse-x",
            `${x * 14}px`
        );

        hero.style.setProperty(
            "--hero-mouse-y",
            `${y * 10}px`
        );

    });


    /* Reset mouse */

    hero.addEventListener("mouseleave", () => {

        hero.style.setProperty(
            "--hero-mouse-x",
            "0px"
        );

        hero.style.setProperty(
            "--hero-mouse-y",
            "0px"
        );

    });


    /* Scroll depth */

    let ticking = false;

    function updateHeroScroll() {

        const rect =
            hero.getBoundingClientRect();

        const progress =
            Math.max(
                0,
                Math.min(
                    1,
                    -rect.top / window.innerHeight
                )
            );

        const offset =
            progress * -35;

        hero.style.setProperty(
            "--hero-scroll",
            `${offset}px`
        );

        ticking = false;

    }


    function requestHeroUpdate() {

        if (!ticking) {

            window.requestAnimationFrame(
                updateHeroScroll
            );

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        requestHeroUpdate,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        requestHeroUpdate
    );

    updateHeroScroll();

})();
/* =========================================================
   SKILLS CINEMATIC INTERACTION
   ========================================================= */

(function initSkillsInteraction() {

    const skills = document.querySelector(".skills");

    if (!skills) return;

    const nodes =
        skills.querySelectorAll(".skill-node");

    if (!nodes.length) return;

    const isMobile = () =>
        window.matchMedia("(max-width: 768px)").matches;


    skills.addEventListener("mousemove", (event) => {

        if (isMobile()) return;

        const rect =
            skills.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;

        skills.style.setProperty(
            "--skill-mouse-x",
            `${x * 5}px`
        );

        skills.style.setProperty(
            "--skill-mouse-y",
            `${y * 5}px`
        );

    });


    skills.addEventListener("mouseleave", () => {

        skills.style.setProperty(
            "--skill-mouse-x",
            "0px"
        );

        skills.style.setProperty(
            "--skill-mouse-y",
            "0px"
        );

    });


    /* Skill node hover state */

    nodes.forEach((node) => {

        node.addEventListener("mouseenter", () => {

            nodes.forEach((item) => {

                if (item !== node) {
                    item.style.opacity = "0.65";
                }

            });

        });


        node.addEventListener("mouseleave", () => {

            nodes.forEach((item) => {
                item.style.opacity = "";
            });

        });

    });

})();
/* =========================================================
   PROJECTS CINEMATIC REVEAL
   ========================================================= */

(function initProjectsCinematicReveal() {

    const projects =
        document.querySelector(".projects");

    if (!projects) return;

    const cards =
        projects.querySelectorAll(".project-card");

    if (!cards.length) return;

    cards.forEach((card) => {
        card.classList.add("cinematic-project");
    });


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-project-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -7% 0px"
            }
        );


    cards.forEach((card) => {
        observer.observe(card);
    });

})();
/* =========================================================
   EXPERIENCE CINEMATIC REVEAL
   ========================================================= */

(function initExperienceCinematicReveal() {

    const experience =
        document.querySelector(".experience");

    if (!experience) return;

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        experience.classList.add(
                            "experience-visible"
                        );

                        observer.unobserve(
                            experience
                        );

                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -8% 0px"
            }
        );

    observer.observe(experience);

})();
/* =========================================================
   CONTACT CINEMATIC REVEAL
   ========================================================= */

(function initContactCinematicReveal() {

    const contact =
        document.querySelector(".contact");

    if (!contact) return;

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        contact.classList.add(
                            "contact-visible"
                        );

                        observer.unobserve(contact);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
            }
        );

    observer.observe(contact);

})();
/* =========================================================
   THREE.JS + PAGE SCROLL SYNC
   ========================================================= */

(function initThreeScrollSync() {

  let ticking = false;

  function updateThreeScroll() {

    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    if (maxScroll <= 0) {
      setCinematicScroll(0);
      ticking = false;
      return;
    }

    const progress =
      window.scrollY / maxScroll;

    setCinematicScroll(progress);

    ticking = false;
  }

  function requestUpdate() {

    if (!ticking) {

      window.requestAnimationFrame(
        updateThreeScroll
      );

      ticking = true;
    }
  }

  window.addEventListener(
    "scroll",
    requestUpdate,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    requestUpdate
  );

  updateThreeScroll();

})();