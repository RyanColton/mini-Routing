angular.module('miniRouting')
.controller('detailController', function($scope, productsService, $stateParams){

  productsService.getOneProduct($stateParams.id).then(function(product){
    $scope.product = product;
  })
})
