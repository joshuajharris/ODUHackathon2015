if (Meteor.isClient) {
  Session.setDefault('state', 'home');
  // allow body to get state
  Template.body.helpers({
    state: function(){ return Session.get('state') },
    isProfileState: function(){ return Session.get('state') == 'profile'},         
    isHomeState: function() { return Session.get('state') == 'home'}
  });
  // add an event listener to profile link to change state
  Template.body.events({
    'click .profileLink': function(event) {
      Session.set('state', 'profile'); 
    },
    'click .homeLink': function(event) {
      Session.set('state', 'home'); 
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  
  });
}
