angular.module('todo')
  .controller('TodoCtrl', TodoCtrl);

function TodoCtrl(Todos) {
  /**
   * Our app todos.
   * 
   * @type {Array}
   */
  this.todos = Todos.todos;
}