//Article类型
app.filter('start', function () {
    return function (type) {
        switch (type) {
            case 0:
                return "首页Banner";
                break;
            case 1:
                return "找职位Banner";
                break;
            case 2:
                return "找精英Banner";
                break;
            case 3:
                return "行业大图";
                break;
        }
        return type;
    }
});

//Article状态
app.filter('draft', function () {
    return function (status) {
        switch (status) {
            case 1:
                return "草稿 ";
                break;
            case 2:
                return "上线";
                break;
            case 3:
                return "草稿";
                break;
        }
    }
});

app.controller("listCtrl", function ($scope,$http,$state,$stateParams,$log) {

    //请求
    $http({
        method: 'GET',
        url: "/carrots-admin-ajax/a/article/search",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params:{
            page:$stateParams.page
        },
        transformRequest: function (obj) {
            var str = [];
            for (var s in obj) {
                str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
            }
            return str.join("&");
        },
    }).then(function success(respsone) {
        $scope.users = respsone.data.data.articleList;
        $scope.bigTotalItems = respsone.data.data.total;
        console.log("访问成功");

    }, function error() {
        console.log("获取失败！");
    });
    $scope.bigCurrentPage = $stateParams.page;
    $scope.foo = function(){
        $http({
            method: 'GET',
            url: "/carrots-admin-ajax/a/article/search",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function(obj) {
                var str = [];
                for (var s in obj) {
                    str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
                }
                return str.join("&");
            },
        }).then(function success(respsone){
            $scope.users = respsone.data.data.articleList;
        }, function error(){
            console.log("获取失败！");
        });
    };

    //搜索请求
    $scope.seek = function(){
        // changeStartAt
        if($scope.startAt === undefined || $scope.startAt === null ){
            changeStartAt = null;
        }else
        {
            changeStartAt = $scope.startAt.valueOf();//把时间日期转换为时间戳
        }
        if($scope.endtAt === undefined || $scope.endAt === null){
            changeEndAt = null;
        }else
        {
            changeEndAt = $scope.endAt.valueOf();
        }
        $http({
            method:"get",
            url: "/carrots-admin-ajax/a/article/search",
            params:{
                // startAt:$scope.startAt.valueOf() ,
                // endAt:$scope.endAt.valueOf(),
                startAt:changeStartAt,
                endAt:changeEndAt,
                type:$scope.type,
                status:$scope.status,
               // page:3
            },
        }).then(
            function (res) {
                $scope.users=res.data.data.articleList;
                console.log("搜索成功")
            })

    };
    //清空请求
    $scope.clean = function(){
        $scope.startAt=null;
        $scope.endAt=null;
        $scope.type=null;
        $scope.status=null;
        $http({
            method:"get",
            url: "/carrots-admin-ajax/a/article/search",
            params:{},
        }).then(
            function (res) {
                $scope.users=res.data.data.articleList;
            });
        $scope.foo();
        console.log( "清空成功");
    };
    //上线
    $scope.upLine = function(id,status){
        if(status === 1){
            status=2
        }else if(status === 2){
            status=1
        }
        $http({
            method: "PUT",
            url: "/carrots-admin-ajax/a/u/article/status",
            data: {
                id:id,
                status:status,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function(obj) {
                var str = [];
                for (var s in obj) {
                    str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
                }
                return str.join("&");
            }
        }).then(
            function (res) {
                $scope.foo();
                console.log("上线成功");
            });
    };
    //删除
    $scope.delete = function(a){
        $http({
            method:'DELETE',
            url:'carrots-admin-ajax/a/u/article/'+ a, // + 是拼接字符串，通过url传参
        }).then(
            function (res) {
                $scope.foo();
                console.log("删除成功");
            });
    };
    //编辑
    $scope.redact = function(a){
        $state.go("background page.details",{"id":a});
    };

    //分页
    $scope.currentPage = 4;

    // $scope.setPage = function (pageNo) {
    //     $scope.currentPage = pageNo;
    //     console.log( pageNo);
    // };

    $scope.page = function(){
        $state.go("background page.list",{page:$scope.bigCurrentPage});
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;

});


