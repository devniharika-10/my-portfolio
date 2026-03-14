// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       DARK / LIGHT THEME TOGGLE
    ========================== */

    const toggleBtn = document.getElementById("themeToggle");

    if (toggleBtn) {

        toggleBtn.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                toggleBtn.textContent = "☀️";
            } else {
                toggleBtn.textContent = "🌙";
            }

        });

    }


    /* =========================
       SMOOTH SCROLL NAVIGATION
    ========================== */

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {

            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });


    /* =========================
       NAVBAR COLOR CHANGE SCROLL
    ========================== */

    window.addEventListener("scroll", function () {

        const nav = document.querySelector("nav");

        if (window.scrollY > 50) {
            nav.style.background = "#020617";
        } else {
            nav.style.background = "#020617";
        }

    });


    /* =========================
       TYPING EFFECT (HERO TEXT)
    ========================== */

    const typingText = document.getElementById("typing");

    if (typingText) {

        const words = ["Web Developer", "Frontend Developer", "Programmer"];
        let wordIndex = 0;
        let charIndex = 0;

        function typeEffect() {

            if (charIndex < words[wordIndex].length) {

                typingText.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 100);

            } else {

                setTimeout(eraseEffect, 1500);

            }

        }

        function eraseEffect() {

            if (charIndex > 0) {

                typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseEffect, 60);

            } else {

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

                setTimeout(typeEffect, 200);

            }

        }

        typeEffect();
    }


    /* =========================
       CONTACT FORM MESSAGE
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Message sent successfully!");

            form.reset();

        });

    }

});