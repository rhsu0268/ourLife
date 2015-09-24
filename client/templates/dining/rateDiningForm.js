Template.rateDiningForm.events({

	'click #submitRating': function(e)
	{
		console.log("Inserting...");

		var selectedDining = $("#dining").val();

		var diningRating = {

			dining: selectedDining,
			category: $("#category").val(), 
			rating: $("#rating").val(),
			comment: $("#comment").val()
		};

		Meteor.call('diningRatingInsert', diningRating, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			var dining = DiningLocations.findOne( {name: selectedDining} );
			console.log(dining);
			console.log(dining._id);

			
			Router.go('diningItemPage', {_id: dining._id});


		});
	}


});