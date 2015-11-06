Template.diningList.helpers({
   dinings: function() {
      return DiningLocations.find();
  },
  jStreetOptions: function() {
      return JStreetOptions.find();

  }
});
