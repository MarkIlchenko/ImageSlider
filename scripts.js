const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove("active");
    slides[slideIndex].classList.add("active");
    currentSlide = slideIndex;
    
    if (currentSlide === 0) {
        prevBtn.classList.add("hide-btn");
    } else {
        prevBtn.classList.remove("hide-btn");
    }
    
    if (currentSlide === slides.length - 1) {
        nextBtn.classList.add("hide-btn");
    } else {
        nextBtn.classList.remove("hide-btn");
    }
}

prevBtn.addEventListener("click", function() {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", function() {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);
