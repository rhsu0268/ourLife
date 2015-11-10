Template.feedback.helpers({
	errorMessage: function(field)
	{
		return Session.get('feedbackFormErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('feedbackFormErrors')[field] ? 'has-error' : '';
  	}

});
