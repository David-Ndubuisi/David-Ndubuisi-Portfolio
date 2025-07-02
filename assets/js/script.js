document.addEventListener("DOMContentLoaded", function () {
  // 1. Service Boxes Animation
  const serviceBoxes = document.querySelectorAll(".service_box");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });
  serviceBoxes.forEach(box => observer.observe(box));

  // 2. Smooth Scroll Navigation
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

  // 3. Toggle Menu
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  // 4. Active Nav Highlight
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
