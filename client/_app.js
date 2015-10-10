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
        'authFactory',

        function ($scope, SideNav, postFactory, authFactory) {
            $scope.appName = 'pNews';
            $scope.sideNavItems = SideNav.sideNavItems;

            $scope.addPost = function(post){
                console.log('$scope.addPost')
                console.log(post)
                postFactory.addPost(post);
            };

            $scope.logIn = function(email, password){
                console.log('$scope.login');
                var result = authFactory.logIn(email, password);    
                console.log(result);
            };


            $scope.logOut = function(email, password){
                console.log('$scope.logOut');
                authFactory.logOut();    
            };


            $scope.register = function(user){
                console.log('$scope.register');
                var result = authFactory.register(user);    
            };

            $scope.forgotPassword = function(email){
                console.log('$scope.forgetPassword');
                var result = authFactory.forgotPassword(email);    
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