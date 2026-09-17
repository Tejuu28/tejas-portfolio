export function Navbar() {
  return `
    <header class="navbar" id="navbar">

      <div class="navbar-inner">

        <a href="#home" class="navbar-brand" aria-label="Tejas Mane Home">
          <div class="logo-mark">TM</div>

          <div class="brand-text">
            <div class="brand-name">TEJAS MANE</div>
            <div class="brand-role">FULLSTACK DEVELOPER</div>
          </div>
        </a>

        <nav class="nav-links">
          <a href="#home" class="nav-link active">
            <span class="nav-number">01</span>
            <span>Home</span>
          </a>

          <a href="#about" class="nav-link">
            <span class="nav-number">02</span>
            <span>About</span>
          </a>

          <a href="#skills" class="nav-link">
            <span class="nav-number">03</span>
            <span>Skills</span>
          </a>

          <a href="#projects" class="nav-link">
            <span class="nav-number">04</span>
            <span>Projects</span>
          </a>

          <a href="#contact" class="nav-link">
            <span class="nav-number">05</span>
            <span>Contact</span>
          </a>
        </nav>

        <button
          class="menu-btn"
          id="menu-btn"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div class="mobile-menu" id="mobile-menu">

        <nav class="mobile-nav-links">

          <a href="#home" class="mobile-nav-link active">
            <span>01</span>
            <strong>Home</strong>
          </a>

          <a href="#about" class="mobile-nav-link">
            <span>02</span>
            <strong>About</strong>
          </a>

          <a href="#skills" class="mobile-nav-link">
            <span>03</span>
            <strong>Skills</strong>
          </a>

          <a href="#projects" class="mobile-nav-link">
            <span>04</span>
            <strong>Projects</strong>
          </a>

          <a href="#contact" class="mobile-nav-link">
            <span>05</span>
            <strong>Contact</strong>
          </a>

        </nav>

        <div class="mobile-menu-footer">
          <span>TEJAS MANE</span>
          <span>WEB DEVELOPER</span>
        </div>

      </div>

    </header>
  `;
}