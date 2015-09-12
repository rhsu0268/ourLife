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

		/*
		SchoolRatings.insert({
			school: selectedSchool, 
			category: $("#category").val(), 
			rating: $("#rating").val(),
			comment: $("#comment").val()

		});
		*/

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