var text = 'grumpy wizards make toxic brew';
var $tutor = document.querySelector('.tutor');
var characters = text.split('');
var $span = document.querySelectorAll('span');

function typeTutor({ key }) {
  for (var i = 0; i < characters.length; i++) {
    var currentCharacter = characters[i];
    $span[i].className = 'cursor';

    if (key === currentCharacter) {
      $span[i].className = 'correct';

    } else if (key !== currentCharacter) {
      $span[i].className = 'incorrect';
    }

  }
}

document.addEventListener('keydown', typeTutor);
$tutor.addEventListener('keydown', typeTutor);
