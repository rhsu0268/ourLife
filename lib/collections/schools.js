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
			submitted: new Date(),
			upvoters: [],
			votes: 0

		});



		var ratingId = SchoolRatings.insert(rating);

		Meteor.users.update({ "_id": user._id}, {$inc: {points: 2}});
		Meteor.users.update({ "_id": user._id}, {$inc: {ratingsPosted: 1}});

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
	upvoteSchoolRating: function(ratingId)
	{
		check(this.userId, String);
		check(ratingId, String);


		var rating = SchoolRatings.findOne(ratingId);
		/*
		if (!rating)
		{
			throw new Meteor.Error('invalid', 'Rating not found');
		}
		if (_.include(rating.upvoters, this.userId))
		{
			throw new Meteor.Error('invalid', 'Already upvoted this post');
		}
		*/


		var affected = SchoolRatings.update({
			_id: ratingId,
			upvoters: {$ne: this.userId}
			}, {
				$addToSet: {upvoters: this.userId},
				$inc: {votes: 1}

		});


		if (!affected)
		{
			throw new Meteor.Error('invalid', "You weren't able to upvote that rating");
		}
	},
	removeTimelineEvent: function(eventInfo, userId)
	{
		check(userId, String);
		check(eventInfo, {

			"year": String,
			"event": String
		});

		Meteor.users.update({ "_id": userId},

			{"$pull": {"timeline" : { "year": eventInfo.year, "event": eventInfo.event}} }

		);
	},
	removeSchoolRating: function(selectedSchoolRating, userId)
	{
		check(userId, String);
		check(selectedSchoolRating, {

			"school": String,
			"category": String,
			"rating": String,
			"comment": String
		});

		var school = selectedSchoolRating.school;
		var category = selectedSchoolRating.category;
		var rating = selectedSchoolRating.rating;
		var comment = selectedSchoolRating.comment;
		var rating = SchoolRatings.findOne({"userId": userId, "school": school, "category": category, "rating": rating, "comment": comment});
		console.log(rating);
		SchoolRatings.remove(rating);
	}

});

CampusLocations = new Mongo.Collection('campuslocations');


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


validateEventInfo = function(eventInfo)
{
	console.log(eventInfo);
	var errors = {};
	if (eventInfo.year.length == 0)
	{
		errors.year = "Please provide a year for the event";
	}
	if (eventInfo.event.length == 0)
	{
		errors.event = "Please provide an event";
	}
	return errors;
}

validateEmailInfo = function(recipientName, recipientEmail)
{
	console.log(recipientName);
	var errors = {};
	if (recipientName.length == 0)
	{
		errors.name = "Please provide a name for the recipient";
	}
	if (recipientEmail.length == 0)
	{
		errors.email = "Please provide an email for the recipient";
	}
	return errors;
}

validateRecommendInfo = function(recipientName, recipientEmail, location, message)
{
	console.log(recipientName);
	var errors = {};
	if (recipientName.length == 0)
	{
		errors.rName = "Please provide a name for the recipient";
	}
	if (recipientEmail.length == 0)
	{
		errors.rEmail = "Please provide an email for the recipient";
	}
	//console.log("Location: " + location);
	if (location == null || location.length == 0)
	{
		errors.location = "Please provide a location";
	}
	console.log(message);
	if (message.length == 0)
	{
		errors.message = "Please provide a recommendation message";
	}
	return errors;


}
