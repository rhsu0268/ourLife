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

		var errors = validateDiningRating(diningRating);

		if (errors.dining || errors.category || errors.rating || errors.comment)
		{
			return Session.set('rateDiningFormErrors', errors);
		}

		Meteor.call('diningRatingInsert', diningRating, function(error, result) {
			// display the error to the user and abort
			if (error)
			{
				return alert(error.reason);
			}

			var dining = DiningLocations.findOne( {name: selectedDining} );
			//console.log(dining);
			//console.log(dining._id);

			if (!dining)
			{
				console.log("Location is not in DiningLocation!");
				dining = JStreetOptions.findOne( {name: selectedDining} );
				console.log(dining);
				Router.go('jStreetItemPage', {_id: dining._id});
			}
			else
			{
				Router.go('diningItemPage', {_id: dining._id});
			}


		});
	}


});

Template.rateDiningForm.onCreated(function() {
	Session.set('rateDiningFormErrors', {});

});

Template.rateDiningForm.helpers({
	errorMessage: function(field)
	{
		return Session.get('rateDiningFormErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('rateDiningFormErrors')[field] ? 'has-error' : '';
  	},
    diningList: function()
    {
        console.log(DiningLocations.find({}, {sort: {'title': 1}}).fetch());
        return DiningLocations.find();
    },
	jStreetOptions: function()
	{
		console.log(DiningLocations.find({}, {sort: {'title': 1}}).fetch());
        return JStreetOptions.find();
	}

});
