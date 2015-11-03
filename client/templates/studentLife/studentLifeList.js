Template.studentLifeList.helpers({
   studentlifelocations: function() {
      return StudentLifeLocations.find({}, {sort: {'name': 1}});
   }
});
