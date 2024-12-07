let currentIndex = 0;
const images = document.querySelectorAll('.img-slider img');
const totalImages = images.length;

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.img-slider').style.transform = `translateX(${offset}%)`;
}