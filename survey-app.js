if (Meteor.isClient) {
  Session.setDefault('state', 'register');

  Template.body.helpers({
    state: function(){ return Session.get('state') },
    isProfileState: function(){ return Session.get('state') == 'profile'}           
  });

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
