angular.module('todo.add')
  .controller('AddTodoCtrl', AddTodoCtrl);

function AddTodoCtrl(Todos, $state) {
  /**
   * Lets add a todo to our list of Todos.
   * 
   * @param todo
   */
  this.add = function (todo) {
    Todos.add(todo)
      .then(function () {
        $state.go('todo');
      });
  };
}