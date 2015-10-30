

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

		if (errors.year || errors.event)
		{
			return Session.set('formErrors', errors);
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

		var errors = validateEmailInfo(recipientName, recipientEmail);

		if (errors.name || errors.email)
		{
			return Session.set('formErrors', errors);
		}


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

		var errors = validateRecommendInfo(recipientName, recipientEmail, location, message);

		if (errors.rName || errors.rEmail || errors.location || errors.message)
		{
			return Session.set('formErrors', errors);
		}

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
		console.log($('#recommendLocation'));
		$('#recommendLocation').find('option').remove();
		console.log("you clicked school.");
		var options = $('#choices');

		var schoolOptions = Schools.find().fetch();
		console.log(schoolOptions);
		$('#recommendLocation').append('<option value="Location"></option>');
		for (var i = 0; i < schoolOptions.length; i++)
		{
			console.log(schoolOptions[i].title);
			$('#recommendLocation').append($("<option/>").val(schoolOptions[i].title).text(schoolOptions[i].title));
		}

	},
	'click #housingOption': function()
	{
		$('#recommendLocation').find('option').remove();
		console.log("you clicked school.");
		var options = $('#choices');

		var housingOptions = Housings.find().fetch();
		console.log(housingOptions);
		$('#recommendLocation').append('<option value="Location"></option>');
		for (var i = 0; i < housingOptions.length; i++)
		{
			console.log(housingOptions[i].title);
			$('#recommendLocation').append($("<option/>").val(housingOptions[i].title).text(housingOptions[i].title));
		}

	},
	'click #diningOption': function()
	{
		$('#recommendLocation').find('option').remove();
		console.log("you clicked dining.");
		var options = $('#choices');

		var diningOptions = DiningLocations.find().fetch();
		console.log(diningOptions);
		$('#recommendLocation').append('<option value="Location"></option>');
		for (var i = 0; i < diningOptions.length; i++)
		{
			console.log(diningOptions[i].name);
			$('#recommendLocation').append($("<option/>").val(diningOptions[i].name).text(diningOptions[i].name));
		}

	},
	'click #libraryOption': function()
	{
		$('#recommendLocation').find('option').remove();
		console.log("you clicked library.");
		var options = $('#choices');

		var libraryOptions = LibraryLocations.find().fetch();
		console.log(libraryOptions);
		$('#recommendLocation').append('<option value="Location"></option>');
		for (var i = 0; i < libraryOptions.length; i++)
		{
			console.log(libraryOptions[i].name);
			$('#recommendLocation').append($("<option/>").val(libraryOptions[i].name).text(libraryOptions[i].name));
		}

	},
	'click #studentLifeOption': function()
	{
		$('#recommendLocation').find('option').remove();
		console.log("you clicked student life.");
		var options = $('#choices');

		var studentLifeOptions = StudentLifeLocations.find().fetch();
		console.log(studentLifeOptions);
		$('#recommendLocation').append('<option value="Location"></option>');
		for (var i = 0; i < studentLifeOptions.length; i++)
		{
			console.log(studentLifeOptions[i].name);
			$('#recommendLocation').append($("<option/>").val(studentLifeOptions[i].name).text(studentLifeOptions[i].name));
		}

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
	},
	'getPoints': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		//console.log(user.points);
		return user.points;
	},
	'getTitle': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (user.points >= 0 && user.points <= 100)
		{
			return "Junior Rater";
		}
		else if (user.points > 100 && user.points <= 500)
		{
			return "Intermediate Rater";
		}
		else if (user.points > 500 && user.points <= 1000)
		{
			return "Expert Rater";
		}
		else
		{
			return "Master Rater";
		}

	},
	'getRatingsPosted': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		console.log(user.ratingsPosted);
		return user.ratingsPosted;
	},
	'getRatingsShared': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		return user.ratingsShared;
	},
	'getRatingsRecommended': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		return user.ratingsRecommended;
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
			timelineSection.append("<li class='list-group-item list-group-item-success removeItem'>" + events[i].year + ": " + events[i].event + "<button type='button' class='btn btn-danger btn-xs' style='float: right;'>Remove</button></li>");
		}
		else if (i % 4 == 1)
		{
			timelineSection.append("<li class='list-group-item list-group-item-info removeItem'>" + events[i].year + ": " + events[i].event + "<button type='button' class='btn btn-danger btn-xs' style='float: right;'>Remove</button></li>");
		}
		else if (i % 4 == 2)
		{
			timelineSection.append("<li class='list-group-item list-group-item-warning removeItem'>" + events[i].year + ": " + events[i].event + "<button type='button' class='btn btn-danger btn-xs' style='float: right;'>Remove</button></li>");
		}
		else
		{
			timelineSection.append("<li class='list-group-item list-group-item-danger removeItem'>" + events[i].year + ": " + events[i].event + "<button type='button' class='btn btn-danger btn-xs' style='float: right;'>Remove</button></li>");
		}
	}

	var userSchoolRatings = SchoolRatings.find( {userId: Meteor.userId()} ).fetch();
	console.log(userSchoolRatings);

	for (var j = 0; j < userSchoolRatings.length; j++)
	{
		console.log(userSchoolRatings[j]);
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userSchoolRatings[j].school + "</td><td class='category'>" + userSchoolRatings[j].category + "</td><td class='rating'>" + userSchoolRatings[j].rating + "</td><td class='comment'>" + userSchoolRatings[j].comment + "</td></tr>");
	}

	var userHousingRatings = HousingRatings.find( {userId: Meteor.userId()} ).fetch();
	console.log(userHousingRatings);

	for (var j = 0; j < userHousingRatings.length; j++)
	{
		console.log(userHousingRatings[j]);
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userHousingRatings[j].housing + "</td><td class='category'>" + userHousingRatings[j].category + "</td><td class='rating'>" + userHousingRatings[j].rating + "</td><td class='comment'>" + userHousingRatings[j].comment + "</td></tr>");
	}

	var userDiningRatings = DiningRatings.find( {userId: Meteor.userId()} ).fetch();
	console.log(userDiningRatings);

	for (var j = 0; j < userDiningRatings.length; j++)
	{
		console.log(userDiningRatings[j]);
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userDiningRatings[j].dining + "</td><td class='category'>" + userDiningRatings[j].category + "</td><td class='rating'>" + userDiningRatings[j].rating + "</td><td class='comment'>" + userDiningRatings[j].comment + "</td></tr>");
	}

	var userLibraryRatings = LibraryRatings.find( {userId: Meteor.userId()} ).fetch();
	console.log(userLibraryRatings);

	for (var j = 0; j < userLibraryRatings.length; j++)
	{
		console.log(userLibraryRatings[j]);
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userLibraryRatings[j].library + "</td><td class='category'>" + userLibraryRatings[j].category + "</td><td class='rating'>" + userLibraryRatings[j].rating + "</td><td class='comment'>" + userLibraryRatings[j].comment + "</td></tr>");
	}

	var userStudentLifeRatings = StudentLifeRatings.find( {userId: Meteor.userId()} ).fetch();
	console.log(userStudentLifeRatings);

	for (var j = 0; j < userStudentLifeRatings.length; j++)
	{
		console.log(userStudentLifeRatings[j]);
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userStudentLifeRatings[j].studentLife + "</td><td class='category'>" + userStudentLifeRatings[j].category + "</td><td class='rating'>" + userStudentLifeRatings[j].rating + "</td><td class='comment'>" + userStudentLifeRatings[j].comment + "</td></tr>");
	}

	$('#userSchoolRatings').click(function() {
		$('#userRatings').find('tr').remove();

		for (var j = 0; j < userSchoolRatings.length; j++)
		{
			console.log(userSchoolRatings[j]);
			$('#userRatings').append("<tr class='userRating'><td class='location'>" + userSchoolRatings[j].school + "</td><td class='category'>" + userSchoolRatings[j].category + "</td><td class='rating'>" + userSchoolRatings[j].rating + "</td><td class='comment'>" + userSchoolRatings[j].comment + "</td></tr>");
		}



	});

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


	$('.removeItem').click(function() {
		console.log("Remove clicked!");
		console.log($(this).closest('li').html());
		var clickedEvent = $(this).closest('li');
		clickedEvent.remove();

		//console.log(clickedEvent);
		var removeItemString = clickedEvent.text();
		var firstSplit = removeItemString.split(":");
		var year = firstSplit[0];
		console.log(year);

		var secondSplit = firstSplit[1].split("R");
		var event = secondSplit[0].substr(1);
		console.log(event);

		// remove the event from the collection
		var user = Meteor.users.findOne(Meteor.userId());
		var userId = Meteor.userId();
		var userTimeline = user.timeline;

		var eventInfo = {
			"year": year,
			"event": event
		};
		for (var i = 0; i < userTimeline.length; i++)
		{
			if (userTimeline[i].year == year && userTimeline[i].event == event)
			{
				console.log("deleting item");
				//user.timeline.splice(i, 1);

				Meteor.call('removeTimelineEvent', eventInfo, userId, function(error, result) {

					if (error)
					{
						return alert(error.reason);
					}
				});
			}
		}


	});

}

Template.profile.onCreated(function() {
	Session.set('formErrors', {});

});

Template.profile.helpers({
	errorMessage: function(field)
	{
		return Session.get('formErrors')[field];
	},
	errorClass: function (field) {
    	return !!Session.get('formErrors')[field] ? 'has-error' : '';
  	}

});
