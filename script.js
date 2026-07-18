// ===============================
// Easy Products
// script.js
// ===============================

// Search Apps

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const name = card.querySelector("h2").textContent.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});

// Feedback Form

const form = document.querySelector(".feedback form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your feedback has been received.");

    form.reset();

});

// Card Animation

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});

// Welcome Message

window.addEventListener("load", () => {

    console.log("Welcome to Easy Products!");

});

// Footer Year

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML = "© " + year + " Easy Products | Easy.Network.India";
