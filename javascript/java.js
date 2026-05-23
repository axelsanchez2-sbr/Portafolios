document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const navLinks = nav.querySelectorAll("a");
 
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});