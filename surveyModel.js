if(Meteor.isClient) {

Survey = new Mongo.Collection("Questions");

Survey.attachSchema(new SimpleSchema({
  question: {
    type: String,
    max: 100
  },
  response: {
    type: String,
    max: 50
  },
  duration: {
    type: Number,
    max: 60
  },
  description: {
    type: String,
    max: 250
  },
  weight : {
  	type: Number,
  	max: 10
  }
	}));
Survey.insert({question:"Hello",response:"",duration:30,description:"lalla",weight: 2});
Survey.insert({question:"Helasdasdlo",response:"as",duration:30,description:"lalla",weight: 2});
Survey.insert({question:"Heasdasadasllo",response:"asdasd",duration:30,description:"lalla",weight: 2});
Survey.insert({question:"HeZXllo"},{response:"zxZX"},{duration:30},{description:"aalalla"},{weight: 2});
}

if (Meteor.isClient) {
  // This code only runs on the client
  Template.Survey.helpers({
    tasks: function () {
      return Survey.find({});
    }
  });

}
