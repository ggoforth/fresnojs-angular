angular.module('todo')
  .controller('TodoCtrl', TodoCtrl);

function TodoCtrl() {
  /**
   * Our app todos.
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