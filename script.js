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
            nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        } else {
            nav.style.background = "#020617";
            nav.style.boxShadow = "none";
        }
    });

    /* =========================
       TYPING EFFECT (HERO TEXT)
    ========================== */

    const typingText = document.querySelector(".typing");

    if (typingText) {
        const words = ["Aspiring Web Developer", "Frontend Developer", "Programmer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 200);
            } else {
                setTimeout(typeEffect, isDeleting ? 60 : 100);
            }
        }

        typeEffect();
    }

    /* =========================
       PARTICLES.JS INITIALIZATION
    ========================== */

    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#38bdf8"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#38bdf8",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    /* =========================
       ACTIVE NAV LINK ON SCROLL
    ========================== */

    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav ul li a");
        
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* =========================
       PROJECT CARD ANIMATIONS
    ========================== */

    const projectCards = document.querySelectorAll(".project-card");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(card);
    });

});