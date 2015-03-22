if(Meteor.isClient) {

  Template.register.events({
    "submit form": function(event){
      var email = event.target[0].value;
      var pass = event.target[2].value;
      var uName = event.target[1].value;
      
      if(pass === event.target[3].value){
        Accounts.createUser({
          email: email,
          username: uName,
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
