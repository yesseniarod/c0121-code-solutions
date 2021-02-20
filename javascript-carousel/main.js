var $next = document.querySelector('.next');
var $previous = document.querySelector('.previous');
var $currentImage = document.querySelector('.first');
var $radio1 = document.querySelector('.dot1');
var $radio2 = document.querySelector('.dot2');
var $radio3 = document.querySelector('.dot3');
var $radio4 = document.querySelector('.dot4');
var $radio5 = document.querySelector('.dot5');

var clickCounter = 0;
var clickBack = 0;

$next.addEventListener('click', function (event) {
  clickCounter++;
  if (clickCounter === 1) {
    $currentImage.setAttribute('src', './images/004.png');
  } else if (clickCounter === 2) {
    $currentImage.setAttribute('src', './images/007.png');
  } else if (clickCounter === 3) {
    $currentImage.setAttribute('src', './images/025.png');
  } else if (clickCounter === 4) {
    $currentImage.setAttribute('src', './images/039.png');
  } else {
    $currentImage.setAttribute('src', './images/001.png');
  }
  changeImage();
});

$previous.addEventListener('click', function (event) {
  clickBack++;
  if (clickBack === 1) {
    $currentImage.setAttribute('src', './images/039.png');
  } else if (clickBack === 2) {
    $currentImage.setAttribute('src', './images/025.png');
  } else if (clickBack === 3) {
    $currentImage.setAttribute('src', './images/007.png');
  } else if (clickBack === 4) {
    $currentImage.setAttribute('src', './images/004.png');
  } else {
    $currentImage.setAttribute('src', './images/001.png');
  }
});

$radio1.addEventListener('click', function (event) {
  $currentImage.setAttribute('src', './images/001.png');
});

$radio2.addEventListener('click', function (event) {
  $currentImage.setAttribute('src', './images/004.png');
});
$radio3.addEventListener('click', function (event) {
  $currentImage.setAttribute('src', './images/007.png');
});
$radio4.addEventListener('click', function (event) {
  $currentImage.setAttribute('src', './images/025.png');
});
$radio5.addEventListener('click', function (event) {
  $currentImage.setAttribute('src', './images/039.png');
});

var imageSlider = ['./images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'];

var i = 0;
var imageId = setInterval(changeImage, 3000);

function changeImage() {
  i++;
  if (i < imageSlider.length) {
    $currentImage.setAttribute('src', imageSlider[i]);

  } else {
    $currentImage.setAttribute('src', imageSlider[0]);
    clearInterval(imageId);
  }
}
