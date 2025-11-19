const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        header.classList.add("scrolled")
    } 
    else {
        header.classList.remove("scrolled");
    }
})

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
