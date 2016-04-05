angular.module('todo.add', ['ui.router'])
  .config(function ($stateProvider) {
    /**
     * Routes for adding todos.
     */
    $stateProvider
      .state('add', {
        url: '/add',
        controller: 'AddTodoCtrl',
        controllerAs: 'addTodo',
        templateUrl: 'modules/add-todo/index.html'
      });
  });