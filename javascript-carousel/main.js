var $next = document.querySelector('.next');
var $previous = document.querySelector('.previous');
var $currentImage = document.querySelector('.first');
var $dotContainer = document.querySelector('.dots');

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


$dotContainer.addEventListener('click', (event) => {
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

// $next.addEventListener('click', function (event) {
//   for (var j = 0; j < imageSlider.length; j++) {
//     var currentIndex = imageSlider[j];
//     if (currentIndex) {
//       $currentImage.setAttribute('src', imageSlider[j]);
//     }
//   }
//   debugger;

//   changeImage();
// });

// this function currently displays only jigglypuff image when right arrow is clicked
