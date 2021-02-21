var text = 'hi world';
var $tutor = document.querySelector('.tutor');
var characters = text.split('');


function createSpan() {
  for (var i = 0; i < text.length; i++) {
    var $span = document.createElement('span');
    $span.textContent = text[i];
    $tutor.append($span);

  }
}

createSpan();
var span = document.querySelectorAll('span');
var firstSpan = document.querySelector('span');
firstSpan.className = 'cursor';

function matchKeys ({ key }) {
  for (var j = 0; j < span.length; j++) {
    var currentCharacter = text[j];
    if (key === currentCharacter) {
      span[j].removeAttribute('class', 'cursor');
      span[j].className = 'correct';
      span[++j].className = 'cursor';
    }
  }
}

document.addEventListener('keydown', matchKeys);
