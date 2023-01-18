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
});

sliderContainer.addEventListener("touchmove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.touches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
});

sliderContainer.addEventListener("touchend", () => {
    pressed = false;
});

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }

    let coffeeBig = document.querySelectorAll('.coffeeBig');
    coffeeBig.forEach(item => {
        if(item.getBoundingClientRect().left < outer.left ){
            item.classList.add('edge');
        }else{
            item.classList.remove('edge');
        }
    });

    let coffeeSmall = document.querySelectorAll('.coffeeSmall');
    coffeeSmall.forEach(item => {
        if(item.getBoundingClientRect().right > outer.right ){
            item.classList.add('edge');
        }else{
            item.classList.remove('edge');
        }
    });
};
