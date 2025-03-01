// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Initialize Type.js effect for hero section
    var typed = new Typed("#typed-text", {
        strings: ["Web Developer", "Web Designer", "Content Writer"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // Logo Animation Effect on Load
    const logo = document.querySelector(".logo img");
    if (logo) {
        logo.style.opacity = "0";
        logo.style.transform = "scale(0.5)";

        setTimeout(() => {
            logo.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
            logo.style.opacity = "1";
            logo.style.transform = "scale(1)";
        }, 300);
    }

    // Smooth Scroll for Navbar Links
    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

});
