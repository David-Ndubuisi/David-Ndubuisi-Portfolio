document.addEventListener("DOMContentLoaded", function () {
  // 1. Service Boxes Animation
  const serviceBoxes = document.querySelectorAll(".service_box");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      eduObserver.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });
  serviceBoxes.forEach(box => observer.observe(box));
    
    // 2. Education Timeline Animation (Animate Once)
const timelineItems = document.querySelectorAll(".timeline-item");

const eduObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      eduObserver.unobserve(entry.target); // Stop observing after animation
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => eduObserver.observe(item));


  // 3. Smooth Scroll Navigation
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolling to:", targetId);
      } else {
        console.error("Section not found:", targetId);
      }
    });
  });

  // 4. Toggle Menu
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  // 5. Active Nav Highlight
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
    
    // === TESTIMONIAL TAP TOGGLE (Desktop + Mobile) ===
const testimonials = document.querySelectorAll(".testimonial-item");

// Toggle open/close on click
testimonials.forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to window
    // Close other testimonials
    testimonials.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });
    // Toggle the clicked one
    item.classList.toggle("active");
  });
});

// Close all if clicking outside any testimonial
window.addEventListener("click", () => {
  testimonials.forEach(item => item.classList.remove("active"));
});

    // ===== CONTACT INPUT ANIMATION (Opens Once When In View) =====
const contactInputs = document.querySelectorAll(".input-box input, .input-group2 textarea");

const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            contactObserver.unobserve(entry.target); // animate once
        }
    });
}, { threshold: 0.2 });

contactInputs.forEach(el => contactObserver.observe(el));
    
    // ===== CUSTOM CURSOR =====
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// ===== SMOOTH LAG CURSOR =====
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let speed = 0.15;  // Smaller = more lag, bigger = less lag

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;

    requestAnimationFrame(animateCursor);
}
animateCursor();


// Elements that trigger the inverted hover effect
const hoverTargets = document.querySelectorAll(
    "a, button, .btn, input, textarea, .service_box, .testimonial-item, .timeline-content"
);

hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("active"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// ===== PRELOADER =====
let count = 0;
let percentage = document.querySelector(".loader-percentage");
let bar = document.querySelector(".loader-bar span");

let loading = setInterval(() => {
    if (count >= 100) {
        clearInterval(loading);

        document.body.classList.add("loaded");

        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 800);

    } else {
        count++;
        percentage.textContent = count + "%";
    }
}, 22); // speed of loading


});
