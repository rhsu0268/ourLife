LibraryLocations = new Mongo.Collection('librarylocations');
LibraryRatings = new Mongo.Collection('libraryratings');

Meteor.methods({

    libraryRatingInsert: function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			library: String,
			category: String,
			rating: String,
			comment: String

		});

		var errors = validateLibraryRating(ratingAttributes);
    	if (errors.library || errors.category || errors.rating || errors.comment)
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


		var ratingId = LibraryRatings.insert(rating);

		Meteor.users.update({ "_id": user._id}, {$inc: {points: 2}});
		Meteor.users.update({ "_id": user._id}, {$inc: {ratingsPosted: 1}});

		return {_id: ratingId};
	},
    upvoteLibraryRating: function(ratingId)
	{
		check(this.userId, String);
		check(ratingId, String);


		var rating = LibraryRatings.findOne(ratingId);


		var affected = LibraryRatings.update({
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
    removeLibraryRating: function(selectedLibraryRating, userId)
	{
		check(userId, String);
		check(selectedLibraryRating, {

			"library": String,
			"category": String,
			"rating": String,
			"comment": String
		});

		var library = selectedLibraryRating.library;
		var category = selectedLibraryRating.category;
		var rating = selectedLibraryRating.rating;
		var comment = selectedLibraryRating.comment;
		//console.log(library + category + rating + comment);
		var rating = LibraryRatings.findOne({"userId": userId, "library": library, "category": category, "rating": rating, "comment": comment});
		console.log(rating);
		LibraryRatings.remove(rating);
	}


});

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
