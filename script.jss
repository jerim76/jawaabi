// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");

}


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Jawaab Empowerment Initiative. " +
        "We will get back to you soon."
    );

    event.target.reset();

}


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= CLOSE MOBILE MENU =================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("show");

    });

});
