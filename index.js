"use strict";
function windowLoaded() {
  console.log("Hello world.");
}

const aboutBtn = document.querySelector(".about-btn");
const temBtn = document.querySelector(".team-btn");
const contactBtn = document.querySelector(".contact-btn");
const navCheckbox = document.querySelector(".nav-checkbox");

function closeMobileNav() {
  if (navCheckbox.checked == true) {
    navCheckbox.checked = false;
  }
}

aboutBtn.addEventListener("click", closeMobileNav);
temBtn.addEventListener("click", closeMobileNav);
contactBtn.addEventListener("click", closeMobileNav);
