 Series = new Mongo.Collection('series');
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

// Series.before.insert(function (userId, doc) {
//    doc.post[0].postId = new Mongo.ObjectID().valueOf();
// });

Series.before.update(function(userId, doc, fieldNames, modifier, options) {
  return modifier.$push.post.postId = new Mongo.ObjectID().valueOf();
});
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

// schemas.post = new SimpleSchema({
//   postId: {
//     type: String,
//     optional : true
//     },
//   createdAt: {
//     type:Date,
//     optional : true    
//   },
//   content: {
//     type: String,
//     optional : true
//   },
//   hashtags : {
//     type: schemas.hashTag,
//     optional:true
//   },
//   vote: {
//   type: schemas.vote,
//   optional: true
// }

// });

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
        type: [Object],
        optional: true
    },
    "post.$.postId": {
        type: String,
        optional : true
    },
    "post.$.createdAt": {
        type: String,
        optional : true

    },
      "post.$.address": {
      type: String,
        optional : true
    },
    "post.$.content": {
        type: String,
        optional : true

    },
    "post.$.hashtags" : {
      type:schemas.hashTag,
      optional : true
    },
    "post.$.vote" : {
      type:schemas.vote,
      optional : true
    }
});

Series.attachSchema(schemas.series);

