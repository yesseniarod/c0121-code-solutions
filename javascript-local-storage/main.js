/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// the querySelector method of the document object is being called with one argument, the string CSS ID selector for todo-form, the return is being assigned to the variable $todoForm

$todoForm.addEventListener('submit', function (event) {
// the addEventListener method of the $todoForm object is being called with two arguments, the event type submit and an anonymous callback function
// the anonymous function has one parameter of event
  event.preventDefault();
  // the preventDefault method of the event object is being called with no arguments
  var todo = {
    todoId: uuid.v4(),
    task: $todoForm.elements.task.value,
    isCompleted: false
  };
  // an object literal is being assigned to the variable todo with the keys todoID, task, isCompleted and correlating key values
  todos.push(todo);
  // the push method of the todos object is being called with one argument the value of the variable todo
  $todoList.append(renderTodo(todo));
  // the append method of the $todoList object is being called with one argument the renderTodo callback function with an argument of todo
  $todoForm.reset();
// the reset method of the $todoForm object is being called with no arguments
});

var $todoList = document.querySelector('#todo-list');
// the querySelector method of the document object is being calle with one argument, the string CSS ID selector for todo-list, the return is being assigned to the variable $todoList

$todoList.addEventListener('change', function (event) {
// the addEventListener of the $todoList object is being called with two argument, the event type change and an anonymous callback function
// the anonymous function has one paramter event
  var todoId = event.target.getAttribute('id');
  // the getAttribiute method of the target property of the event object is being called with one argument the string name of the attribute id, the return is being assigned to the variable todoID
  for (var i = 0; i < todos.length; i++) {
    // a for loop with the initialization of zero being assigned to the variable i, the condition of i is less than the length property of the todos object, and final expression of i being incremented by 1
    if (todos[i].todoId === todoId) {
      // if statement with the condition todoID property of todos at index i is strictly equal to todoID
      todos[i].isCompleted = event.target.checked;
      // if condition evaluates to true, the checked property of the target property of the event object is being assigned to the isCompleted property of the todos object at index i
      break;
      // break statement terminates the for loop
    }
  }
});

for (var i = 0; i < todos.length; i++) {
// a for loop with the initialization of zero being assigned to the variable i, the condition of i is less than the length property of the todos object, and final expression of i being incremented by 1
  var $todo = renderTodo(todos[i]);
  // the return of renderTodo callback function with one argument of todos variable at i, is being assigned to the variable $todo
  $todoList.appendChild($todo);
// appendChild method of the $todoList object is being called with one argument the variable $todo
}

function renderTodo(todo) {
// renderTodo function is being declared with one parameter todo

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  // the createElement method of the document object is being called with one argument, the string tagName li, the return is being assigned to the variable $todo
  $todo.setAttribute('class', 'list-group-item');
  // the setAttribute method of the $todo object is being called with two arguments, the attribute string name class and the attribute string value list-group-item

  var $formCheck = document.createElement('div');
  // the createElement method of the document object is being called with one argument, the string tagName div, the return is being assigned to the variable $formCheck
  $formCheck.setAttribute('class', 'form-check d-flex');
  // the setAttribute method of the $formCheck object is being called with two arguments, the attribute string name class and the attribute string value form-check d-flex

  var $checkbox = document.createElement('input');
  // the createElement method of the document object is being called with one argument, the string tagName input, the return is being assigned to the variable $checkbox
  $checkbox.checked = todo.isCompleted;
  // the return of isCompleted property of the todo object is being assigned to the checked property of the $checkbox object
  $checkbox.setAttribute('id', todo.todoId);
  // the setAttribute method of the $checkbox object is being called with two arguments, the attribute string name id and the attribute value the return of todoID property of the todo object
  $checkbox.setAttribute('type', 'checkbox');
  // the setAttribute method of the $checkbox object is being called with two arguments, the attribute string name type and the attribute string value checkbox
  $checkbox.setAttribute('class', 'form-check-input');
  // the setAttribute method of the $checkbox object is being called with two arguments, the attribute string name class and the attribute string value form-check-input

  var $label = document.createElement('label');
  // the createElement method of the document object is being called with one argument, the string tagName label, the return is being assigned to the variable $label
  $label.setAttribute('for', todo.todoId);
  // the setAttribute method of the $label object is being called with two arguments, the attribute string name for and the attribute value the return of todoID property of the todo object
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // the setAttribute method of the $label object is being called with two arguments, the attribute string name class and the attribute string value form-check-label flex-grow-1 ml-2
  $label.textContent = todo.task;
  // the return of the task property of the todo object is being assigned to the textContent property of the $label object

  $todo.append($formCheck);
  // the append method of the $todo object is being called with one argument the variable $formCheck
  $formCheck.append($checkbox, $label);
  // the append method of the $formCheck object is being called with two arguments, the variable $checkbox and the variable $label

  return $todo;
}
