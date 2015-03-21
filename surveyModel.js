if(Meteor.isClient) {

Session.setDefault('question', "");

	Template.survey.helpers({
		questions = [{"Who are You": ""},{"What Are You",""},{"What",""}]
	});

	Template.surver.events({});
}