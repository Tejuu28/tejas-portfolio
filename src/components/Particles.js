export function Particles() {
    return `
    <div class="particles">

        ${Array.from({ length: 40 }, () => `
            <span class="particle"></span>
        `).join("")}

    </div>
    `;
}