angular.module('todo.services')
  .service('Todos', Todos);

function Todos() {
  /**
   * The main application todo data store.
   * 
   * @type {Array}
   */
  this.todos = _.map(_.range(10), function (index) {
    return {
      title: 'Todo #' + index,
      complete: false
    };
  });
}