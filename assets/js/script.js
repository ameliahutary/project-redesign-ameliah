// script.js

document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.querySelector(".search-btn");
    var searchBox = document.querySelector(".search-box");

    searchIcon.addEventListener("click", function() {
        if (searchBox.style.display === "none") {
            searchBox.style.display = "block";
        } else {
            searchBox.style.display = "none";
        }
    });
});
