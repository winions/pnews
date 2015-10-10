var Schema = {};
Schema.watchedBy = new SimpleSchema({
  watcherId : {
    type: String,
    optional : true
  }
});

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: String,
        optional: true
    },
    userImage:{
    type :String,
    optional : true
    },
    watchedBy:{
      type :Schema.watchedBy,
      optional : true
    }
});


Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    }
});

Meteor.users.attachSchema(Schema.User);





