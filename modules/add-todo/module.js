angular.module('todo.add', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        controller: 'AddTodoCtrl',
        controllerAs: 'addTodo',
        templateUrl: 'modules/add-todo/index.html'
      });
  });