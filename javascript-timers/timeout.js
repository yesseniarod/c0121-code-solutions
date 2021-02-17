function changeText(text) {
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}
setTimeout(changeText, 2 * 1000);
