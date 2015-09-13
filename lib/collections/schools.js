// create a collection to store the timeLines
TimeLines = new Mongo.Collection('timelines');



// create a collection to store the campus Locations
Schools = new Mongo.Collection('schools');

SchoolRatings = new Mongo.Collection('schoolratings');

/*
SchoolRatings.allow({

	insert: function(userId, doc) {
		// only allow posing if you are logged in 
		return !! userId;
	}
})
*/

Meteor.methods({
	schoolRatingInsert: function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			school: String,
			category: String, 
			rating: String,
			comment: String

		});

		var user = Meteor.user();
		var rating = _.extend(ratingAttributes, {

			userId: user._id,
			author: user.username,
			submitted: new Date()

		});


		var ratingId = SchoolRatings.insert(rating);

		return {_id: ratingId};

	}, 
	imageInsert: function(image, userId)
	{

		check(userId, String);
		check (image, {

			"profile.image": String

		});
		
		console.log(image);
		console.log(userId);

		Meteor.users.update( 
			{ _id: userId }, 
			{$set: image}

		);

	},
	infoInsert: function(profileInfo, userId)
	{
		check(userId, String);
		check(profileInfo, {

			"profile.name": String,
			"profile.school": String,
			"profile.major": String,
			"profile.year": String,
			"profile.favoritePlace": String,
			"profile.favoritePart": String

		});

		console.log(profileInfo);

		Meteor.users.update(
			{_id: userId }, 
			{$set: profileInfo}
		);
	}, 
	eventInsert: function(eventInfo, userId)
	{
		check(userId, String);
		check(eventInfo, {

			"year": String, 
			"event": String
		});

			
		
		var eventArray = [];
		eventArray.push(eventInfo);
		console.log(eventArray);
		
		
		//var timeline = [];
		//console.log(typeof(timeline));
		

		
		Meteor.users.update(
			{_id: userId},
			{$push: {timeline: eventInfo}} 
			
		);
		
		
	}

});

CampusLocations = new Mongo.Collection('campuslocations');

Housings = new Mongo.Collection('housings');

DiningLocations = new Mongo.Collection('dininglocations');

LibraryLocations = new Mongo.Collection('librarylocations');

StudentLifeLocations = new Mongo.Collection('studentlifelocations');

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {

	stores: [imageStore]

});