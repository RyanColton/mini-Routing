angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/home/homeTmpl.html',
      controller: 'homeController'

    })

    .state('products', {
      url:'/products/:id',
      controller:'productsController',
      templateUrl:'/js/products/productsTmpl.html'
    })

    .state('settings', {
      url: '/settings',
      controller:'settingsController',
      templateUrl:'/js/settings/settingsTmpl.html'
    })
})
