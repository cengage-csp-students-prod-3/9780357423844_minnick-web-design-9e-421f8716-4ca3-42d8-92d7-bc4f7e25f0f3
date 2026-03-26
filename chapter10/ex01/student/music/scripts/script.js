/*
 Student Name:Aedin Richardson
 File Name: script.js
 Date: 03/26/2026
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
		} else {
		    menu.style.display = "block";
		}
}