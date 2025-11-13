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


});
