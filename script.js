// Display a welcome message
window.onload = function () {
    console.log("Welcome to Global Interpreting Innovations!");
};

// Add interactivity to the navigation menu and overlay menu
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const overlayMenu = document.getElementById("overlay-menu");

    // Menu button functionality
    menuBtn.addEventListener("click", function () {
        overlayMenu.classList.toggle("hidden");
        overlayMenu.classList.toggle("active");
        console.log("Menu button toggled.");
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        overlayMenu.classList.add("hidden");
        overlayMenu.classList.remove("active");
        console.log("Overlay menu closed via close button.");
    });
});
