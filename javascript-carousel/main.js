var $next = document.querySelector('.next');
var $previous = document.querySelector('.previous');
var $currentImage = document.querySelector('.first');
var $dotContainer = document.querySelector('.dots');

var clickCounter = 0;
var clickBack = 0;

// $next.addEventListener('click', function (event) {
//   clickCounter++;
//   if (clickCounter === 1) {
//     $currentImage.setAttribute('src', './images/004.png');
//   } else if (clickCounter === 2) {
//     $currentImage.setAttribute('src', './images/007.png');
//   } else if (clickCounter === 3) {
//     $currentImage.setAttribute('src', './images/025.png');
//   } else if (clickCounter === 4) {
//     $currentImage.setAttribute('src', './images/039.png');
//   } else {
//     $currentImage.setAttribute('src', './images/001.png');
//   }
//   changeImage();
// });

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

$next.addEventListener('click', function (event) {
  var currentIndex = 1;
  if (currentIndex < imageSlider.length) {
    $currentImage.setAttribute('src', imageSlider[currentIndex]);
    currentIndex++
  }

  // debugger;
  //  changeImage();
});

// this function will only change image once to charmander
// no loop should be needed for function


function changeImage() {
  i++;
  if (i < imageSlider.length) {
    $currentImage.setAttribute('src', imageSlider[i]);

  } else {
    $currentImage.setAttribute('src', imageSlider[0]);
    clearInterval(imageId);
  }
}
