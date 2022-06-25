const header = document.querySelector(".header__menu");
const navIcon = document.querySelector(".nav-icon");
const menu = document.querySelector("header .header__menu .menu");
navIcon.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});
const sticky = header.offsetTop;
window.onscroll = () => {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    header.querySelector("nav").style.height = "40px";
    document.body.style.paddingTop = "80px";
    menu.style.top = "40px";
  } else {
    header.classList.remove("sticky");
    header.querySelector("nav").style.height = "80px";
    document.body.style.paddingTop = 0;
    menu.style.top = "80px";
  }
};
