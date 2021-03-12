var text = 'hi world ';
var $tutor = document.querySelector('.tutor');

function createSpanElements() {
  for (var i = 0; i < text.length; i++) {
    var $span = document.createElement('span');
    $span.textContent = text[i];
    $tutor.append($span);

  }
}

createSpanElements();
var span = document.querySelectorAll('span');
var firstSpan = document.querySelector('span');
firstSpan.className = 'cursor';

var currentIndex = 0;

function matchKeys({ key }) {
  if (currentIndex < span.length - 1) {
    if (key === span[currentIndex].textContent) {
      span[currentIndex].removeAttribute('class', 'cursor');
      span[currentIndex].className = 'correct';
      span[++currentIndex].classList.add('cursor');
    } else if (key !== span[currentIndex].textContent) {
      span[currentIndex].removeAttribute('class', 'cursor');
      span[currentIndex].className = 'incorrect';
      span[currentIndex].classList.add('cursor');
    }
  }
}

document.addEventListener('keydown', matchKeys);
