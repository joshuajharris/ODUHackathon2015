Questions = new Mongo.Collection("questions");

if(Meteor.isClient){
  
  Session.setDefault('score', 0);

  Template.body.helpers({
    questions: function(){ return Questions.find({})},
    score: function(){ return Session.get('score')}
  });
  Template.question.events({
    'submit form':function(event, t){
      event.preventDefault();
      event.target[0].value = "";
      Session.set('score', Session.get('score') + 1);
    }
  });



  Questions.find({}).forEach(function(q){
    //Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.ans":{"id":q.id, "answered": false}}});
  });
}

var populateQuestions = function(){
  Questions.insert({question: "How much foo do you bar?", id: 0});
  Questions.insert({question: "How bar do you foo?", id: 1});
  Questions.insert({question: "Do you like foobar?", id: 2});
  Questions.insert({question: "Can you foobar?", id: 3});
}
