angular.module('pnews-factories')

    .factory('postFactory', [
        '$rootScope','$meteor',
        function ($rootScope,$meteor) {
            var postFactory = {};

            function getHashTags(content){
                console.log('getHashTags')
                var hashTags = [];
                var newStart = 0;
                if(content){
                    for(var pos = content.indexOf('#'); pos !== -1; pos = content.indexOf('#', pos + 1)) {
                        var hashTag = content.substr(pos+1).match(/[a-z1-9A-z-_]*/);
                        newStart = content.length;
                        if(hashTag.length>0 && hashTag[0].length > 0){
                            hashTags.push(hashTag[0]);
                            newStart = pos + hashTag[0].length;
                        }
                    }
                }
                return hashTags;
            }

            postFactory.addPost = function(series,post){
                console.log('postFactory.addPost')
                var hashTags = getHashTags(post.content);
                console.log(hashTags);
                Meteor.call('addHashTag', hashTags);
                Meteor.call('addpost', series,post,true,'lklklkl');
            };

            return postFactory;

        }
    ]);
