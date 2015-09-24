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
   }

});

Template.libraryItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('libraryList');
	}

})