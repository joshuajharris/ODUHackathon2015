if(Meteor.isClient) {
  Session.setDefault('fname', 'Add a name');
  Session.setDefault('changeEmail', false);

  Template.profile.helpers({
    fname: function(){ return Session.get('fname') },
    lname: function(){ return Session.get('lname') },
    canChangeEmail: function(){ return Session.get('changeEmail') }
  });

  Template.profile.events({
    'click .changeEmailLink': function(){
      Session.set('changeEmail', true);
    },
    'submit form': function(event){
      event.preventDefault();

      var email = event.target.email.value,
          pass = event.target.pass.value,
          passConfirm = event.target.passConfirm.value,
          first = event.target.first.value,
          last = event.target.last.value;
      if(email){
        event.target.email.value = "";
        Session.set('changeEmail',false);
      }
      if(pass == passConfirm){
        //Meteor.users.update({_id:Meteor.user()._id},{$set:{"password":pass}});
        event.target.pass.value = "";
        event.target.passConfirm.value= "";
      }

      if(first) {
        Session.set('fname', first);
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.fname":first}});
        event.target.first.value = "";
      }

      if(last) {
        Session.set('lname', last);
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.lname":last}});
        event.target.last.value = "";
      } 
    }
  });
}

if(Meteor.isServer) {

}
