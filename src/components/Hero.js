import { Particles } from "./Particles.js";

export function Hero() {
    return `
        <section id="home" class="hero">

            ${Particles()}

            <div class="hero-bg"></div>

            <div class="hero-grid"></div>

            <div class="hero-glow hero-glow-one"></div>
            <div class="hero-glow hero-glow-two"></div>

            <div class="hero-content">

                <div class="hero-topline">
                    <span class="hero-topline-line"></span>
                    <span>FULL STACK DEVELOPER</span>
                    <span class="hero-topline-line"></span>
                </div>


                <span class="hero-badge">
                    <span class="status-dot"></span>
                    Available for Internship & Full Stack Projects
                </span>


                <div class="hero-intro">
                    <span>Hello, I'm</span>
                </div>


                <h1 class="hero-title">
                    Tejas
                    <span>Mane</span>
                </h1>


                <h2 class="typing">
                    Full Stack Developer
                </h2>


                <p class="hero-description">
                    I am Tejas Mane, an MCA graduate and passionate Full Stack Developer with expertise in designing and developing modern, scalable web applications. My core skills include ASP.NET Core MVC, C#, JavaScript, Python, Java, SQL and PostgreSQL.
                </p>

                <p class="hero-description hero-description-secondary">
                    I enjoy building secure backend systems, responsive user interfaces and database-driven applications that solve real-world problems. My projects, including a Hospital Management System and Student Management System, have strengthened my experience in full-stack development, database design and software architecture.
                </p>

                <p class="hero-description hero-description-secondary">
                    I am continuously learning new technologies and best practices to create high-quality software while improving my problem-solving and development skills.
                </p>


                <div class="hero-buttons">

                    <a
                        href="/resume.pdf"
                        class="btn-primary hero-btn"
                        download
                    >
                        <span>Download Resume</span>
                        <span class="btn-arrow">↗</span>
                    </a>

                    <a
                        href="#projects"
                        class="btn-secondary hero-btn"
                    >
                        <span>View Projects</span>
                        <span class="btn-arrow">↓</span>
                    </a>

                </div>


                <div class="hero-stats">

                    <div class="stat-card">
                        <div class="stat-icon">⌘</div>
                        <div class="stat-number">5<span>+</span></div>
                        <div class="stat-label">Projects</div>
                    </div>


                    <div class="stat-card">
                        <div class="stat-icon">◈</div>
                        <div class="stat-number">10<span>+</span></div>
                        <div class="stat-label">Technologies</div>
                    </div>


                    <div class="stat-card">
                        <div class="stat-icon">✦</div>
                        <div class="stat-number">4<span>+</span></div>
                        <div class="stat-label">Certificates</div>
                    </div>


                    <div class="stat-card">
                        <div class="stat-icon">◉</div>
                        <div class="stat-number">1<span>+</span></div>
                        <div class="stat-label">Internship</div>
                    </div>

                </div>


                <div class="hero-scroll">

                    <span class="hero-scroll-line"></span>

                    <span class="hero-scroll-text">
                        SCROLL TO EXPLORE
                    </span>

                    <span class="hero-scroll-arrow">
                        ↓
                    </span>

                </div>

            </div>

        </section>
    `;
}