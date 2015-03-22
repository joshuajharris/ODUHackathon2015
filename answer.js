Answers = new Mongo.Collection("answers");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.Answer.helpers({
    answers: function () {
      return Answer.find({});
    }
  });

}