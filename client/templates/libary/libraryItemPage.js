Template.libraryItemPage.helpers({
   libraryratings: function() {
   	var selectedLibraryId = this._id;

   	var selectedLibrary = LibraryLocations.findOne( {_id: selectedLibraryId});
   	console.log(selectedLibrary.name);

   	//console.log(this._id);
   	console.log(LibraryRatings.find());
      return LibraryRatings.find( {library: selectedLibrary.name}, {sort: {submitted: -1}} );
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

Template.libraryItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('libraryList');
	},
    'click #upvoteLibraryRating': function(e)
    {
        e.preventDefault();
        console.log("You clicked the upvote Button!");
        Meteor.call('upvoteLibraryRating', this._id);
    }

})
