var intervalId = setInterval(textInterval, 800);
var $hElement = document.querySelector('h1');
var counter = 4;

function textInterval() {
  counter--;
  if (counter > 0) {
    $hElement.textContent = counter;
  } else {
    $hElement.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
