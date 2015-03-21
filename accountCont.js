if(Meteor.isClient) {

  Template.register.events({
    "submit form": function(event){
      
      var email = event.target.email.value;
      var pass = event.target.password.value;

      if(event.target.password.value === event.target.passConfirm.value){
        Accounts.createUser({
          email: email,
          password: pass
        });
      }

      return false;
    }
  });

  Accounts.ui.config({                
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });
};

if(Meteor.isServer) {

};
