

Meteor.methods({
    sendFeedback: function(userFeedback) {

        //console.log(userFeedback);
        check(userFeedback, {

            username: String,
            userEmail: String,
            category: String,
            rating: String,
            comment: String

        });

        var username = userFeedback.username;
        var userEmail = userFeedback.userEmail;
        var category = userFeedback.category;
        var rating = userFeedback.rating;
        var comment = userFeedback.comment;

        var message = "User's Email: " + userEmail + "<br>" + "Category: " + category + "<br>" + "Rating: " + rating + "<br>" + "Comment: " + comment;

        //var user = Meteor.user();
        //Meteor.users.update({ "_id": user._id}, {$inc: {points: 5}});
        //Meteor.users.update({ "_id": user._id}, {$inc: {ratingsShared: 1}});
        // let other Meteor methods run
        this.unblock();

        // send the email
        Mandrill.messages.sendTemplate({
            key: 'aQSCms085BjLwak2QjHVgg', // optional, if you set it in via Mandril.config() already
            template_name: 'Feedback',
            template_content: [
                {
                    name: 'message',
                    content: message
                }
            ],
            message: {
                subject: "A member of ourLife Provided Feedback",
                from_email: userEmail/* your app's from email ,e.g. Accounts.emailTemplates.from */,
                to: [
                    { email: "rhsu0268@gmail.com" }
                ],
                // global merge variable in the *|VARIABLE|* format
                global_merge_vars: [
                    {
                        name: 'message',
                        content: message
                    }
                ],
                // per-recipient merge vars
                merge_vars: [
                    {
                        rcpt: "rhsu0268@gmail.com",
                        vars: [
                            {
                                name: 'tname',
                                content: 'Richard'
                            },

                            {
                                name: 'fname',
                                content: username
                            }
                        ]
                    }
                ]
            }
        });
    }
});
