Housings = new Mongo.Collection('housings');
VernHousings = new Mongo.Collection('vernhousings');
HousingRatings = new Mongo.Collection('housingratings');

Meteor.methods({

    housingRatingInsert: function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			housing: String,
			category: String,
			rating: String,
			comment: String

		});

		var errors = validateHousingRating(ratingAttributes);
    	if (errors.housing || errors.category || errors.rating || errors.comment)
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


		var ratingId = HousingRatings.insert(rating);

		Meteor.users.update({ "_id": user._id}, {$inc: {points: 2}});
		Meteor.users.update({ "_id": user._id}, {$inc: {ratingsPosted: 1}});

		return {_id: ratingId};
	},
    upvoteHousingRating: function(ratingId)
    {
        check(this.userId, String);
        check(ratingId, String);


        var rating = HousingRatings.findOne(ratingId);


        var affected = HousingRatings.update({
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
    removeHousingRating: function(selectedHousingRating, userId)
	{
		check(userId, String);
		check(selectedHousingRating, {

			"housing": String,
			"category": String,
			"rating": String,
			"comment": String
		});

		var housing = selectedHousingRating.housing;
		var category = selectedHousingRating.category;
		var rating = selectedHousingRating.rating;
		var comment = selectedHousingRating.comment;
		var rating = HousingRatings.findOne({"userId": userId, "housing": housing, "category": category, "rating": rating, "comment": comment});
		console.log(rating);
		HousingRatings.remove(rating);
	}

});

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
