Questions = new Mongo.Collection("questions");

if(Meteor.isClient){
  
  Template.body.helpers({
    questions: function(){ return Questions.find({})}
  }); 

}
