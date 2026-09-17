import hospital from "../assets/images/projects/hospital.png";
import student from "../assets/images/projects/student.png";
import job from "../assets/images/projects/jobportal.png";
import exam from "../assets/images/projects/exam.png";
import college from "../assets/images/projects/college.png";

export function Projects() {
  return `
<section id="projects" class="projects">

    <div class="section-title">
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
    </div>

    <div class="projects-grid">

        <!-- Hospital -->
        <div class="project-card featured">

            <div class="project-image">
                <img src="${hospital}" alt="Hospital Management System">
            </div>

            <div class="project-content">

                <h3>Hospital Management System</h3>

                <p>
                    Enterprise Hospital Management System developed using
                    ASP.NET Core MVC, C#, Entity Framework Core and PostgreSQL.
                    Includes Patient, Doctor and Appointment Management with
                    secure CRUD operations.
                </p>

                <div class="project-tech">
                    <span>ASP.NET Core</span>
                    <span>C#</span>
                    <span>EF Core</span>
                    <span>PostgreSQL</span>
                </div>

                <div class="project-links">
                    <a href="#" target="_blank">GitHub</a>
                    <a href="#" target="_blank">Live Demo</a>
                </div>

            </div>

        </div>

        <!-- Student -->

        <div class="project-card">

            <div class="project-image">
                <img src="${student}" alt="Student Management System">
            </div>

            <div class="project-content">

                <h3>Student Management System</h3>

                <p>
                    Student records management system with admissions,
                    attendance, marks and reports.
                </p>

                <div class="project-tech">
                    <span>Node.js</span>
                    <span>JavaScript</span>
                    <span>SQLite</span>
                </div>

                <div class="project-links">
                    <a href="#" target="_blank">GitHub</a>
                </div>

            </div>

        </div>

        <!-- Job Portal -->

        <div class="project-card">

            <div class="project-image">
                <img src="${job}" alt="Online Job Portal">
            </div>

            <div class="project-content">

                <h3>Online Job Portal</h3>

                <p>
                    Job portal connecting recruiters and job seekers with
                    profile management and job applications.
                </p>

                <div class="project-tech">
                    <span>.NET</span>
                    <span>SQL</span>
                </div>

                <div class="project-links">
                    <a href="#" target="_blank">GitHub</a>
                </div>

            </div>

        </div>

        <!-- Exam -->

        <div class="project-card">

            <div class="project-image">
                <img src="${exam}" alt="Online Examination System">
            </div>

            <div class="project-content">

                <h3>Online Examination System</h3>

                <p>
                    Secure examination platform with timer,
                    automatic evaluation and result generation.
                </p>

                <div class="project-tech">
                    <span>.NET</span>
                    <span>SQL</span>
                </div>

                <div class="project-links">
                    <a href="#" target="_blank">GitHub</a>
                </div>

            </div>

        </div>

        <!-- College -->

        <div class="project-card">

            <div class="project-image">
                <img src="${college}" alt="College Website">
            </div>

            <div class="project-content">

                <h3>College Website</h3>

                <p>
                    Responsive college website with modern UI,
                    course information and faculty details.
                </p>

                <div class="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                </div>

                <div class="project-links">
                    <a href="#" target="_blank">GitHub</a>
                    <a href="#" target="_blank">Live Site</a>
                </div>

            </div>

        </div>

    </div>

</section>
`;
}