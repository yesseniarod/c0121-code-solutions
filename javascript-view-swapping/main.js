var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function eventHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    var attribute = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      var compareNodeList = $view[j].getAttribute('data-view');
      if (attribute === compareNodeList) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', eventHandler);
