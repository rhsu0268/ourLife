Images.deny({
	insert: function(){
 		return false;
 	},
 	update: function(){
 		return false;
 	},
 	remove: function(){
 		return false;
 	},
 	download: function(){
 		return false;
 	}
 });

Images.allow({
	insert: function(){
 		return true;
 	},
 	update: function(){
 		return true;
 	},
 	remove: function(){
 		return true;
 	},
 	download: function(){
 		return true;
 	}
});

Accounts.onCreateUser(function(options, user) {

  	user.timeline = [];

  	if (options.profile)
    user.profile = options.profile;
  	
  	
  	return user;
});