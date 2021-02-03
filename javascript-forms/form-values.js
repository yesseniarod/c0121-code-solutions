var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formsValues = {
    name: document.forms[0].elements.name.value,
    email: document.forms[0].elements.email.value,
    message: document.forms[0].elements.message.value
  };
  console.log(formsValues);
  document.querySelector('#contact-form').reset();
}

$contactForm.addEventListener('submit', handleSubmit);
