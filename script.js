const showNav = document.querySelector(".show-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

currentSlideId = 1;
sliderElement = document.getElementById("slider");
totalSlides = sliderElement.childElementCount;

function next() {
    if (currentSlideId < totalSlides) {
        currentSlideId ++;
        showSlide()
        
    }
        
}

function prev() {
    if (currentSlideId > 1) {
        currentSlideId--;
        showSlide()
    }
        
}

function showSlide(){
    slides = document.getElementById("slider").getElementsByTagName("li");
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideId === index+1){
            element.classList.remove("hidden")
        }else{
            element.classList.add("hidden")
        }
    }
}

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

