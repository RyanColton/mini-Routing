angular.module('miniRouting')
.controller('productsController', function($scope, productService, $stateParams){

    if ($stateParams === 'shoes'){
      $scope.productData = productService.shoeData
    }else if($stateParams === 'socks'){
      $scope.productData = productService.sockData
    }

});
