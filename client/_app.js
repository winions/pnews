angular.module('pnews-controllers', []);
angular.module('pnews-factories', []);
angular.module('pnews-services', []);

angular.module('pnews', [
    'angular-meteor',
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'ngMaterial',
    'ui.router',
    'pnews-controllers',
    'pnews-factories'
])

    .config([
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',

        function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $stateProvider
                .state('main', {
                    abstract: true,
                    templateUrl: 'client/main.ng.html',
                    controller: 'appController'
                })

                .state('main.home', {
                    url: '/home',
                    views: {
                        'content@main': {
                            templateUrl: 'client/home.ng.html'
                        }
                    }
                })

            ;

            $urlRouterProvider.otherwise('/home');
        }
    ])

    .run([
        function () {

            console.log('Starting pNews')

        }

    ])

    .controller('appController', [
        '$scope',
        'SideNav',
        'postFactory',

        function ($scope, SideNav, postFactory) {
            $scope.appName = 'pNews';
            $scope.sideNavItems = SideNav.sideNavItems;

            $scope.addPost = function(post){
                console.log('$scope.addPost')
                console.log(post)
                postFactory.addPost(post);
            };

            $scope.burgerIconClick = function () {
                SideNav.toggle();
            };
            $scope.contentSwipeRight = function () {
                SideNav.open();
            };
            $scope.contentSwipeLeft = function () {
                SideNav.close();
            };
        }
    ])

;