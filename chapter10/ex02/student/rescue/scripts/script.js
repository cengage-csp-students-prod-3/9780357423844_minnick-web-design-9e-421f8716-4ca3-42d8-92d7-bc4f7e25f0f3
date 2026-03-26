/*
 Student Name:Aedin Richardson
 File Name: scripts.js
 Date: 03/26/2026
 */

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

 //Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
		var menuicon = document.getElementById("icon");
		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
				menuicon.style.color = "#2a1f14";
		} else {
		    navlinks.style.display = "block";
				menuicon.style.color = "#f6eee4";
		}
}

function ans1() {
    heading.textContent = "Is it an orphan?";
    answer.textContent = "If an animal is alone, then it may be, but the best practice would be to stay away in case the parent is still around.";
}

function ans2() {
    heading.textContent = "How can I tell if an animal has rabies?";
    answer.textContent = "Stand far away for a moment and observe the animal. If it is foaming from the mouth or is acting slightly crazy or aggressive, stay back!";
}

function ans3() {
    heading.textContent = "I found a baby bird that fell from its nest. Will the parents orphan it if I touch it?";
    answer.textContent = "Yes, birds can smell the scent of another creature if it has touched their child and will orphan it.";
}

function ans4() {
    heading.textContent = "How can I volunteer?";
    answer.textContent = "Call or text us today using our contact page!";
}