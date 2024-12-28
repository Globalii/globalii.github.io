// Display a welcome message
window.onload = function() {
    console.log("Welcome to Global Interpreting Innovations!");
};

// Add interactivity to a navigation menu (if needed)
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            alert(`You clicked on ${this.textContent}`);
        });
    });
});
