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

            $scope.login = function () {
                $scope.failureMessage = null;
                var loginErr = authFactory.logIn(authModel.email, authModel.password);
                if (loginErr) {
                    $scope.failureMessage = loginErr.reason;
                }
                console.log(loginErr);
            };

            $scope.register = function () {
                $scope.failureMessage = null;
                var names = authModel.name.split(' ');
                authModel.firstName = names.splice(0, 1);
                authModel.lastName = names.join(' ');
                var registerErr = authFactory.register(authModel);
                if (registerErr) {
                    $scope.failureMessage = registerErr.reason;
                }
                console.log(registerErr);
            };

            $scope.forgotPassword = function () {
                $scope.failureMessage = null;
                var forgotPasswordErr = authFactory.register(authModel.email);
                if (forgotPasswordErr) {
                    $scope.failureMessage = forgotPasswordErr.reason;
                }
                console.log(forgotPasswordErr);
            };
        }
    ])

;