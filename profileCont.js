if(Meteor.isClient) {

  Template.profile.helpers({
    fname: function(){ return Session.get('fname') }
  });

  Template.profile.events({
    'submit .edit-profile': function(event){
      event.preventDefault();

      var email = event.target.email.value,
          pass = event.target.pass.value,
          passConfirm = event.target.passConfirm.value,
          first = event.target.first.value,
          last = event.target.last.value;
/*
      if(pass == passConfirm){
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"password":pass}});
        event.target.pass.value = "";
        event.target.passConfirm.value= "";
      }
*/
      if(first) {
        Session.set('fname', first);
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.fname":first}});
        event.target.first.value = "";
      }

      if(last) {
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.lname":last}});
        event.target.last.value = "";
      } 
    }
  });
}

if(Meteor.isServer) {

}
