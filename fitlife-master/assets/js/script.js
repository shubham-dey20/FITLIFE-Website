'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");
  const signupLink = document.getElementById("signup-link");
  const loginLink = document.getElementById("login-link");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for close button
  closeBtn.addEventListener("click", closeModal);

  // Event listener for signup link
  signupLink.addEventListener("click", function() {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  // Event listener for login link
  loginLink.addEventListener("click", function() {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });
});
