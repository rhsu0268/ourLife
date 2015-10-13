

Template.profile.events({
	'change .myFileInput': function(event, template)
	{
		FS.Utility.eachFile(event, function(file)
		{
			Images.insert(file, function(err, fileObj) 
			{
				if (err)
				{
					// handle error
					console.log("error!");
				}
				else 
				{
					// handle success
					var userId = Meteor.userId();
					var imageUpload = "/cfs/files/images/" + fileObj._id;
					console.log(imageUpload);
					//$('#profile-img').attr("src", imageUpload);
					var imageURL = 
					{
						"profile.image": "/cfs/files/images/" + fileObj._id
					};
					//Meteor.users.update(userId, {$set: imageURL});
					//console.log(imageURL);

					Meteor.call('imageInsert', imageURL, userId, function(error, result) {
						// display the error to the user and abort
						if (error)
						{
							return alert(error.reason);
						}

						//$('#profile-img').attr("src", "img/colonial-profile.jpg");
						
						
					});
				}
			});
		});
	},
	'click #uploadPhoto': function(event, template)
	{
		event.preventDefault();
		console.log("You clicked!");
		$('#myModal').modal('toggle');

		var userId = Meteor.userId();
		console.log(userId);
		var user = Meteor.users.findOne(userId);
		console.log(user.profile);
		console.log(user.profile.image);
		//Router.go("profileUpdate");
		$('#profile-img').attr("src", user.profile.image);
		//$('#profile-img').attr("src", "img/colonial-profile.jpg");

	},
	'click #uploadInfo': function(event, template)
	{
		event.preventDefault();
		console.log("You clicked!");
		$('#userInfo').modal('toggle');

		var userId = Meteor.userId();
		console.log(userId);
		var user = Meteor.users.findOne(userId);


		/*
		console.log($('#name').val());
		console.log($('#school').val());
		console.log($('#major').val());
		console.log($('#year').val());
		console.log($('#favoritePlace').val());
		console.log($('#favoritePart').val());
		*/
		
		var userInfo = {

			"profile.name": $('#name').val(),
			"profile.school": $('#school').val(), 
			"profile.major": $('#major').val(),
			"profile.year": $('#year').val(),
			"profile.favoritePlace": $('#favoritePlace').val(),
			"profile.favoritePart": $('#favoritePart').val()

		};
		
		Meteor.call('infoInsert', userInfo, userId, function(error, result) {

			if (error)
			{
				return alert(error.reason);
			}
		});
	}, 
	'click #uploadEvent': function(event, template)
	{
		event.preventDefault();
		console.log("You clicked add Event!");

		

		var userId = Meteor.userId();
		console.log(userId);
		var user = Meteor.users.findOne(userId);

		var eventInfo = {
			"year": $('#eventYear').val(),
			"event": $('#event').val()
		};

		var errors = validateEventInfo(eventInfo);

		if (errors.year)
		{
			return Session.set('timelineFormErrors', errors);
		}


		Meteor.call('eventInsert', eventInfo, userId, function(error, result) {

			if (error)
			{
				return alert(error.reason);
			}

		var timelineSection = $("#events ul");
		timelineSection.append("<li class='list-group-item'>" + eventInfo.year + ": " + eventInfo.event + "</li>");

		});

		$('#timeLine').modal('toggle');


	},
	'click #sendEmail': function()
	{
		console.log("you clicked email.");

		var recipientName = $('#recipientName').val();
		var recipientEmail = $('#recipientEmail').val();
		console.log(recipientEmail);

		var userName = Meteor.users.findOne(Meteor.userId()).profile.name;
		console.log(userName);

		if (!userName)
		{
			console.log("Please fill in your profile with a valid name!");
			throwError("Please fill in your profile with a name!");
			$('#shareRating').modal('toggle');
			return;
		}
		var userEmail = Meteor.users.findOne(Meteor.userId()).emails[0].address;
		console.log(userEmail);

		$('#shareRating').modal('toggle');
		$('#recipientName').val('');
		$('#recipientEmail').val('');

		var rating = Session.get('selectedRating');

		var messageTitle = "A friend has just shared a rating with you!";
		var message = "I was at the " + rating.location + ", and I want to give a rating on " + rating.category + "." +
			"<br>" + "The score is " + rating.rating + " out of 5 and my comment is the following: " + rating.comment;

		// call sendEmail method

		Meteor.call('sendRating', recipientEmail, recipientName, userEmail, userName, messageTitle, message, function(error, result) {
			// display the error to the user and abort
			if (error) {
				return alert(error.reason);
			}

		});
	}, 
	'click #recommendEmail': function()
	{
		console.log("you clicked recommend.");

		var recipientName = $('#recommendRecipientName').val();
		var recipientEmail = $('#recommendRecipientEmail').val();
		var location = $('#recommendLocation').val();
		var message = $('#recommendMessage').val();

		var userName = Meteor.users.findOne(Meteor.userId()).profile.name;
		console.log(userName);

		if (!userName)
		{
			console.log("Please fill in your profile with a valid name!");
			throwError("Please fill in your profile with a name!");
			$('#recommend').modal('toggle');
			return;
		}
		var userEmail = Meteor.users.findOne(Meteor.userId()).emails[0].address;
		console.log(userEmail);

		var messageTitle = "A friend has just recommended a location with you!";
		var message = "I want to recommend the " + location + " to you."
		+ "Here is what I have to say: " + "<br><br>" + message;

		Meteor.call('sendRecommendation', recipientEmail, recipientName, userEmail, userName, messageTitle, message, function(error, result) {

			// display the error to the user and abort
			if (error) {
				return alert(error.reason);
			}
		});



	},
	'click #schoolOption': function()
	{
		console.log("you clicked school.");
		var options = $('#choices');
		$('#recommendLocation').append('<option value="Location"></option>' + 
			'<option value="School of Engineering and Applied Sciences">School of Engineering and Applied Sciences</option>' +
			'<option value="Elliott School of International Affairs">Elliott School of International Affairs</option>' + 
			'<option value="Columbian College of Arts and Sciences">Columbian College of Arts and Sciences</option>' + 
			'<option value="School of Medicine and Health Sciences">School of Medicine and Health Sciences</option>' + 
			'<option value="GW Law">GW Law</option>' + 
			'<option value="Graduate School of Education and Human Development">Graduate School of Education and Human Development</option>' + 
			'<option value="School of Business">School of Business</option>' + 
			'<option value="Milken School of Public Health">Milken School of Public Health</option>' + 
			'<option value="College of Professional Studies">College of Professional Studies</option>' + 
			'<option value="School of Nursing">School of Nursing</option>');
	}


});

Template.profile.helpers({

	'getImage': function() 
	{
		var user = Meteor.users.findOne(Meteor.userId());

		if (Meteor.user())
		{
			if (user.profile.image)
			{
				return user.profile.image;
			}
			else
			{
				return "img/colonial-profile.jpg";
			}
		}

	},
	'getName': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (Meteor.user())
		{
			if (user.profile.name)
			{
				return user.profile.name;
			}
			else
			{
				return "N/A";
			}
		}


	},
	'getSchool': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());

		if (Meteor.user())
		{
			if (user.profile.school)
			{
				return user.profile.school;
			}
			else
			{
				return "N/A";
			}
		}
	},
	'getMajor': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());

		if (Meteor.user()) {
			if (user.profile.major) {
				return user.profile.major;
			}
			else {
				return "N/A";
			}
		}

	},
	'getYear': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());

		if (Meteor.user()) {
			if (user.profile.year) {
				return user.profile.year;
			}
			else {
				return "N/A";
			}
		}

	},
	'getFavoritePlace': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());

		if (Meteor.user()) {
			if (user.profile.favoritePlace) {
				return user.profile.favoritePlace;
			}
			else {
				return "N/A";
			}
		}

	},
	'getFavoritePart': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());

		//console.log(user.profile);
		//console.log(user.profile);
		if (Meteor.user()) {
			if (user.profile.favoritePart) {
				return user.profile.favoritePart;
			}
			else {
				return "N/A";
			}
		}


	},

	'getRatingLocation': function()
	{
		if (Session.get('selectedRating') == undefined)
		{
			return;
		}
		var rating = Session.get('selectedRating');
		return rating.location;

	},
	'getRatingCategory': function()
	{
		if (Session.get('selectedRating') == undefined)
		{
			return;
		}
		var rating = Session.get('selectedRating');
		return rating.category;
	},
	'getRatingRating': function()
	{
		if (Session.get('selectedRating') == undefined)
		{
			return;
		}
		var rating = Session.get('selectedRating');
		return rating.rating;
	},
	'getRatingComment': function()
	{
		if (Session.get('selectedRating') == undefined)
		{
			return;
		}
		var rating = Session.get('selectedRating');
		return rating.comment;
	}


});

Template.profile.rendered = function()
{
	var user = Meteor.users.findOne(Meteor.userId());
	console.log(user.timeline);

	var events = user.timeline;

	if (events.length == 0)
	{
		console.log("You have no events!");
	}
	var timelineSection = $("#events ul");

	for (var i = 0; i < events.length; i++)
	{
		if (i % 4 == 0)
		{
			timelineSection.append("<li class='list-group-item list-group-item-success'>" + events[i].year + ": " + events[i].event + "</li>");
		}
		else if (i % 4 == 1)
		{
			timelineSection.append("<li class='list-group-item list-group-item-info'>" + events[i].year + ": " + events[i].event + "</li>");
		}
		else if (i % 4 == 2)
		{
			timelineSection.append("<li class='list-group-item list-group-item-warning'>" + events[i].year + ": " + events[i].event + "</li>");
		}
		else 
		{
			timelineSection.append("<li class='list-group-item list-group-item-danger'>" + events[i].year + ": " + events[i].event + "</li>");
		}
	}

	var userSchoolRatings = SchoolRatings.find( {userId: Meteor.userId()} ).fetch();
	console.log(userSchoolRatings);

	for (var j = 0; j < userSchoolRatings.length; j++)
	{
		console.log(userSchoolRatings[j]);
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userSchoolRatings[j].school + "</td><td class='category'>" + userSchoolRatings[j].category + "</td><td class='rating'>" + userSchoolRatings[j].rating + "</td><td class='comment'>" + userSchoolRatings[j].comment + "</td></tr>");
	}

	$('#userRatings').on('click', 'tbody tr', function(event) {

		console.log("CLICKED");

		$(".selected").remove();

		//$('.userRatings').siblings().remove(".btn");
		$(this).addClass('highlight').siblings().removeClass('highlight');

		$(this).append("<td class='selected'><button type='button' class='btn btn-info share' data-toggle='modal' data-target='#shareRating'>Share</button></td>");

		var ratingItem = {

			location: $(this).find(".location").html(),
			category: $(this).find(".category").html(),
			rating: $(this).find(".rating").html(),
			comment: $(this).find(".comment").html()

		};

		//console.log(ratingItem);

		Session.set('selectedRating', ratingItem);
		//var selectedRating = Session.get('selectedRating');
		//console.log(selectedRating);
		

	});

}

Template.profile.onCreated(function() {
	Session.set('timelineFormErrors', {});

});

Template.profile.helpers({
	errorMessage: function(field)
	{
		return Session.get('timelineFormErrors')[field];
	}, 
	errorClass: function (field) {
    	return !!Session.get('timelineFormErrors')[field] ? 'has-error' : '';
  	}

});

