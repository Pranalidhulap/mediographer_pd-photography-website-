/* =========================================
   WELCOME SCREEN
========================================= */

function enterWebsite() {

    const nameInput = document.getElementById("visitorName");

    const name = nameInput.value.trim();

    const error = document.getElementById("nameError");

    if (name === "") {

        error.textContent = "Please enter your name.";

        nameInput.focus();

        return;
    }

    error.textContent = "";

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const mainWebsite =
        document.getElementById("mainWebsite");

    const greeting =
        document.getElementById("personalGreeting");


    /*
        Create personalized greeting
    */

    greeting.innerHTML =
        `Hello <strong>${escapeHTML(name)}</strong> 👋
        Welcome to our photography studio.`;



    /*
        Hide welcome screen
    */

    welcomeScreen.style.opacity = "0";

    welcomeScreen.style.transition = "opacity 0.8s ease";


    setTimeout(() => {

        welcomeScreen.style.display = "none";

        mainWebsite.classList.remove("hidden");

        window.scrollTo(0, 0);

    }, 800);

}


/* =========================================
   ENTER KEY SUPPORT
========================================= */

document
    .getElementById("visitorName")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            enterWebsite();

        }

    });


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


/* =========================================
   PORTFOLIO FILTER
========================================= */

function filterGallery(category, button) {

    const items =
        document.querySelectorAll(".gallery-item");

    const buttons =
        document.querySelectorAll(".filter-btn");


    /*
        Remove active class
        from all buttons
    */

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    /*
        Add active class
        to clicked button
    */

    button.classList.add("active");


    /*
        Show / hide images
    */

    items.forEach(item => {

        if (
            category === "all" ||
            item.classList.contains(category)
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


/* =========================================
   CONTACT FORM
========================================= */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("clientName").value;

        const email =
            document.getElementById("clientEmail").value;

        const service =
            document.getElementById("serviceType").value;

        const message =
            document.getElementById("message").value;


        const formMessage =
            document.getElementById("formMessage");


        if (!name || !email) {

            formMessage.textContent =
                "Please fill in your name and email.";

            return;

        }


        /*
            Demo submission

            For a real business website,
            connect this form to:
            - Formspree
            - EmailJS
            - Backend API
            - WhatsApp
        */

        formMessage.innerHTML =
            `Thank you, <strong>${escapeHTML(name)}</strong>!
            We received your enquiry
            ${service ? "for " + escapeHTML(service) : ""}.
            We'll get back to you soon.`;



        /*
            Clear form
        */

        this.reset();

    });


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(10,10,10,0.95)";

    } else {

        navbar.style.background =
            "rgba(10,10,10,0.75)";

    }

}); 