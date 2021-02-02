$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-wrapper");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const burger = document.querySelector(".burger");
const drawer = document.querySelector(".menu-drawer");
const closeBtn = document.querySelector(".close-btn");
const navOverlay = document.querySelector(".nav-overlay");
burger.addEventListener("click", () => {
  drawer.classList.toggle("open");
  navOverlay.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  if (drawer.classList.contains("open")) {
    drawer.classList.remove("open");
    navOverlay.classList.remove("show");
  }
});
document.addEventListener("click", (e) => {
  if (e.target.className.includes("show")) {
    drawer.classList.remove("open");
    navOverlay.classList.remove("show");
  }
});
