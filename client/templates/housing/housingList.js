

Template.housingList.helpers({
   housings: function() {
      return Housings.find();
  },
  vernHousings: function()
  {
      return VernHousings.find();
  }
});
