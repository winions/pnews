angular.module('pnews-controllers')

    .controller('authController', [
        '$scope', 'authFactory',

        function ($scope, authFactory) {
            var authModel = {
                email: null,
                password: null,
                name: null,
                firstName: null,
                lastName: null,
                isShowPassword: false,
                isRegister: false,
                isForgotPassword: false
            };

            $scope.failureMessage = '';

            $scope.authModel = authModel;

            function showErr(err){
                $scope.failureMessage = null;
                // var loginErr = authFactory.logIn(authModel.email, authModel.password);
                if (err) {
                    $scope.failureMessage = err.reason;
                }
            } 

            $scope.login = function () {
                console.log('login')
                Meteor.loginWithPassword(authModel.email, authModel.password,showErr);
            };

            $scope.register = function () {
                console.log('register')
                Accounts.createUser(authModel,showErr);
            };

            $scope.forgotPassword = function () {
                console.log('forgotPassword')
                Accounts.forgotPassword({email:authModel.email},showErr);
            };
        }
    ])

;