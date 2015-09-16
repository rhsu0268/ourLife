

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

		$('#timeLine').modal('toggle');

		var userId = Meteor.userId();
		console.log(userId);
		var user = Meteor.users.findOne(userId);

		var eventInfo = {
			"year": $('#eventYear').val(),
			"event": $('#event').val()
		};

		Meteor.call('eventInsert', eventInfo, userId, function(error, result) {

			if (error)
			{
				return alert(error.reason);
			}

		var timelineSection = $("#events ul");
		timelineSection.append("<li class='list-group-item'>" + eventInfo.year + ": " + eventInfo.event + "</li>");

		});


	}
	/*
	'click .userRatings': function()
	{
		console.log("you clicked.");
	}
	*/

});

Template.profile.helpers({

	'getImage': function() 
	{
		var user = Meteor.users.findOne(Meteor.userId());
		//console.log(user);
		//console.log(user.profile);
		if (!(jQuery.isEmptyObject(user.profile)))
		{
			return user.profile.image;
		}
		else 
		{
			return "img/colonial-profile.jpg";
		}
	},
	'getName': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		console.log(!(jQuery.isEmptyObject(user.name)));
		if (!(jQuery.isEmptyObject(user.profile)) && user.profile.name)
		{
			return user.profile.name;
		}
		else 
		{
			return "N/A";
		}

	},
	'getSchool': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (!(jQuery.isEmptyObject(user.profile)) && user.profile.school)
		{
			return user.profile.school;
		}
		else 
		{
			return "N/A";
		}

	},
	'getMajor': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (!(jQuery.isEmptyObject(user.profile)) && user.profile.major)
		{
			return user.profile.major;
		}
		else 
		{
			return "N/A";
		}

	},
	'getYear': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (!(jQuery.isEmptyObject(user.profile)) && user.profile.year)
		{
			return user.profile.year;
		}
		else 
		{
			return "N/A";
		}

	},
	'getFavoritePlace': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (!(jQuery.isEmptyObject(user.profile)) && user.profile.favoritePlace)
		{
			return user.profile.favoritePlace;
		}
		else 
		{
			return "N/A";
		}

	},
	'getFavoritePart': function()
	{
		var user = Meteor.users.findOne(Meteor.userId());
		if (!(jQuery.isEmptyObject(user.profile)) && user.profile.favoritePart)
		{
			return user.profile.favoritePart;
		}
		else 
		{
			return "N/A";
		}

	},
	'getTimeline': function()
	{
		
		var timelineSection = $("#events ul");
		timelineSection.append("hello");
	}


});

Template.profile.rendered = function()
{
	var user = Meteor.users.findOne(Meteor.userId());
	console.log(user.timeline);

	var events = user.timeline;

	if (events.length == 0)
	{
		return;
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


	for (var i = 0; i < userSchoolRatings.length; i++)
	{
		$('#userRatings').append("<tr class='userRating'><td class='location'>" + userSchoolRatings[i].school + "</td><td class='category'>" + userSchoolRatings[i].category + "</td><td class='rating'>" + userSchoolRatings[i].rating + "</td><td class='comment'>" + userSchoolRatings[i].comment + "</td></tr>");
	}

	$('#userRatings').on('click', 'tbody tr', function(event) {

		console.log("CLICKED");
		$(this).addClass('highlight').siblings().removeClass('highlight');

		var ratingItem = {

			location: $(this).find(".location").html(),
			category: $(this).find(".category").html(),
			rating: $(this).find(".rating").html(),
			comment: $(this).find(".comment").html()

		};

		//console.log(ratingItem);

		Session.set('selectedRating', ratingItem);
		var selectedRating = Session.get('selectedRating');
		//console.log(selectedRating);
		

	});

}

