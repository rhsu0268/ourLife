Template.studentLifeItemPage.helpers({
   studentliferatings: function() {
   	var selectedStudentLifeId = this._id;

   	var selectedStudentLife = StudentLifeLocations.findOne( {_id: selectedStudentLifeId});
   	console.log(selectedStudentLife.name);

   	//console.log(this._id);
   	console.log(StudentLifeRatings.find());
      return StudentLifeRatings.find( {dining: selectedStudentLife.studentLife}, {sort: {submitted: -1}} );
   },
 
   idFromHelper: function() {
   	  return this._id;
   }

});

Template.studentLifeItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('studentLifeList');
	}

})