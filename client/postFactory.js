angular.module('pnews-factories')

    .factory('postFactory', [
        '$rootScope',
        function ($rootScope) {
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


            function addHashTags(hashTags){

            }

            function savePost(post){
                
            }


            postFactory.addPost = function(post){
                console.log('postFactory.addPost')
                var hashTags = getHashTags(post.content);
                console.log(hashTags);
                addHashTags(hashTags);                 
                savePost(hashTags);                 
            };

            return postFactory;

        }
    ]);
