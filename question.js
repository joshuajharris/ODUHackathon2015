Question = new Mongo.Collection("question");

if (Meteor.isClient) {
  
  Template.Question.helpers({
    
    question: function () {
      return Question.find({});
    
    }

  });
Question.insert({question:"Foobar"})
Question.insert({question:"Foo"})
Question.insert({question:"Foob"})
Question.insert({question:"Foobar"})
}