import hospital from "../assets/images/projects/hospital.png";
import student from "../assets/images/projects/student.png";
import job from "../assets/images/projects/jobportal.png";
import exam from "../assets/images/projects/exam.png";
import college from "../assets/images/projects/college.png";

export function Projects() {
    return `
<section id="projects" class="projects constellation-projects">

    <div class="projects-header">
        <span class="projects-kicker">SELECTED WORK</span>

        <h2>
            Projects
            <span>Universe</span>
        </h2>

        <p>
            Explore my development work through an interactive
            collection of applications, platforms and digital experiences.
        </p>
    </div>


    <div class="project-constellation">

        <!-- CENTER -->

        <div class="constellation-center">

            <div class="center-orbit orbit-one"></div>
            <div class="center-orbit orbit-two"></div>

            <div class="center-core">
                <span class="core-small">MY</span>
                <strong>WORK</strong>
                <span class="core-line"></span>
                <span class="core-count">05 PROJECTS</span>
            </div>

        </div>


        <!-- PROJECT 01 -->

        <button
            class="project-node node-one active"
            type="button"
            data-project="hospital"
        >

            <div class="node-image">
                <img
                    src="${hospital}"
                    alt="Hospital Management System"
                    loading="lazy"
                />
                <span class="node-image-overlay"></span>
                <span class="node-image-arrow">↗</span>
            </div>

            <span class="node-number">01</span>

            <span class="node-dot"></span>

            <span class="node-label">
                <strong>Hospital Management</strong>
                <small>ASP.NET • C# • PostgreSQL</small>
            </span>

        </button>


        <!-- PROJECT 02 -->

        <button
            class="project-node node-two"
            type="button"
            data-project="student"
        >

            <div class="node-image">
                <img
                    src="${student}"
                    alt="Student Management System"
                    loading="lazy"
                />
                <span class="node-image-overlay"></span>
                <span class="node-image-arrow">↗</span>
            </div>

            <span class="node-number">02</span>

            <span class="node-dot"></span>

            <span class="node-label">
                <strong>Student Management</strong>
                <small>Node.js • JavaScript • SQLite</small>
            </span>

        </button>


        <!-- PROJECT 03 -->

        <button
            class="project-node node-three"
            type="button"
            data-project="job"
        >

            <div class="node-image">
                <img
                    src="${job}"
                    alt="Online Job Portal"
                    loading="lazy"
                />
                <span class="node-image-overlay"></span>
                <span class="node-image-arrow">↗</span>
            </div>

            <span class="node-number">03</span>

            <span class="node-dot"></span>

            <span class="node-label">
                <strong>Online Job Portal</strong>
                <small>.NET • SQL</small>
            </span>

        </button>


        <!-- PROJECT 04 -->

        <button
            class="project-node node-four"
            type="button"
            data-project="exam"
        >

            <div class="node-image">
                <img
                    src="${exam}"
                    alt="Online Examination System"
                    loading="lazy"
                />
                <span class="node-image-overlay"></span>
                <span class="node-image-arrow">↗</span>
            </div>

            <span class="node-number">04</span>

            <span class="node-dot"></span>

            <span class="node-label">
                <strong>Online Examination</strong>
                <small>.NET • SQL</small>
            </span>

        </button>


        <!-- PROJECT 05 -->

        <button
            class="project-node node-five"
            type="button"
            data-project="college"
        >

            <div class="node-image">
                <img
                    src="${college}"
                    alt="College Website"
                    loading="lazy"
                />
                <span class="node-image-overlay"></span>
                <span class="node-image-arrow">↗</span>
            </div>

            <span class="node-number">05</span>

            <span class="node-dot"></span>

            <span class="node-label">
                <strong>College Website</strong>
                <small>HTML • CSS • JavaScript</small>
            </span>

        </button>


        <!-- CONNECTION LINES -->

        <span class="connection connection-one"></span>
        <span class="connection connection-two"></span>
        <span class="connection connection-three"></span>
        <span class="connection connection-four"></span>
        <span class="connection connection-five"></span>


        <!-- PROJECT PREVIEW -->

        <div class="project-preview">

            <div class="preview-image">

                <img
                    id="project-preview-image"
                    src="${hospital}"
                    alt="Hospital Management System"
                />

                <div class="preview-overlay"></div>

                <span
                    class="preview-number"
                    id="project-preview-number"
                >
                    01
                </span>

            </div>


            <div class="preview-content">

                <span
                    class="preview-category"
                    id="project-preview-category"
                >
                    ENTERPRISE SYSTEM
                </span>

                <h3 id="project-preview-title">
                    Hospital Management System
                </h3>

                <p id="project-preview-description">
                    Enterprise healthcare management application
                    for managing patients, doctors and appointments.
                </p>

                <div
                    class="preview-tech"
                    id="project-preview-tech"
                >
                    <span>ASP.NET Core</span>
                    <span>C#</span>
                    <span>PostgreSQL</span>
                </div>

                <div class="preview-actions">

                    <a
                        href="#"
                        id="project-github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <span>↗</span>
                    </a>

                    <a
                        href="#"
                        id="project-live"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                        <span>↗</span>
                    </a>

                </div>

            </div>

        </div>

    </div>


    <div class="projects-bottom">

        <span>INTERACTIVE PROJECT MAP</span>

        <div class="project-progress">
            <span id="project-current">01</span>
            <i></i>
            <span>05</span>
        </div>

        <span>SELECT A PROJECT TO EXPLORE</span>

    </div>

</section>
`;
}