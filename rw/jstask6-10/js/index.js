app.controller("myCtrl",function($scope,$http,$state){
    $scope.login=function(){
        $http({
            method: 'POST',
            url: "/carrots-admin-ajax/a/login",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function(obj) {
                var str = [];
                for (var s in obj) {
                    str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
                }
                return str.join("&");
            },
            data: {name: $scope.name,
                    pwd:$scope.pwd }
        }).then(function successCallback(response, status, header, config, statusText) {
            $state.go("background page");
        }, function errorCallback(response, status, header, config, statusText) {
            console.log(111)
            /*$scope.text = "请输入正确账号和密码"*/
        })
    }
});