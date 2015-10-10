var hashtagsSchema,watchedByScehma;

Hashtags = new Mongo.Collection('hashtags');

Hashtags.allow({
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


hashtagsSchema = new SimpleSchema({
  name : {
    type: String,
    optional : true
  },
  watchedBy:{
    type :[watchedByScehma],
    optional : true
  }
});
watchedByScehma = new SimpleSchema({
  watcherId : {
    type: String,
    optional : true
  },
});

Hashtags.attachSchema(hashtagsSchema);

