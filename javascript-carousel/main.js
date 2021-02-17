var $next = document.querySelector('.next');
var $previous = document.querySelector('.previous');
// var $carouselImages = document.querySelector('.carousel');
var $currentImage = document.querySelector('.first');

var clickCounter = 0;
var clickBack = 0;

$next.addEventListener('click', function (event) {
  clickCounter++;
  if (clickCounter > 0 && clickCounter <= 1) {
    $currentImage.setAttribute('src', './images/004.png');
  } else if (clickCounter > 1 && clickCounter <= 2) {
    $currentImage.setAttribute('src', './images/007.png');
  } else if (clickCounter > 2 && clickCounter <= 3) {
    $currentImage.setAttribute('src', './images/025.png');
  } else if (clickCounter > 3 && clickCounter <= 4) {
    $currentImage.setAttribute('src', './images/039.png');
  } else {
    $currentImage.setAttribute('src', './images/001.png');
  }
});

$previous.addEventListener('click', function (event) {
  clickBack++;
  if (clickBack > 0 && clickBack <= 1) {
    $currentImage.setAttribute('src', './images/039.png');
  } else if (clickBack > 1 && clickBack <= 2) {
    $currentImage.setAttribute('src', './images/025.png');
  } else if (clickBack > 2 && clickBack <= 3) {
    $currentImage.setAttribute('src', './images/007.png');
  } else if (clickBack > 3 && clickBack <= 4) {
    $currentImage.setAttribute('src', './images/004.png');
  } else {
    $currentImage.setAttribute('src', './images/001.png');
  }
});
