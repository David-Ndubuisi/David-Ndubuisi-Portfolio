//Service boxes

document.addEventListener("DOMContentLoaded", () => {
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
});

//Smoothe Scrool

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
                console.log("Scrolling to:", targetId); // Debugging
            } else {
                console.error("Section not found:", targetId);
            }
        });
    });
});


//Menu & navigatiobn bar

document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function () {
        // Toggle active class for smooth slide-in & fade effect
        menu.classList.toggle("active");
        
        // Rotate the menu icon when active
        menuIcon.classList.toggle("bx-x");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});