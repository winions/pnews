HashTags = new Mongo.Collection('hashTags');
var schemas = {};
HashTags.allow({
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
schemas.watchedBy = new SimpleSchema({
  watcherId : {
    type: String,
    optional : true
  },
});

schemas.hashTags = new SimpleSchema({
  name : {
    type: String,
    optional : true
  },
  watchedBy:{
    type :schemas.watchedBy,
    optional : true
  }
});


HashTags.attachSchema(schemas.hashTags);

