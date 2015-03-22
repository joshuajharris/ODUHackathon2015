Questions = new Mongo.Collection("questions");

if(Meteor.isClient){
  
  Template.body.helpers({
    questions: function(){ return Questions.find({})}
  }); 

  Questions.insert({question: "How much foo do you bar?", id: 0});
  Questions.insert({question: "How bar do you foo?", id: 1});
  Questions.insert({question: "Do you like foobar?", id: 2});
  Questions.insert({question: "Can you foobar?", id: 3});


  Questions.find({}).forEach(function(q){
    //Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.ans":{"id":q.id, "answered": false}}});
  });
}
