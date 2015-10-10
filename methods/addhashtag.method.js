'use strict';
Meteor.methods({
  'addHashTag': function(hashTags) {
  	hashTags.forEach(function (hashtag){
  		HashTags.insert({name:hashtag},function (err,result){
  			if (err){
  				console.log ( 'errrrrrrrrrrrrrrrrrrrrrrrrrr');
  			}
  			else{
  				console.log ('successsssssssssssssssssss');

  			} 
  		});
  	});
  }
});
