angular.module('pnews-factories')

    .factory('authFactory', [
        '$rootScope',
        function ($rootScope) {
            var authFactory = {};

            authFactory.logIn = function(email, password){
                console.log('authFactory.logIn');
                console.log(authFactory.logIn);
                var logInErr;
                Meteor.loginWithPassword(email, password,function(err){
                    if(err){
                        console.log(err);
                        logInErr = err;
                    }else{
                        console.log('No err');
                        // $state.go('app.home');
                    }
                });
                return logInErr;
            };


            authFactory.logOut = function(){
                console.log('authFactory.logOut');
                Meteor.logout(function(){
                    // $state.go('login')
                });
            };

            authFactory.forgotPassword = function(email){
                console.log('authFactory.forgetPassword');
                var forgetPasswordErr;
                Accounts.forgotPassword({email:email}, function(err){
                    if(err){
                        console.log(err);
                        forgetPasswordErr = err;
                    }else{
                        console.log('No err');
                    }
                });
                return forgetPasswordErr;
            };


            authFactory.register = function(user){
                console.log('authFactory.register');
                var registerErr;
                Accounts.createUser(user,function(err){
                    if(err){
                        console.log(err);
                        registerErr = err;
                    }else{
                        console.log('No err');
                    }
                });
                return registerErr;
            };


            return authFactory;

        }
    ]);
