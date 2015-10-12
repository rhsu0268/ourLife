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

		var errors = validateLibraryRating(libraryRating);

		if (errors.library || errors.category || errors.rating || errors.comment)
		{
			return Session.set('rateLibraryFormErrors', errors);
		}

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

Template.rateLibraryForm.onCreated(function() {
	Session.set('rateLibraryFormErrors', {});

});

Template.rateLibraryForm.helpers({
	errorMessage: function(field)
	{
		return Session.get('rateLibraryFormErrors')[field];
	}, 
	errorClass: function (field) {
    	return !!Session.get('rateLibraryFormErrors')[field] ? 'has-error' : '';
  	}

});