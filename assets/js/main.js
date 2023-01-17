/* Burger Menu Toggle */
var buttons = document.getElementsByClassName("toggleNav");
var nav = document.getElementById("nav");
var isVisible = false;

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if(isVisible) {
            nav.style.display = "none";
            isVisible = false;
        } else {
            nav.style.display = "flex";
            isVisible = true;
        }
    });
}

/* Carousel */
let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("touchstart", (e) => {
    pressed = true;
    startX = e.touches[0].clientX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("touchmove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.touches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;
});

sliderContainer.addEventListener("touchend", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});
