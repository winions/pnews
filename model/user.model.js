var usersSchema,watchedByScehma;

Users = new Mongo.Collection('users');

Users.allow({
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
Users.before.insert(function(userId, doc) {
  return doc.createdAt = new Date() ; 
});


usersSchema = new SimpleSchema({
  firstName : {
    type: String,
    optional : true
  },
  lastName:{
    type :string,
    optional : true
  },
  userImage:{
    type :String,
    optional : true
  },
  watchedBy:{
    type :[watchedByScehma],
    optional : true
  },
    createdAt:{
    type :Date,
    optional : true
  },
    Bio:{
    type :String,
    optional : true
  },
    Country:{
    type :String,
    optional : true
  }      
});
watchedByScehma = new SimpleSchema({
  watcherId : {
    type: String,
    optional : true
  }
});
Users.attachSchema(usersSchema);

