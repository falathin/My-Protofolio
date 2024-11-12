    // Highlight active link based on scroll position
    document.addEventListener("scroll", function () {
        const navLinks = document.querySelectorAll(".nav-link");
        let scrollPos = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });