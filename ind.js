const slider = document.querySelector('.slider'),
      arrowLeft = document.querySelector('.arrow-left'),
      arrowRight = document.querySelector('.arrow-right'),
      slides = document.querySelectorAll('.slider-image'),
      bottom = document.querySelector('.bottom');

let currentSlideIndex = 0;
const paginationCircles = [];
let sliderWidth = slider.clientWidth;

window.addEventListener('resize', () => {
    sliderWidth = slider.clientWidth;
    showslide();
});

function createPaginations() {
    const div = document.createElement('div');
    div.classList.add('pagination-circle');
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPaginations() {
    slides.forEach(createPaginations);
    paginationCircles[0].classList.add('activeslide');
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => changeslider(index));
    });
}

function addActiveslideClass() {
    paginationCircles[currentSlideIndex].classList.add('activeslide');
}

function removeActiveslideClass() {
    paginationCircles[currentSlideIndex].classList.remove('activeslide');
}

function changeslider(sliderIndex) {
    removeActiveslideClass();
    currentSlideIndex = sliderIndex;
    addActiveslideClass();
    showslide();
}

function showslide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
    slider.style.transition = `all 0.3s ease-in-out`;
}

function nextslide() {
    let newSliderIndex = currentSlideIndex + 1;
    if (newSliderIndex >= slides.length) {
        newSliderIndex = 0;
    }
    changeslider(newSliderIndex);
}

function prevslide() {
    let newSliderIndex = currentSlideIndex - 1;
    if (newSliderIndex < 0) {
        newSliderIndex = slides.length - 1;
    }
    changeslider(newSliderIndex);
}

addPaginations();
arrowLeft.addEventListener('click', prevslide);
arrowRight.addEventListener('click', nextslide);
