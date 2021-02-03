var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formsValues = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log(formsValues);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
