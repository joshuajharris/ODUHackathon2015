if(Meteor.isClient) {
  Template.profile.events({
    'submit .edit-profile': function(event){
      event.preventDefault();

      var email = event.target.email.value,
          first = event.target.first.value,
          last = event.target.last.value;

      if(first) {
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.fname":first}});
        event.target.first.value = "";
      } 
    }
  });
}

if(Meteor.isServer) {

}
