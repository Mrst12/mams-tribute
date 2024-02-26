const showNav = document.querySelector(".show-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

closeNav.addEventListener("click", () => {
    nav.classList.remove("right-0")
    nav.classList.add("right-[-50%]");
    nav.classList.add("bg-background")
})

showNav.addEventListener("click", () => {
    nav.classList.add("right-0")
    nav.classList.remove("right-[-50%]");
    nav.classList.remove("bg-background")
    
})