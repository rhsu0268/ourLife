Template.feedback.events({

	'click #submitFeedback': function(e)
	{
		Session.set('showDialog', false);

		//var selectedDining = $("#dining").val();
		var username = Meteor.user().username;
        var userEmail = Meteor.user().emails[0].address;

		console.log(userEmail);

		var userFeedback = {

			username: username,
			userEmail: userEmail,
			category: $("#category").val(),
			rating: $("#rating").val(),
			comment: $("#comment").val()
		};

		var errors = validateUserFeedback(userFeedback);

		if (errors.category || errors.rating || errors.comment)
		{
			return Session.set('feedbackFormErrors', errors);
		}

		Meteor.call('sendFeedback', userFeedback, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			//var dining = DiningLocations.findOne( {name: selectedDining} );
			//console.log(dining);
			//console.log(dining._id);

            console.log("Success!");
			$("#category").val("");
			$("#rating").val("");
			$("#comment").val("");
			Session.set('showDialog', true);

		});
	}


});

Template.rateDiningForm.onCreated(function() {
	Session.set('rateDiningFormErrors', {});
	Session.set('showDialog', false);

});



Template.feedback.helpers({
	errorMessage: function(field)
	{
		return Session.get('feedbackFormErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('feedbackFormErrors')[field] ? 'has-error' : '';
  	}

});

Template.feedback.showDialog = function() {
	return Session.get('showDialog');

};
