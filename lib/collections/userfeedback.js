validateUserFeedback = function(userFeedback)
{
	console.log(userFeedback);
	var errors = {};
	if (userFeedback.category.length == 0)
	{
		errors.category = "Won't you be so kind as to give a category for your feedback!";
	}
	if (userFeedback.rating.length == 0)
	{
		errors.rating = "Won't you be so kind as to give us a rating!";
	}
	if (userFeedback.comment.length == 0)
	{
		errors.comment = "Won't you be so kind as to give us a feedback!";
	}
	return errors;
}
