angular.module('todo', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //The default route
    $urlRouterProvider.otherwise('/todo');

    /**
     * Our main state...the first thing that is loaded.
     */
    $stateProvider
      .state('todo', {
        url: '/todo',
        controller: 'TodoCtrl',
        controllerAs: 'todo',
        templateUrl: 'modules/todo.html'
      });
  });