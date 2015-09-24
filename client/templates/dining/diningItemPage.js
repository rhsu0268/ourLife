Template.diningItemPage.helpers({
   diningratings: function() {
   	var selectedDiningId = this._id;

   	var selectedDining = DiningLocations.findOne( {_id: selectedDiningId});
   	console.log(selectedDining.name);

   	//console.log(this._id);
   	console.log(DiningRatings.find());
      return DiningRatings.find( {dining: selectedDining.name}, {sort: {submitted: -1}} );
   },
 
   idFromHelper: function() {
   	  return this._id;
   }

});

Template.diningItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('diningList');
	}

})