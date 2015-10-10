angular.module('pnews-controllers', []);
angular.module('pnews-factories', []);
angular.module('pnews-services', []);
angular.module('pnews-directives', [])
    .directive('trimText', [

        function () {
            return {
                restrict: 'A',
                scope: {
                    model: "=trimText"
                },
                link: function (scope, element) {

                    scope.$watch('model', function (newVal) {
                        if (newVal) {
                            element[0].innerText = element[0].innerText.trim();
                        }
                    });

                }
            };
        }
    ]);

angular.module('pnews', [
    'angular-meteor',
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'ngMaterial',
    'ui.router',
    'truncate',
    'pnews-controllers',
    'pnews-factories',
    'pnews-services',
    'pnews-directives'
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

                .state('main.posts', {
                    url: '/posts',
                    views: {
                        'content@main': {
                            templateUrl: 'client/home/home.ng.html'
                        }
                    }
                })

                .state('main.posts.view', {
                    url: '/:id',
                    views: {
                        'content@main': {
                            templateUrl: 'client/posts/view.ng.html'
                        }
                    }
                })

                .state('main.auth', {
                    url: '/auth',
                    views: {
                        'content@main': {
                            templateUrl: 'client/auth/auth.ng.html'
                        }
                    }
                })

            ;

            $urlRouterProvider.otherwise('/posts');
        }
    ])

    .run([
        function () {

            console.log('Starting pNews');

            $('#container').height(window.innerHeight - 56);

            $(window).resize(function () {
                $('#container').height(window.innerHeight - 56);
            });

        }

    ])

    .controller('appController', [
        '$scope',
        'SideNav',

        function ($scope, SideNav) {
            $scope.appName = 'pNews';
            $scope.sideNavItems = SideNav.sideNavItems;
            $scope.burgerIconClick = function () {
                SideNav.toggle();
            };
            $scope.contentSwipeRight = function () {
                SideNav.open();
            };
            $scope.contentSwipeLeft = function () {
                SideNav.close();
            };
            $scope.sideMenuItemClick = function () {
                SideNav.close();
                $('#side-nav-toggle').focusout();
            };
        }
    ])

;

Meteor.startup(function () {
    console.log('Meteor startup');
    angular.bootstrap(document, ['pnews']);
});