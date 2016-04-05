angular.module('todo.services')
  .service('Todos', Todos);

function Todos($q, $timeout) {
  var vm = this;
  
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

  /**
   * Add a todo to our list
   * 
   * @param todo
   */
  this.add = function (todo) {
    var dfrd = $q.defer();

    $timeout(function () {
      vm.todos.push({
        title: todo,
        complete: false
      });
      
      dfrd.resolve();
    }, 3000);
    
    return dfrd.promise;
  };
}