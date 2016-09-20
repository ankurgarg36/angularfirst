homeModule.controller("productListCtrl", ["$rootScope", "$scope","productList", function ($rootScope, $scope,productList) {
    $scope.viewClass = "";
    $scope.productList=productList;
}]);

homeModule.controller("productDetailCtrl", ["$rootScope", "$scope","productDetail", function ($rootScope, $scope,productDetail) {
    $scope.productDetail=productDetail;
}]);