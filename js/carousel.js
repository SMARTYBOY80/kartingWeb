const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    currentSlide = slideIndex;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startCarousel() {
    showSlide(currentSlide);
    setInterval(nextSlide, 4000);
}

setTimeout(() => {
    const heroText = document.querySelector('.hero');
    heroText.style.opacity = 1; // Set the opacity to 1 to make the text appear
}, 1000);

startCarousel();
