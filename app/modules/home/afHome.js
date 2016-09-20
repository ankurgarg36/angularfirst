var homeModule = angular.module("myApp", ['ui.router']);

homeModule.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state("home",{
        url:"/home",
        templateUrl: "modules/home/views/home.html"
    });
    $stateProvider.state("contact",{
        url:"/contact",
        templateUrl: "modules/home/views/contact.html"
    });
    $stateProvider.state("login",{
        url:"/login",
        templateUrl: "modules/home/views/login.html"
    });
    $stateProvider.state("productList",{
        name: 'productList',
        url: '/productList',
        templateUrl: "modules/products/views/product-list.html",
        resolve : {
            productList: ['$stateParams', 'requestService',
                function($stateParams, requestService) {
                    return requestService.get('/server/test.php',{'service':'productList'});
                }]
        },
        controller : 'productListCtrl'
    });
    $stateProvider.state("productDetail",{
        name: 'productDetail',
        url: '/productDetail',
        templateUrl: "modules/products/views/product-detail.html",
        params: {
            pid: null
        },
        resolve : {
            productDetail: ['$stateParams', 'requestService',
                function($stateParams, requestService) {
                    return requestService.get('/server/test.php',{'service':'productDetail','pid':$stateParams.pid});
                }]
        },
        controller : 'productDetailCtrl'
    });
    $stateProvider.state("productCart",{
        name: 'productCart',
        url: '/productCart',
        templateUrl: "modules/products/views/product-cart.html"
    });
    $urlRouterProvider.otherwise('/home');
});