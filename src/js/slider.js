const sliderLine = document.querySelector(".slider-line");
const items = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
let count = 0;
let width;

function resizeSlider() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * items.length + "px";
  items.forEach((item) => {
    item.style.width = width + "px";
  });
}

function activeDot(n) {
  for (dot of dots) {
    dot.classList.remove("slider__dot-active");
  }
  dots[n].classList.add("slider__dot-active");
}

function currentSlide() {
  scrollSlider();
  activeDot(count);
}

function prevSlide() {
  count--;
  if (count < 0) {
    count = items.length - 1;
  }
  currentSlide();
}

function nextSlide() {
  count++;
  if (count >= items.length) {
    count = 0;
  }
  currentSlide();
}

dots.forEach((dot, indexDot) => {
  dot.addEventListener("click", () => {
    count = indexDot;
    currentSlide();
  });
});

function scrollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

window.addEventListener("resize", resizeSlider);
resizeSlider();

document
  .querySelector(".slider__button-prev")
  .addEventListener("click", prevSlide);
document
  .querySelector(".slider__button-next")
  .addEventListener("click", nextSlide);