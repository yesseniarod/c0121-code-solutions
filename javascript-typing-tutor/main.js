var text = 'grumpy wizards make toxic brew';
var $tutor = document.querySelector('.tutor');

function createSpan(event) {
  for (var i = 0; i < text.length; i++) {
    var $span = document.createElement('span');
    $span.textContent = text[i];
    $tutor.append($span);

  }
}

var index = 0;
var currentCharacter = text[index];
// console.log(currentCharacter);
// prints out g

function checkKeys(event) {
  var key = event.key;
  for (var j = 0; j < text.length; j++) {
    // currentCharacter = text[j];
    if (key === currentCharacter) {
    //  console.log('correct');
    //  console.log(currentCharacter);
    }
    // else if (key !== currentCharacter)
  }
}

// var characters = text.split('');
// .map(function (char) {
//    var span = document.createElement('span');
//    span.textContent = char;
//    $tutor.appendChild(span);
//    return span;
//  });

// var $span = document.querySelectorAll('span');

// function typeTutor(event) {
//   var key = event.key;
//   //  console.log(key);
//   for (var i = 0; i < characters.length; i++) {
//     var currentCharacter = characters[i];
//     $span[i].className = 'cursor';
//     characters[currentCharacter] = 'cursor';

//     if (key === currentCharacter) {
//       $span[i].className = 'correct';
//       $span[i].classList.remove('cursor');

//     } else if (key !== currentCharacter) {
//       $span.className = 'incorrect';
//     }

//   }
// }

//  document.addEventListener('keydown', function ({ key }) {
//    console.log(key);
//    if (key === currentCharacter.textContent) {
//      // typed correct key
//      currentCharacter.classList.remove('cursor');
//      currentCharacter.classList.add('correct');
//      currentCharacter = characters[++i];
//      currentCharacter.classList.add('cursor');
//    } else if (key !== currentCharacter.textContent) {
//       currentCharacter.classList.remove('cursor');
//       currentCharacter.classList.add('incorrect');
//      currentCharacter.classList.add('cursor');
//      currentCharacter.classList.add('incorrect');
//       currentCharacter.removeAttribute('class');
//      currentCharacter.classList.remove('cursor');

//      currentCharacter = characters[++i];
//       currentCharacter.classList.add('cursor');
//   }
//  });
window.addEventListener('load', createSpan);
document.addEventListener('keydown', checkKeys);
// document.addEventListener('keydown', checkKeys);
