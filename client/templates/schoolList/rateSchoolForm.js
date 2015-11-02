Template.rateSchoolForm.events({
	'submit form': function(e)
	{
		e.preventDefault();

		console.log("Inserting...");

		var selectedSchool = $("#school").val();

		var schoolRating = {

			school: selectedSchool,
			category: $("#category").val(),
			rating: $("#rating").val(),
			comment: $("#comment").val()
		};

		var errors = validateSchoolRating(schoolRating);

		if (errors.school || errors.category || errors.rating || errors.comment)
		{
			return Session.set('rateSchoolFormErrors', errors);
		}

		var user = Meteor.users.findOne(Meteor.userId());

		Meteor.call('schoolRatingInsert', schoolRating, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			var school = Schools.findOne( {title: selectedSchool} );
			console.log(school);
			console.log(school._id);


			Router.go('schoolItemPage', {_id: school._id});


		});



	}


})

Template.rateSchoolForm.onCreated(function() {
	Session.set('rateSchoolFormErrors', {});

});

Template.rateSchoolForm.helpers({
	errorMessage: function(field)
	{
		return Session.get('rateSchoolFormErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('rateSchoolFormErrors')[field] ? 'has-error' : '';
  	},
	schoolList: function()
	{
		console.log(Schools.find({}, {sort: {'title': 1}}));
		return Schools.find({}, {sort: {'title': 1}});
	}

});
