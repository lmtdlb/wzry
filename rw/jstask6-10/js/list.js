app.controller("myCtrl",function($scope,$http){
    $scope.list = function(){
        $http({
            method: 'GET',
            url: "http://dev.admin.carrots.ptteng.com//a/article/search",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            params:{},
            transformRequest: function(obj) {
                var str = [];
                for (var s in obj) {
                    str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
                }
                return str.join("&");
            },
        }).then(function success(respsone))
        }, function errorCallback(response, status, header, config, statusText) {
            console.log(222);
        })
    }
});