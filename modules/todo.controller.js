angular.module('todo')
  .controller('TodoCtrl', TodoCtrl);

function TodoCtrl($scope) {
  var vm = this;
  vm.todos = [];

  _.each(_.range(10), function (todoNum) {
    vm.todos.push({
      title: 'Todo #' + todoNum,
      complete: false 
    });
  });
}