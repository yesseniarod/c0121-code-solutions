var $button = document.querySelector('.button');
var $modalContainer = document.querySelector('.modal-container');
var $response = document.querySelector('.response');

function openModal(event) {
  $modalContainer.classList.add('active');

}

function closeModal(event) {
  $modalContainer.classList.remove('active');
}

$button.addEventListener('click', openModal);
$response.addEventListener('click', closeModal);
