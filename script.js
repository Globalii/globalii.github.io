// Display a welcome message
window.onload = function () {
    console.log("Welcome to Global Interpreting Innovations!");
};

// Add interactivity to a navigation menu and overlay menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const overlayMenu = document.getElementById("overlay-menu");

    // Hamburger menu functionality
    hamburgerBtn.addEventListener("click", function () {
        overlayMenu.classList.toggle("hidden");
        overlayMenu.classList.toggle("active");
        this.classList.toggle("active"); // Add/remove the "active" class to the hamburger button
        console.log("Hamburger menu toggled.");
    });

    // Close overlay menu when clicking outside or on links
    overlayMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "A" || event.target === overlayMenu) {
            overlayMenu.classList.add("hidden");
            overlayMenu.classList.remove("active");
            hamburgerBtn.classList.remove("active"); // Reset the hamburger button to default state
            console.log("Overlay menu closed.");
        }
    });
});
