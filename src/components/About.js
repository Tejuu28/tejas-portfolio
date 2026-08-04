import profile from "../assets/images/best.jpg";

export function About() {
  return `
<section id="about" class="about">

    <div class="section-title">
        <span>ABOUT ME</span>
        <h2>Building Modern Web Applications with Clean Code</h2>
    </div>

    <div class="about-container">

        <div class="profile-card">

            <img src="${profile}" class="profile-image" alt="Tejas Mane">

            <h3>Tejas Mane</h3>

            <span>Full Stack Developer</span>

        </div>

        <div class="about-content">

            <h2>MCA Graduate & Full Stack Developer</h2>

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

            <div class="skills-list">
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

            </div>

            <div class="about-buttons">

                <a href="#projects" class="btn-primary">
                    View Projects
                </a>

                <a href="#contact" class="btn-secondary">
                    Contact Me
                </a>

            </div>

        </div>

    </div>

</section>
`;
}