app.config(function($stateProvider, $urlRouterProvider) {
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
        .state('background page.list', {
            url: '/list',
            templateUrl: 'html/article list.html'
        })
});