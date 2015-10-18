Meteor.startup(function () {

	Mandrill.config({
		username: "process.env.rhsu0268@yahoo.com",
		key: "process.env.aQSCms085BjLwak2QjHVgg"
	});

	smtp = {
    username: 'rhsu0268@yahoo.com',
    password: 'aQSCms085BjLwak2QjHVgg',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
	

});






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




Meteor.methods({
	sendRating: function(to, toName, from, fromName, subject, text) {
		check([to, toName, from, fromName, subject, text], [String]);

		// let other Meteor methods run
		this.unblock();

		// send the email
		Mandrill.messages.sendTemplate({
			key: 'aQSCms085BjLwak2QjHVgg', // optional, if you set it in via Mandril.config() already
			template_name: 'Test',
			template_content: [
				{
					name: 'message',
					content: text
				}
			],
			message: {
				subject: subject,
				from_email: from/* your app's from email ,e.g. Accounts.emailTemplates.from */,
				to: [
					{ email: to }
				],
				// global merge variable in the *|VARIABLE|* format
				global_merge_vars: [
					{
						name: 'message',
						content: text
					}
				],
				// per-recipient merge vars
				merge_vars: [
					{
						rcpt: to,
						vars: [
							{
								name: 'tname',
								content: toName
							},

							{
								name: 'fname',
								content: fromName
							}
						]
					}
				]
			}
		});
	},
	'sendRecommendation': function(to, toName, from, fromName, subject, text) {
		check([to, toName, from, fromName, subject, text], [String]);

		// let other Meteor methods run
		this.unblock();

		// send the email
		Mandrill.messages.sendTemplate({
			key: 'aQSCms085BjLwak2QjHVgg', // optional, if you set it in via Mandril.config() already
			template_name: 'RecommendTemplate',
			template_content: [
				{
					name: 'message',
					content: text
				}
			],
			message: {
				subject: subject,
				from_email: from/* your app's from email ,e.g. Accounts.emailTemplates.from */,
				to: [
					{ email: to }
				],
				// global merge variable in the *|VARIABLE|* format
				global_merge_vars: [
					{
						name: 'message',
						content: text
					}
				],
				// per-recipient merge vars
				merge_vars: [
					{
						rcpt: to,
						vars: [
							{
								name: 'tname',
								content: toName
							},

							{
								name: 'fname',
								content: fromName
							}
						]
					}
				]
			}
		});
	}

});

