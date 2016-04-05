angular.module('todo.directives')
  .directive('todoItem', todoItem);

function todoItem() {
  return {
    restrict: 'EC',
    controller: 'TodoItemCtrl',
    controllerAs: 'todoItem',
    templateUrl: 'modules/directives/todo-item/todo-item.html',
    bindToController: true,
    replace: true, //don't use this, it's a hack
    scope: {
      todo: '='
    }
  };
}