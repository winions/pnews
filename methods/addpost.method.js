'use strict';
Meteor.methods({
  'addpost': function(series,post,isLinked,linkedTitle) {
    if(!isLinked){
  		Series.insert(series,function (err,result){
  			if (err){
         console.log('error');
  			}
  			else{
        Series.update({title: series.title},{ $push: {post: post}},function (err, result){
        if (err){
          console.log('error')
        } 
          }); 
  			} 
  		});
    }
    else {
      Series.update({title: linkedTitle},{ $push: {post: post}},function (err, result){
        if (err){
          console.log('error')   
        } 
      }); 
    }
  }
});
