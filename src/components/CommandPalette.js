export function CommandPalette() {
    return `
        <div class="command-overlay" id="command-overlay">

            <div class="command-palette" id="command-palette">

                <div class="command-header">

                    <div class="command-brand">
                        <span class="command-brand-dot"></span>

                        <div>
                            <strong>TEJAS MANE</strong>
                            <small>DEVELOPER COMMAND CENTER</small>
                        </div>
                    </div>

                    <button
                        class="command-close"
                        id="command-close"
                        type="button"
                        aria-label="Close command palette"
                    >
                        ESC
                    </button>

                </div>


                <div class="command-search">

                    <span class="command-search-icon">⌕</span>

                    <input
                        type="text"
                        id="command-search-input"
                        placeholder="Search commands..."
                        autocomplete="off"
                    >

                    <span class="command-shortcut">CTRL K</span>

                </div>


                <div class="command-section">

                    <span class="command-section-title">
                        NAVIGATION
                    </span>

                    <button class="command-item" data-command="home">
                        <span class="command-number">01</span>
                        <span class="command-icon">⌂</span>

                        <span class="command-info">
                            <strong>Go to Home</strong>
                            <small>Open homepage</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>


                    <button class="command-item" data-command="about">
                        <span class="command-number">02</span>
                        <span class="command-icon">◎</span>

                        <span class="command-info">
                            <strong>About Me</strong>
                            <small>View developer profile</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>


                    <button class="command-item" data-command="skills">
                        <span class="command-number">03</span>
                        <span class="command-icon">◇</span>

                        <span class="command-info">
                            <strong>Skills</strong>
                            <small>Explore technical expertise</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>


                    <button class="command-item" data-command="projects">
                        <span class="command-number">04</span>
                        <span class="command-icon">◈</span>

                        <span class="command-info">
                            <strong>Projects</strong>
                            <small>View selected work</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>


                    <button class="command-item" data-command="experience">
                        <span class="command-number">05</span>
                        <span class="command-icon">◌</span>

                        <span class="command-info">
                            <strong>Experience</strong>
                            <small>View professional experience</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>


                    <button class="command-item" data-command="certificates">
                        <span class="command-number">06</span>
                        <span class="command-icon">✦</span>

                        <span class="command-info">
                            <strong>Certificates</strong>
                            <small>View credentials</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>


                    <button class="command-item" data-command="contact">
                        <span class="command-number">07</span>
                        <span class="command-icon">@</span>

                        <span class="command-info">
                            <strong>Contact</strong>
                            <small>Start a conversation</small>
                        </span>

                        <span class="command-arrow">↗</span>
                    </button>

                </div>


                <div class="command-section">

                    <span class="command-section-title">
                        ACTIONS
                    </span>


                    <button class="command-item" data-command="resume">

                        <span class="command-number">08</span>
                        <span class="command-icon">↓</span>

                        <span class="command-info">
                            <strong>Download Resume</strong>
                            <small>Download my resume</small>
                        </span>

                        <span class="command-arrow">↗</span>

                    </button>


                    <button class="command-item" data-command="github">

                        <span class="command-number">09</span>
                        <span class="command-icon">◉</span>

                        <span class="command-info">
                            <strong>GitHub</strong>
                            <small>Open GitHub profile</small>
                        </span>

                        <span class="command-arrow">↗</span>

                    </button>


                    <button class="command-item" data-command="linkedin">

                        <span class="command-number">10</span>
                        <span class="command-icon">in</span>

                        <span class="command-info">
                            <strong>LinkedIn</strong>
                            <small>Connect with me</small>
                        </span>

                        <span class="command-arrow">↗</span>

                    </button>

                </div>


                <div class="command-footer">

                    <span>
                        <kbd>↑</kbd>
                        <kbd>↓</kbd>
                        Navigate
                    </span>

                    <span>
                        <kbd>ENTER</kbd>
                        Select
                    </span>

                    <span>
                        <kbd>ESC</kbd>
                        Close
                    </span>

                </div>

            </div>

        </div>
    `;
}