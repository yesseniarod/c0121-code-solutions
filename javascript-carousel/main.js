var $next = document.querySelector('.next');
var $previous = document.querySelector('.previous');
var $currentImage = document.querySelector('.first');
var $dotContainer = document.querySelector('.dots');

$dotContainer.addEventListener('click', event => {
  if (event.target && event.target.matches('input.dot1')) {
    $currentImage.setAttribute('src', './images/001.png');
  } else if (event.target && event.target.matches('input.dot2')) {
    $currentImage.setAttribute('src', './images/004.png');
  } else if (event.target && event.target.matches('input.dot3')) {
    $currentImage.setAttribute('src', './images/007.png');
  } else if (event.target && event.target.matches('input.dot4')) {
    $currentImage.setAttribute('src', './images/025.png');
  } else if (event.target && event.target.matches('input.dot5')) {
    $currentImage.setAttribute('src', './images/039.png');
  }
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

var currentIndex = 0;
$next.onclick = function () {
  if (currentIndex >= imageSlider.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  $currentImage.setAttribute('src', imageSlider[currentIndex]);
};

$previous.onclick = function () {
  if (currentIndex <= 0) {
    currentIndex = imageSlider.length - 1;
  } else {
    currentIndex--;
  }
  $currentImage.setAttribute('src', imageSlider[currentIndex]);
};
