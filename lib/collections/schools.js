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

		var errors = validateSchoolRating(ratingAttributes);
    	if (errors.school || errors.category || errors.rating || errors.comment)
    	{
      		throw new Meteor.Error('invalid-rating', "You must set all the fields when submitting a rating");
      	}

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
		//console.log(eventArray);
		
		
		//var timeline = [];
		//console.log(typeof(timeline));
		

		
		Meteor.users.update(
			{_id: userId},
			{$push: {timeline: eventInfo}} 
			
		);
		
		
	},
	housingRatingInsert: function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			housing: String,
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


		var ratingId = HousingRatings.insert(rating);

		return {_id: ratingId};
	}, 
	diningRatingInsert: function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			dining: String,
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


		var ratingId = DiningRatings.insert(rating);

		return {_id: ratingId};
	}, 
	libraryRatingInsert: function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			library: String,
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


		var ratingId = LibraryRatings.insert(rating);

		return {_id: ratingId};
	}, 
	'studentLifeInsert': function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			studentLife: String,
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


		var ratingId = StudentLifeRatings.insert(rating);

		return {_id: ratingId};
	}

});

CampusLocations = new Mongo.Collection('campuslocations');

Housings = new Mongo.Collection('housings');
HousingRatings = new Mongo.Collection('housingratings');

DiningLocations = new Mongo.Collection('dininglocations');
DiningRatings = new Mongo.Collection('diningratings');

LibraryLocations = new Mongo.Collection('librarylocations');
LibraryRatings = new Mongo.Collection('libraryratings');

StudentLifeLocations = new Mongo.Collection('studentlifelocations');
StudentLifeRatings = new Mongo.Collection('studentliferatings');

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {

	stores: [imageStore]

});

validateSchoolRating = function(schoolRating)
{
	console.log(schoolRating);
	var errors = {};
	if (schoolRating.school.length == 0)
	{
		errors.school = "Please provide a school";
	}
	if (schoolRating.category.length == 0)
	{
		errors.category = "Please provide a category";
	}
	if (schoolRating.rating.length == 0)
	{
		errors.rating = "Please provide a rating";
	}
	if (schoolRating.comment.length == 0)
	{
		errors.comment = "Please provide a comment";
	}
	
	return errors;
}

validateHousingRating = function(housingRating)
{
	console.log(housingRating);
	var errors = {};
	if (housingRating.housing.length == 0)
	{
		errors.housing = "Please provide a school";
	}
	if (housingRating.category.length == 0)
	{
		errors.category = "Please provide a category";
	}
	if (housingRating.rating.length == 0)
	{
		errors.rating = "Please provide a rating";
	}
	if (housingRating.comment.length == 0)
	{
		errors.comment = "Please provide a comment";
	}
	
	return errors;
}

validateDiningRating = function(diningRating)
{
	console.log(diningRating);
	var errors = {};
	if (diningRating.dining.length == 0)
	{
		errors.dining = "Please provide a dining location";
	}
	if (diningRating.category.length == 0)
	{
		errors.category = "Please provide a category";
	}
	if (diningRating.rating.length == 0)
	{
		errors.rating = "Please provide a rating";
	}
	if (diningRating.comment.length == 0)
	{
		errors.comment = "Please provide a comment";
	}
	return errors;
}

validateLibraryRating = function(libraryRating)
{
	console.log(libraryRating);
	var errors = {};
	if (libraryRating.library.length == 0)
	{
		errors.library = "Please provide a library location";
	}
	if (libraryRating.category.length == 0)
	{
		errors.category = "Please provide a category";
	}
	if (libraryRating.rating.length == 0)
	{
		errors.rating = "Please provide a rating";
	}
	if (libraryRating.comment.length == 0)
	{
		errors.comment = "Please provide a comment";
	}
	return errors;
}

validateStudentLifeRating = function(studentLifeRating)
{
	console.log(studentLifeRating);
	var errors = {};
	if (studentLifeRating.studentLife.length == 0)
	{
		errors.studentLife = "Please provide a student life location";
	}
	if (studentLifeRating.category.length == 0)
	{
		errors.category = "Please provide a category";
	}
	if (studentLifeRating.rating.length == 0)
	{
		errors.rating = "Please provide a rating";
	}
	if (studentLifeRating.comment.length == 0)
	{
		errors.comment = "Please provide a comment";
	}
	return errors;
}