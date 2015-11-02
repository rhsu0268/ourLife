Template.libraryList.helpers({
   librarylocations: function() {
      return LibraryLocations.find({}, {sort: {'name': 1}});
   }
});
