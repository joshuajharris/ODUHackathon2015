if(Meteor.isClient) {

Survey = new Mongo.Collection("Survey");

Survey.attachSchema(new SimpleSchema({
  question: {
    type: String,
    max: 100
  },
  response: {
    type: String,
    max: 50
  },
  duration: {
    type: Number,
    max: 60
  },
  description: {
    type: String,
    max: 250
  },
  weight : {
  	type: Number,
  	max: 10
  }
	}));
}

if (Meteor.isClient) {
  // This code only runs on the client
  Template.Survey.helpers({
    survey: function () {
      return Survey.find({});
    }
  });

}
