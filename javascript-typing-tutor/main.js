var text = 'grumpy wizards make toxic brew';
var $tutor = document.querySelector('.tutor');
var characters = text.split('');
// .map(function (char) {
//   var span = document.createElement('span');
//   span.textContent = char;
//   $tutor.appendChild(span);
//   return span;
// });

// var i = 0;
// var currentCharacter = characters[i];
// currentCharacter.classList.add('cursor');
// console.log(characters);

var $span = document.querySelectorAll('span');

function typeTutor(event) {
  var key = event.key;
  //  console.log(key);
  for (var i = 0; i < characters.length; i++) {
    var currentCharacter = characters[i];
    // $span[i].className = 'cursor';
    // characters[currentCharacter] = 'cursor';

    if (key === currentCharacter) {
      $span[i].className = 'correct';
      $span[i].classList.remove('cursor');

    } else if (key !== currentCharacter) {
      $span.className = 'incorrect';
    }

  }
}

// document.addEventListener('keydown', function ({ key }) {
//   // console.log(key);
//   if (key === currentCharacter.textContent) {
//     // typed correct key
//     currentCharacter.classList.remove('cursor');
//     currentCharacter.classList.add('correct');
//     currentCharacter = characters[++i];
//     currentCharacter.classList.add('cursor');
//   } else if (key !== currentCharacter.textContent) {
//     // currentCharacter.classList.remove('cursor');
//     // currentCharacter.classList.add('incorrect');
//     currentCharacter.classList.add('cursor');
//     currentCharacter.classList.add('incorrect');
//     // currentCharacter.removeAttribute('class');
//     // currentCharacter.classList.remove('cursor');

//     // currentCharacter = characters[++i];
//     // currentCharacter.classList.add('cursor');
//   }
// });
document.addEventListener('keydown', typeTutor);
$tutor.addEventListener('keydown', typeTutor);
