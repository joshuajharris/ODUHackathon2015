if (Meteor.isClient) {
  Session.setDefault('state', 'register');
  // allow body to get state
  Template.body.helpers({
    state: function(){ return Session.get('state') },
    isProfileState: function(){ return Session.get('state') == 'profile'}           
  });
  // add an event listener to profile link to change state
  Template.body.events({
    'click .profileLink': function(event) {
      Session.set('state', 'profile'); 
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  
  });
}
