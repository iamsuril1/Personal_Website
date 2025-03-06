document.addEventListener("DOMContentLoaded", function () {
    // Typed.js effect
    new Typed("#typed-text", {
        strings: ["Web Developer", "Web Designer", "SEO Expert"],
        typeSpeed: 60,
        backSpeed: 40,
        startDelay: 500,
        loop: true
    });

    // Section Fade-In on Scroll
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run initially in case sections are already in view

    // Smooth Scroll with Hash Update
    document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            history.pushState(null, null, `#${targetId}`);
        });
    });

    // Mobile Menu Toggle
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("show");
    });
});
