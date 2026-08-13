/* =========================================================
   GAME DAY VR
   JavaScript
========================================================= */


// =========================================================
// MOBILE MENU
// =========================================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuButton.textContent = "☰";
    });
});


// =========================================================
// BACK TO TOP
// =========================================================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backTop.classList.add("visible");
    } else {
        backTop.classList.remove("visible");
    }

});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".game-card, .feature-item, .media-card, .stat"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


// =========================================================
// PARALLAX EFFECT
// =========================================================

const heroBackground = document.querySelector(".hero-background");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (heroBackground) {
        heroBackground.style.transform =
            `translateY(${scrollPosition * 0.15}px)`;
    }

});


// =========================================================
// BUTTON RIPPLE
// =========================================================

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        const size = Math.max(
            rect.width,
            rect.height
        );

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,0.25)";
        ripple.style.pointerEvents = "none";

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        ripple.style.transform = "scale(0)";
        ripple.style.animation =
            "ripple-animation 0.6s ease-out";

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// =========================================================
// PAGE LOAD
// =========================================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "🎮 Game Day VR website loaded!"
    );

});
