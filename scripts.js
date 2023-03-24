let slideIndex = 1;

currentSlide(slideIndex);

function numberSlides(n) {
  currentSlide((slideIndex = slideIndex + n));
}

function currentSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
}
