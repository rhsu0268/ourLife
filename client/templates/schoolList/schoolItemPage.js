

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
   }, 
   upVotedClass: function() {
      var userId = Meteor.userId();
      if (userId && !_.include(this.upvoters, userId))
      {
         console.log('btn-default');
         return 'btn-default';
      }
      else 
      {
         return 'btn-primary';
      }


   }


});

Template.schoolItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('schoolList');
	}, 
   'click #upvoteSchoolRating': function(e) {
      e.preventDefault();
      console.log("You clicked the upvote Button!");
      Meteor.call('upvoteSchoolRating', this._id);

   }

})

