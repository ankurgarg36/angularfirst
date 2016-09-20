homeModule.service('requestService', function($http, $rootScope) {
    return {
        get: function(url,params) {
            return $http({
                method: "GET",
                url: url,
                params: params,
                timeout:40000
            }).then(function(resp) {
                return resp.data;
            })
        },
        post: function(url,params , contentType){
            return $http({
                method:"POST",
                url:url,
                data: params,
                headers : {'Content-Type' : (contentType)?contentType:'application/json'},
                timeout:40000
            }).then(function(resp){
                return resp.data;
            })
        }
    };
});