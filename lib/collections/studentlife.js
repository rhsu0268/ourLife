StudentLifeLocations = new Mongo.Collection('studentlifelocations');
StudentLifeRatings = new Mongo.Collection('studentliferatings');

Meteor.methods({
    'studentLifeInsert': function(ratingAttributes)
	{
		check(Meteor.userId(), String);
		check(ratingAttributes, {

			studentLife: String,
			category: String,
			rating: String,
			comment: String


		});



		var errors = validateStudentLifeRating(ratingAttributes);
    	if (errors.studentLife || errors.category || errors.rating || errors.comment)
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


		var ratingId = StudentLifeRatings.insert(rating);

		Meteor.users.update({ "_id": user._id}, {$inc: {points: 2}});
		Meteor.users.update({ "_id": user._id}, {$inc: {ratingsPosted: 1}});

		return {_id: ratingId};
	},
    upvoteStudentLifeRating: function(ratingId)
	{
		check(this.userId, String);
		check(ratingId, String);


		var rating = StudentLifeRatings.findOne(ratingId);


		var affected = StudentLifeRatings.update({
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
    removeStudentLifeRating: function(selectedStudentLifeRating, userId)
    {
        check(userId, String);
        check(selectedStudentLifeRating, {

            "studentLife": String,
            "category": String,
            "rating": String,
            "comment": String
        });

        var studentLife = selectedStudentLifeRating.studentLife;
        var category = selectedStudentLifeRating.category;
        var rating = selectedStudentLifeRating.rating;
        var comment = selectedStudentLifeRating.comment;
        console.log(studentLife + category + rating + comment);
        var rating = StudentLifeRatings.findOne({"userId": userId, "studentLife": studentLife, "category": category, "rating": rating, "comment": comment});
        console.log(rating);
        StudentLifeRatings.remove(rating);
    }

});

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
