DiningLocations = new Mongo.Collection('dininglocations');
DiningRatings = new Mongo.Collection('diningratings');
JStreetOptions = new Mongo.Collection('jstreetoptions');

Meteor.methods({

    diningRatingInsert: function(ratingAttributes)
    {
        check(Meteor.userId(), String);
        check(ratingAttributes, {

            dining: String,
            category: String,
            rating: String,
            comment: String

        });

        var errors = validateDiningRating(ratingAttributes);
        if (errors.dining || errors.category || errors.rating || errors.comment)
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


        var ratingId = DiningRatings.insert(rating);

        Meteor.users.update({ "_id": user._id}, {$inc: {points: 2}});
        Meteor.users.update({ "_id": user._id}, {$inc: {ratingsPosted: 1}});

        return {_id: ratingId};
    },
    upvoteDiningRating: function(ratingId)
	{
		check(this.userId, String);
		check(ratingId, String);


		var rating = DiningRatings.findOne(ratingId);


		var affected = DiningRatings.update({
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
    removeDiningRating: function(selectedDiningRating, userId)
	{
		check(userId, String);
		check(selectedDiningRating, {

			"dining": String,
			"category": String,
			"rating": String,
			"comment": String
		});

		var dining = selectedDiningRating.dining;
		var category = selectedDiningRating.category;
		var rating = selectedDiningRating.rating;
		var comment = selectedDiningRating.comment;
		console.log(dining + category + rating + comment);
		var rating = DiningRatings.findOne({"userId": userId, "dining": dining, "category": category, "rating": rating, "comment": comment});
		console.log(rating);
		DiningRatings.remove(rating);
	}

});

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
