Template.housingItemPage.helpers({
   housingratings: function() {
   	var selectedHousingId = this._id;

   	var selectedHousing = Housings.findOne( {_id: selectedHousingId});
   	console.log(selectedHousing.title);

   	//console.log(this._id);
   	console.log(HousingRatings.find());
    return HousingRatings.find( {housing: selectedHousing.title}, {sort: {submitted: -1}} );
   },
 
   idFromHelper: function() {
   	  return this._id;
   }

});

Template.housingItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('housingList');
	}

})