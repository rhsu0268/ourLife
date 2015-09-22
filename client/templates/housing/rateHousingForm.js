Template.rateHousingForm.events({
	'submit form': function(e)
	{
		e.preventDefault();

		console.log("Inserting...");

		var selectedHousing = $("#housing").val();

		var housingRating = {

			housing: selectedHousing,
			category: $("#category").val(), 
			rating: $("#rating").val(),
			comment: $("#comment").val()
		};

		

		Meteor.call('housingRatingInsert', housingRating, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			var housing = Housings.findOne( {title: selectedHousing} );
			console.log(housing);
			console.log(housing._id);

			
			Router.go('housingItemPage', {_id: housing._id});


		});

		
	}


})