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