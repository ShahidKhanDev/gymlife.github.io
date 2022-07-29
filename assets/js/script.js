"use strict";

// add event on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// mobile menu toggler
let mobileMenu = document.querySelector(".mobile-menu");
let menuBtn = document.querySelector(".menu #open-nav");
let closeMenuBtn = document.querySelector(".close #close-nav");
let searchBtn2 = document.querySelector("#search-btn-2");
let navbarLinks = document.querySelectorAll(".navbar-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.remove("active");
  });
  link.addEventListener("click", (e) => {
    navbarLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});

const openMenu = function () {
  mobileMenu.classList.add("active");
};

const closeMenu = function () {
  mobileMenu.classList.remove("active");
};

menuBtn.addEventListener("click", () => {
  openMenu();
});

closeMenuBtn.addEventListener("click", () => {
  closeMenu();
});

addEventOnElem(navbarLinks, "click", closeMenu);

searchBtn2.onclick = function () {
  searchForm.classList.add("active");
  closeMenuBtn.click();
};

// Search form toggler
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");
let closeSearchBtn = document.querySelector("#close-search-form");

searchBtn.onclick = function () {
  searchForm.classList.add("active");
};

closeSearchBtn.onclick = function () {
  searchForm.classList.remove("active");
  mobileMenu.classList.add("active");
};

// hero slides
let slides = document.querySelectorAll(".home .slide-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// show/hide Header on scroll
let header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY > 90) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.onload = function () {
  if (window.scrollY > 90) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
