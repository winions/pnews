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
                    views: {
                        'main': {
                            templateUrl: 'client/main.ng.html'
                        },
                        'side-nav@main': {
                            templateUrl: 'client/side_nav/side_nav.ng.html'
                        }
                    }
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
        '$meteor',

        function ($scope, SideNav, $meteor) {
            $scope.appName = 'pNews';
            $scope.sideNavItems = SideNav.sideNavItems;
            $scope.addPost = function (series, post) {
                console.log('$scope.addPost')
                console.log(post)
                postFactory.addPost(series, post);
            };

            $scope.logIn = function (email, password) {
                console.log('$scope.login');
                var result = authFactory.logIn(email, password);
                console.log(result);
            };


            $scope.logOut = function (email, password) {
                console.log('$scope.logOut');
                authFactory.logOut();
            };


            $scope.register = function (user) {
                console.log('$scope.register');
                var result = authFactory.register(user);
            };

            $scope.forgotPassword = function (email) {
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
            $scope.sideMenuItemClick = function () {
                SideNav.close();
                $('#side-nav-toggle').focusout();
            };


            $scope.sendPush = function (user) {
                console.log('MEA trying to use push', user);
                console.log(Push.send({
                    from: 'System admin',
                    title: 'News feed',
                    text: 'This is some breaking news! Check them out!',
                    query: {id: user.profile.gcmUserId}
                    // query: {}
                }));
                // console.log('MEA current user', Meteor.user());

                // user.profile.gcmToken = 'gcmToken';
                // user.profile.gcmUserId = 'gcmUserId';
                // console.log('MEA trying to save the user modification to db', user);
                // $scope.allUsers.save();
            };


            $scope.sendPushWithToken = function (user) {
                console.log('MEA trying to use push', user);
                console.log(Push.send({
                    from: 'System admin',
                    title: 'News feed',
                    text: 'This is some breaking news! Check them out!',
                    token: user.profile.gcmToken
                    // query: {}
                }));
                // console.log('MEA current user', Meteor.user());

                // user.profile.gcmToken = 'gcmToken';
                // user.profile.gcmUserId = 'gcmUserId';
                // console.log('MEA trying to save the user modification to db', user);
                // $scope.allUsers.save();
            };

            Push.allow({
                send: function (userId, notification) {
                    return true; // Allow all users to send
                }
            });

            var gcmToken = null, gcmUserId = null;
            Push.addListener('token', function (token) {
                console.log('MEA Token: ' + JSON.stringify(token));
                gcmToken = JSON.stringify(token);
                gcmUserId = Push.id();
                alert('MEA Token: ' + JSON.stringify(token));
                var currentUser = Meteor.user();
                if (currentUser !== null) {
                    currentUser.profile.gcmToken = gcmToken;
                    currentUser.profile.gcmUserId = gcmUserId;
                    Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile': currentUser.profile}});
                    console.log('MEA trying to update current User model', gcmToken, gcmUserId, currentUser);
                }
            });

            $scope.allUsers = $meteor.collection(Meteor.users, false).subscribe('users');
            console.log('MEA all users', $scope.allUsers);
        }
    ])

;

Meteor.startup(function () {
    console.log('Meteor startup');
    angular.bootstrap(document, ['pnews']);
});
