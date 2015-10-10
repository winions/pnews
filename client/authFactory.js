'use strict';
angular.module('pnews-factories')

    .factory('authFactory', [
        function () {
            var authFactory = {};

            // authFactory.logIn = function(email, password){
            //     Meteor.loginWithPassword(email, password,function(err){
                    
            //     });
            // };

            authFactory.logIn = Meteor.loginWithPassword
                
            // authFactory.logOut = function(){
            //     console.log('authFactory.logOut');
            //     Meteor.logout(function(){
            //         // $state.go('login')
            //     });
            // };

            authFactory.logOut = Meteor.logout;
                

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
