angular.module('todo', [
  'ui.router', 
  'todo.add'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/todo');

    $stateProvider
      .state('todo', {
        url: '/todo',
        controller: 'TodoCtrl',
        controllerAs: 'todo',
        templateUrl: 'modules/todo.html'
      });
  });