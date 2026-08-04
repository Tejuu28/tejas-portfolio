import { Particles } from "./Particles.js";
export function Hero() {
    return `
<section id="home" class="hero">
       ${Particles()}

    <div class="hero-bg"></div>

    <div class="hero-content">

        <span class="hero-badge">
            🚀 Available for Internship & Full Stack Projects
        </span>

        <h3>Hello, I'm</h3>

        <h1>
            Tejas <span>Mane</span>
        </h1>

        <h2 class="typing">
            Full Stack Developer
        </h2>

        <p>
            I am Tejas Mane, an MCA graduate and passionate Full Stack Developer with expertise in designing and developing modern, scalable web applications. My core skills include ASP.NET Core MVC, C#, JavaScript, Python, Java, SQL and PostgreSQL.

I enjoy building secure backend systems, responsive user interfaces and database-driven applications that solve real-world problems. My projects, including a Hospital Management System and Student Management System, have strengthened my experience in full-stack development, database design and software architecture.

I am continuously learning new technologies and best practices to create high-quality software while improving my problem-solving and development skills.
        </p>

        <div class="hero-buttons">

            <a href="/resume.pdf" class="btn-primary" download>
                Download Resume
            </a>

            <a href="#projects" class="btn-secondary">
                View Projects
            </a>

       <div class="hero-stats">

     <div class="stat-card">
        💻
        <h2>5+</h2>
        <p>Projects</p>
    </div>

    <div>
        💻
        <h2>10+</h2>
        <p>Technologies</p>
    </div>

    <div>
        🏆
        <h2>4+</h2>
        <p>Certificates</p>
    </div>

    <div>
         💼
        <h2>1+</h2>
        <p>Internship</p>
    </div>

    </div>

      <div>
    
            </div>

        </div>

    </div>

</section>
`;
}