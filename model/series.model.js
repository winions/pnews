var Series = new Mongo.Collection('series');
var schemas={};
Series.allow({
  insert: function(userId, doc) {
    return userId;
  },
  update: function(userId, doc, fields, modifier) {
    if (userId !== doc._id) {
      return false;
    }
    return true;
  },
  remove: function(userId, doc) {
    if (userId !== doc._id) {
      return false;
    }
    return true;
  }
});

Series.before.insert(function(userId, doc) {
  return doc.post[0].postId = ObjectId();
});

// Series.before.update(function(userId, doc, fieldNames, modifier, options) {
//   modifier.$set = modifier.$set || {};
//   return modifier.$set.updatedAt = Date.now();
// });
schemas.vote = new SimpleSchema({
  voter: {
    type: String,
    optional : true
  },
  voteType : {
    type: String,
    optional:true
  }
});
schemas.hashTag = new SimpleSchema({
  name : {
    type: String,
    optional : true
  }
});

schemas.post = new SimpleSchema({
  postId: {
    type: String,
    optional : true
    },
  createdAt: {
    type:Date,
    optional : true    
  },
  content: {
    type: String,
    optional : true
  },
  hashtags : {
    type: schemas.hashTag,
    optional:true
  },
  vote: {
  type: schemas.vote,
  optional: true
}

});

schemas.series = new SimpleSchema({
  authorId: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    max: 60
  },
  post: {
    type: schemas.post,
    optional: true
  }
});

Series.attachSchema(schemas.series);

