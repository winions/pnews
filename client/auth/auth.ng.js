angular.module('pnews-controllers')

    .controller('authController', [
        '$scope',

        function ($scope) {
            var authModel = {
                email: null,
                password: null,
                name: null,
                firstName: null,
                lastName: null,
                showPassword: false,
                isRegister: false
            };

            $scope.authModel = authModel;

            $scope.login = function () {
                // TODO: login logic
            };

            $scope.register = function () {
                var names = authModel.split(' ');
                authModel.firstName = names.splice(0, 1);
                authModel.lastName = names.join(' ');

                // TODO: register logic
            };
        }
    ])

;