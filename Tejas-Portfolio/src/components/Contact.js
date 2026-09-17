export function Contact() {
    return `
<section id="contact" class="contact">

    <div class="section-title">
        <span>CONTACT</span>
        <h2>Let's Build Something Amazing</h2>
    </div>

    <div class="contact-container">

        <div class="contact-info">

            <h3>Get In Touch</h3>

            <p>
                I am always open to internships, freelance opportunities,
                collaborations and full-time roles. Feel free to contact me.
            </p>

            <div class="contact-item">
                <h4>Email</h4>
                <a href="mailto:tejasm2810@gmail.com">
                    tejasm2810@gmail.com
                </a>
            </div>

            <div class="contact-item">
                <h4>Phone</h4>
                <a href="tel:+917498711950">
                    +91 74987 11950
                </a>
            </div>

            <div class="contact-item">
                <h4>Location</h4>
                <p>Maharashtra, India</p>
            </div>

            <div class="social-links">

                <a
                    href="https://github.com/Tejuu28"
                    target="_blank"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/tejas-prabhakar-mane/"
                    target="_blank"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:tejasm2810@gmail.com"
                >
                    Email
                </a>

            </div>

        </div>

        <div class="contact-form">

            <form>

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                >

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                >

                <input
                    type="text"
                    placeholder="Subject"
                >

                <textarea
                    rows="6"
                    placeholder="Write your message..."
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

            </form>

        </div>

    </div>

</section>
`;
}