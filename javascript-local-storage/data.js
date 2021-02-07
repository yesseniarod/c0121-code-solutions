/* exported todos */

var todos = [];
// array literal is being assigned to the variable todos
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// the getItem method of the localStorage object is being called with one argument, the string javascript-local-storage, the return is being assigned to the variable previousTodosJSON
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
// an if statement with the conditional the variable previousTodosJSON is not strictly equal to null
// if the condition evaluates to true, then the parse method of the JSON object is being called with one argument, the value of the variable previousTodosJSON, the return is being assigned to the variable todos

function todosEvent(event) {
// the todosEvent functions is being defined with one parameter event
  var todosJSON = JSON.stringify(todos);
  // the stringify method of the JSON object is being called with one argument, the value of the variable todos, the return is being assigned to the variable todosJSON
  localStorage.setItem('javascript-local-storage', todosJSON);
  // the setItem method of the localStorage object is being called with two arguments, the string keyName javascript-local-storage and the keyValue the variable todosJSON

}

window.addEventListener('beforeunload', todosEvent);
// the addEventListener method of the window object is being called with two arguments, the string event type beforeunload and the callback function todosEvent
