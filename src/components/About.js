import profile from "../assets/images/best.jpg";

export function About() {
  return `
<section id="about" class="about">

    <!-- SECTION TITLE -->
    <div class="section-title">

        <span>ABOUT ME</span>

        <h2>
            Building Modern Web Applications
            with Clean Code
        </h2>

    </div>


    <!-- MAIN ABOUT AREA -->
    <div class="about-container">


        <!-- PROFILE CARD -->
        <div class="profile-card">

            <div class="profile-image-wrap">

                <div class="profile-image-glow"></div>

                <img
                    src="${profile}"
                    class="profile-image"
                    alt="Tejas Mane"
                >

            </div>


            <div class="profile-info">

                <h3>
                    Tejas Mane
                </h3>

                <span class="profile-role">
                    Full Stack Developer
                </span>

                <div class="profile-line"></div>

                <span class="profile-status">
                    <i></i>
                    Available for Opportunities
                </span>

            </div>

        </div>


        <!-- ABOUT CONTENT -->
        <div class="about-content">

            <div class="about-eyebrow">

                <span></span>

                WHO I AM

            </div>


            <h2>

                MCA Graduate &

                <span>
                    Full Stack Developer
                </span>

            </h2>


            <p>
                Passionate Full Stack Developer specializing in
                ASP.NET Core, C#, JavaScript, PostgreSQL and modern
                web technologies.
            </p>


            <p>
                I enjoy developing scalable web applications,
                creating beautiful user interfaces and solving
                real-world business problems through technology.
            </p>


            <!-- TECHNOLOGIES -->
            <div class="skills-list">

                <span>ASP.NET Core MVC</span>

                <span>C#</span>

                <span>.NET</span>

                <span>JavaScript</span>

                <span>Python</span>

                <span>Java</span>

                <span>HTML</span>

                <span>CSS</span>

                <span>Node.js</span>

                <span>Express.js</span>

                <span>SQL</span>

                <span>PostgreSQL</span>

                <span>Android</span>

                <span>Git & GitHub</span>

            </div>


            <!-- BUTTONS -->
            <div class="about-buttons">

                <a
                    href="#projects"
                    class="btn-primary"
                >
                    <span>View Projects</span>
                    <span class="btn-arrow">↗</span>
                </a>


                <a
                    href="#contact"
                    class="btn-secondary"
                >
                    <span>Contact Me</span>
                    <span class="btn-arrow">→</span>
                </a>

            </div>

        </div>

    </div>


    <!-- CAREER SNAPSHOT -->
    <div class="career-snapshot">


        <div class="snapshot-item">

            <span class="snapshot-number">
                5<span>+</span>
            </span>

            <span class="snapshot-label">
                Projects
            </span>

        </div>


        <div class="snapshot-item">

            <span class="snapshot-number">
                10<span>+</span>
            </span>

            <span class="snapshot-label">
                Technologies
            </span>

        </div>


        <div class="snapshot-item">

            <span class="snapshot-number">
                1<span>+</span>
            </span>

            <span class="snapshot-label">
                Internship
            </span>

        </div>


        <div class="snapshot-item">

            <span class="snapshot-number">
                MCA
            </span>

            <span class="snapshot-label">
                Graduate
            </span>

        </div>


    </div>

<!-- =====================================================
     WHAT I DO
===================================================== -->

<div class="what-i-do">

    <div class="what-i-do-heading">

        <span>WHAT I DO</span>

        <h3>
            Turning Ideas Into
            <strong>Digital Experiences</strong>
        </h3>

    </div>


    <div class="what-i-do-grid">


        <!-- FRONTEND -->

        <div class="service-card">

            <div class="service-number">
                01
            </div>

            <div class="service-icon">
                &lt;/&gt;
            </div>

            <h4>
                Frontend Development
            </h4>

            <p>
                Building responsive, modern and user-friendly
                interfaces using HTML, CSS, JavaScript and
                modern web development practices.
            </p>

            <div class="service-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
            </div>

        </div>


        <!-- BACKEND -->

        <div class="service-card">

            <div class="service-number">
                02
            </div>

            <div class="service-icon">
                { }
            </div>

            <h4>
                Backend Development
            </h4>

            <p>
                Developing secure and scalable backend systems
                using C#, ASP.NET Core, .NET, Node.js and
                Express.js.
            </p>

            <div class="service-tech">
                <span>C#</span>
                <span>ASP.NET Core</span>
                <span>Node.js</span>
            </div>

        </div>


        <!-- DATABASE -->

        <div class="service-card">

            <div class="service-number">
                03
            </div>

            <div class="service-icon">
                DB
            </div>

            <h4>
                Database Development
            </h4>

            <p>
                Designing and managing database-driven
                applications using SQL, PostgreSQL and
                structured data solutions.
            </p>

            <div class="service-tech">
                <span>SQL</span>
                <span>PostgreSQL</span>
                <span>Database Design</span>
            </div>

        </div>


    </div>

</div>



</section>
`;
}