export function Contact() {
    return `
<section id="contact" class="contact">

    <div class="contact-orb contact-orb-one"></div>
    <div class="contact-orb contact-orb-two"></div>

    <div class="contact-grid"></div>

    <div class="contact-container">


        <!-- HEADER -->

        <div class="contact-hero">

            <div class="contact-label">
                <span class="contact-label-dot"></span>
                GET IN TOUCH
            </div>

            <h2>
                Let's Build
                <span>Something Great.</span>
            </h2>

            <p>
                Have a project, internship opportunity or an idea?
                Let's connect and turn your vision into a digital experience.
            </p>

        </div>


        <!-- MAIN CONTENT -->

        <div class="contact-content">


            <!-- LEFT -->

            <div class="contact-left">

                <div class="contact-card contact-card-main">

                    <div class="contact-card-top">

                        <span>01</span>

                        <span>CONTACT DETAILS</span>

                    </div>


                    <h3>
                        Start a
                        <strong>Conversation</strong>
                    </h3>


                    <p>
                        I'm open to internships, freelance work,
                        collaborations and software development opportunities.
                    </p>


                    <div class="contact-details">


                        <a
                            href="mailto:tejasm2810@gmail.com"
                            class="contact-detail"
                        >

                            <div class="detail-icon">
                                @
                            </div>

                            <div class="detail-content">
                                <span>Email</span>
                                <strong>
                                    tejasm2810@gmail.com
                                </strong>
                            </div>

                            <span class="detail-arrow">↗</span>

                        </a>


                        <a
                            href="tel:+917498711950"
                            class="contact-detail"
                        >

                            <div class="detail-icon">
                                ☎
                            </div>

                            <div class="detail-content">
                                <span>Phone</span>
                                <strong>
                                    +91 74987 11950
                                </strong>
                            </div>

                            <span class="detail-arrow">↗</span>

                        </a>


                        <div class="contact-detail">

                            <div class="detail-icon">
                                ●
                            </div>

                            <div class="detail-content">
                                <span>Location</span>
                                <strong>
                                    Kaegaon, Maharashtra, India
                                </strong>
                            </div>

                        </div>


                    </div>

                </div>


                <div class="contact-social-grid">

                    <a
                        href="https://github.com/Tejuu28"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-card"
                    >

                        <span class="social-number">01</span>

                        <div>
                            <strong>GitHub</strong>
                            <small>@Tejuu28</small>
                        </div>

                        <span class="social-arrow">↗</span>

                    </a>


                    <a
                        href="https://www.linkedin.com/in/tejas-prabhakar-mane/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-card"
                    >

                        <span class="social-number">02</span>

                        <div>
                            <strong>LinkedIn</strong>
                            <small>Connect with me</small>
                        </div>

                        <span class="social-arrow">↗</span>

                    </a>

                </div>

            </div>


            <!-- RIGHT FORM -->

            <div class="contact-form-card">

                <div class="form-card-header">

                    <div>

                        <span class="form-number">
                            02
                        </span>

                        <span class="form-label">
                            SEND A MESSAGE
                        </span>

                    </div>

                    <span class="form-status">
                        AVAILABLE
                    </span>

                </div>


                <h3>
                    Tell me about
                    <span>your project.</span>
                </h3>


                <form class="contact-form">


                    <div class="contact-input-group">

                        <label for="contact-name">
                            YOUR NAME
                        </label>

                        <input
                            id="contact-name"
                            type="text"
                            placeholder="Enter your name"
                            required
                        >

                    </div>


                    <div class="contact-input-group">

                        <label for="contact-email">
                            EMAIL ADDRESS
                        </label>

                        <input
                            id="contact-email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>


                    <div class="contact-input-group">

                        <label for="contact-subject">
                            SUBJECT
                        </label>

                        <input
                            id="contact-subject"
                            type="text"
                            placeholder="What would you like to discuss?"
                        >

                    </div>


                    <div class="contact-input-group">

                        <label for="contact-message">
                            MESSAGE
                        </label>

                        <textarea
                            id="contact-message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                    </div>


                    <button
                        type="submit"
                        class="contact-submit"
                    >

                        <span>
                            Send Message
                        </span>

                        <strong>
                            ↗
                        </strong>

                    </button>


                </form>

            </div>

        </div>


        <!-- BOTTOM -->

        <div class="contact-bottom">

            <div class="contact-bottom-left">
                <span>TEJAS MANE</span>
                <span>FULL STACK DEVELOPER</span>
            </div>

            <div class="contact-bottom-center">
                LET'S CREATE SOMETHING MEANINGFUL
            </div>

            <div class="contact-bottom-right">
                2026
            </div>

        </div>

    </div>

</section>
`;
}