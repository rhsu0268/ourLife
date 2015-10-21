

Template.schoolItemPage.helpers({
   schoolratings: function() {
   	var selectedSchoolId = this._id;

   	var selectedSchool = Schools.findOne( {_id: selectedSchoolId});
   	console.log(selectedSchool.title);

   	//console.log(this._id);
   	console.log(SchoolRatings.find());
    return SchoolRatings.find( {school: selectedSchool.title}, {sort: {submitted: -1}} );
   },
 
   idFromHelper: function() {
   	  return this._id;
   }, 
   equals: function(a, b) {

      return a == b;
   }

});

Template.schoolItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('schoolList');
	}

})
