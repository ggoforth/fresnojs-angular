angular.module('todo.add')
  .controller('AddTodoCtrl', AddTodoCtrl);

function AddTodoCtrl() {
  this.add = function (todo) {
    //houston we have a problem...all of our todos are stored in the main todo controller
    //How will we add this todo to an array that it doesn't have access to?
  };
}