Template.studentLifeItemPage.helpers({
   studentliferatings: function() {
   	var selectedStudentLifeId = this._id;

   	var selectedStudentLife = StudentLifeLocations.findOne( {_id: selectedStudentLifeId});
   	console.log(selectedStudentLife.name);

   	//console.log(this._id);
   	console.log(StudentLifeRatings.find().fetch());
      //return StudentLifeRatings.find( {dining: selectedStudentLife.studentLife}, {sort: {submitted: -1}} );
      //return LibraryRatings.find( {library: selectedLibrary.name}, {sort: {submitted: -1}} );
      return StudentLifeRatings.find({studentLife: selectedStudentLife.name},  {sort: {submitted: -1}} );
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

Template.studentLifeItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('studentLifeList');
	},
    'click #upvoteStudentLifeRating': function(e)
    {
        e.preventDefault();
        console.log("You clicked the upvote Button!");
        Meteor.call('upvoteStudentLifeRating', this._id);
    }

})
