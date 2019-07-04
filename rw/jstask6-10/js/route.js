app.config(function($stateProvider, $urlRouterProvider,) {
    $urlRouterProvider.otherwise("/start");
    $stateProvider
        .state('/', {
            url: '/start',
            templateUrl: 'html/start page.html'

        })
        .state('background page', {
            url: '/background page',
            templateUrl: "html/background page.html"
            /* controller: function ($state) {
                 $state.go('list')
             }*/
        })

        .state('background page.welcome', {
            url: '/welcome',
            templateUrl: "html/welcome.html",
        })

        .state('background page.details', {
            url: '/details',
            templateUrl: "html/article details.html",
            params:{id:null}
        })

        .state('background page.list', {
            url: '/list',
            templateUrl: "html/article list.html",
            params:{page:null}
        })
});