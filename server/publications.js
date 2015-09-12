

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

Meteor.publish('dininglocations', function() 
{
   return DiningLocations.find();
});

Meteor.publish('librarylocations', function() 
{
   return LibraryLocations.find();
});

Meteor.publish('studentlifelocations', function() 
{
   return StudentLifeLocations.find();
});

Meteor.publish('images', function() 
{
   return Images.find();
});