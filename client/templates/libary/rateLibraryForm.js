Template.rateLibraryForm.events({

	'click #submitRating': function(e)
	{
		console.log("Inserting...");

		var selectedLibrary = $("#library").val();

		var libraryRating = {

			library: selectedLibrary,
			category: $("#category").val(), 
			rating: $("#rating").val(),
			comment: $("#comment").val()
		};

		Meteor.call('libraryRatingInsert', libraryRating, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			var library = LibraryLocations.findOne( {name: selectedLibrary} );
			console.log(library);
			console.log(library._id);

			
			Router.go('libraryItemPage', {_id: library._id});


		});
	}


});