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

		var errors = validateHousingRating(housingRating);

		if (errors.housing || errors.category || errors.rating || errors.comment)
		{
			return Session.set('rateHousingFormErrors', errors);
		}

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

Template.rateHousingForm.onCreated(function() {
	Session.set('rateHousingFormErrors', {});

});

Template.rateHousingForm.helpers({
	errorMessage: function(field)
	{
		return Session.get('rateHousingFormErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('rateHousingFormErrors')[field] ? 'has-error' : '';
  	},
    housingList: function()
    {
        console.log(Housings.find({}, {sort: {'title': 1}}));
        return Housings.find({}, {sort: {'title': 1}});
    }

});
