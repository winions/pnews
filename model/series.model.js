var postSchema, voteSchema,hashtagSchema,seriesSchema;

Series = new Mongo.Collection('series');

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

postSchema = new SimpleSchema({
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
    type: [hashtagSchema],
    optional:true
  },
  vote: {
  type: [voteSchema],
  optional: true
}

});
voteSchema = new SimpleSchema({
  voter: {
    type: String,
    optional : true
  },
  voteType : {
    type: String,
    optional:true
  }
});
hashtagSchema = new SimpleSchema({
  name : {
    type: String,
    optional : true
  }
});
seriesSchema = new SimpleSchema({
  authorId: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    max: 60
  },
  post: {
    type: [postSchema],
    optional: true
  }
});

Series.attachSchema(seriesSchema);

