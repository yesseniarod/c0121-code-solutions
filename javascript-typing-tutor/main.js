var text = 'grumpy wizards make toxic brew';
var $tutor = document.querySelector('.tutor');
var characters = text.split('');
var $span = document.querySelectorAll('span');

function typeTutor({ key }) {
  for (var i = 0; i < characters.length; i++) {
    var currentCharacter = $span[i];
    $span.className = 'cursor';

    if (key === characters[i]) {
      currentCharacter.classList.add('correct');

    } else {
      $span.className = 'incorrect';
    }

  }
}

document.addEventListener('keydown', typeTutor);
$tutor.addEventListener('keydown', typeTutor);
