let config = function ($urlRouterProvider, $stateProvider){
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('root',{
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })  
    .state('root.home',{
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'

      
    })
    .state('root.people',{
      url: '/people',
      templateUrl: 'templates/people.tpl.html',
      controller: 'PeopleController as vm'
    })
    .state('root.add', {
      url: '/people/add',
      templateUrl: 'templates/addpeople.tpl.html',
      controller: 'AddController as vm'
    });



};

config.$inject = ['$urlRouterProvider', '$stateProvider'];
export default config;