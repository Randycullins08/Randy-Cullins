const nav = document.getElementById("hamburger-menu");
const mobileDropDown = document.getElementById("mobile-nav");

nav.addEventListener("click", (e) => {
  mobileDropDown.classList.toggle("show");
});
