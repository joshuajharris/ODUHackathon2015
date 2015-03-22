Question = new Mongo.Collection("question");

if (Meteor.isClient) {
  
  Template.Question.helpers({
    
    question: function () {
      return Question.find({});
    
    }

  });

}