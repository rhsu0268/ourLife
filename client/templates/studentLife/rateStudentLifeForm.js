Template.rateStudentLifeForm.events({

	'click #submitRating': function(e)
	{
		console.log("Inserting...");

		var selectedStudentLife = $("#studentLife").val();

		var studentLifeRating = {

			studentLife: selectedStudentLife,
			category: $("#category").val(),
			rating: $("#rating").val(),
			comment: $("#comment").val()
		};

		var errors = validateStudentLifeRating(studentLifeRating);

		if (errors.studentLife || errors.category || errors.rating || errors.comment)
		{
			return Session.set('rateStudentLifeFormErrors', errors);
		}


		Meteor.call('studentLifeInsert', studentLifeRating, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			var studentLife = StudentLifeLocations.findOne( {name: selectedStudentLife} );
			console.log(studentLife);
			console.log(studentLife._id);


			Router.go('studentLifeItemPage', {_id: studentLife._id});


		});
	}


});

Template.rateStudentLifeForm.onCreated(function() {
	Session.set('rateStudentLifeFormErrors', {});

});

Template.rateStudentLifeForm.helpers({
	errorMessage: function(field)
	{
		return Session.get('rateStudentLifeFormErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('rateStudentLifeFormErrors')[field] ? 'has-error' : '';
  	},
	studentLifeList: function()
    {
        console.log(StudentLifeLocations.find({}, {sort: {'name': 1}}).fetch());
        return StudentLifeLocations.find({}, {sort: {'name': 1}}).fetch();
    }

});
