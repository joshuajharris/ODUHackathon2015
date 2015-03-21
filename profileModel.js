if (Meteor.isClient) {

Profile = new Mongo.Collection("profile");

Profile.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Gender",
    max: 200
  },
  author: {
    type: String,
    label: "Grade-Year"
  },
  copies: {
    type: Number,
    label: "Age",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Expected Graduation",
    optional: true
  },
  summary: {
    type: String,
    label: "About",
    optional: true,
    max: 1000
  }
}));
		
};