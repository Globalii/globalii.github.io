// Display a welcome message
window.onload = function() {
    console.log("Welcome to Global Interpreting Innovations!");
};

// Add interactivity to a navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            console.log(`Navigating to ${this.textContent}`);
        });
    });
});

