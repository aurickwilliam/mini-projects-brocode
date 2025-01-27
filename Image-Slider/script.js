const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const images = document.querySelectorAll("#slider-cont img");

let slideIndex = 0;
let intervalId = null;

const initializeSlider = () => {
    images[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
}

const showSlide = (index) => {
    if (index >= images.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = images.length - 1;
    }

    images.forEach(image => {
        image.classList.remove("displaySlide");
    });

    images[slideIndex].classList.add("displaySlide");
}

const prevSlide =  () => {
    slideIndex--;
    showSlide(slideIndex);
}

const nextSlide = () => {
    slideIndex++;
    showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);

nextBtn.addEventListener("click", nextSlide);


document.addEventListener("DOMContentLoaded", initializeSlider);