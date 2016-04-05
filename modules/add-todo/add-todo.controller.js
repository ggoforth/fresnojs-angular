angular.module('todo.add')
  .controller('AddTodoCtrl', AddTodoCtrl);

function AddTodoCtrl(Todos, $state) {
  /**
   * Lets add a todo to our list of Todos.
   * 
   * @param todo
   */
  this.add = function (todo) {
    Todos.todos.push({
      title: todo,
      complete: false
    });
   
    //go back to the todo state so we can marvel at the wonder of our new todo
    $state.go('todo');
  };
}