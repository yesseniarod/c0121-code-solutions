var clickCounter = 0;
var $lightBulb = document.querySelector('.light-bulb');
var $container = document.querySelector('.container');

function lightOnAndOff(event) {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    $lightBulb.className = 'buttonClick';
    $container.className = 'lightOn';
  } else {
    $lightBulb.className = 'light-bulb';
    $container.className = 'container';
  }
}

$lightBulb.addEventListener('click', lightOnAndOff);
