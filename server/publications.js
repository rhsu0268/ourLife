Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, {fields: {timeline: 1}});
});

Meteor.publish('schools', function() 
{
   return Schools.find();
});

Meteor.publish('schoolratings', function() 
{
   return SchoolRatings.find();
});

Meteor.publish('campuslocations', function() 
{
   return CampusLocations.find();
});

Meteor.publish('housings', function() 
{
   return Housings.find();
});

Meteor.publish('housingratings', function() 
{
   return HousingRatings.find();
});

Meteor.publish('dininglocations', function() 
{
   return DiningLocations.find();
});

Meteor.publish('diningratings', function() 
{
   return DiningRatings.find();
});

Meteor.publish('librarylocations', function() 
{
   return LibraryLocations.find();
});

Meteor.publish('libraryratings', function()
{
   return LibraryRatings.find();
});

Meteor.publish('studentlifelocations', function() 
{
   return StudentLifeLocations.find();
});

Meteor.publish('studentliferatings', function() 
{
   return StudentLifeRatings.find();
});

Meteor.publish('images', function() 
{
   return Images.find();
});