Accounts.config({
    sendVerificationEmail: true
});

Accounts.emailTemplates.from = "no-reply@ourLife.com";
Accounts.emailTemplates.sitename = "ourLife";

Accounts.emailTemplates.verifyEmail.subject = function(user) {
  return 'Welcome to ourLife' ;
},
Accounts.emailTemplates.verifyEmail.text = function(user, url) {
  return 'Hi,' + '\n\n' + 'Click on the link below to verify your address: ' + '\n\n' + url + '\n\n' + '-The OurLife Team';
}

Accounts.validateLoginAttempt(function(attemptInfo) {

  if (attemptInfo.type == 'resume') return true;

  if (attemptInfo.methodName == 'createUser') 
  {
      throw new Meteor.Error(403, 'A Confirmation Email Was Sent!')
      return false;
  }

  if (attemptInfo.methodName == 'login' && attemptInfo.allowed) {
      var verified = attemptInfo.user.emails[0].verified;
      if (!verified) throw new Meteor.Error(403, 'Verify Your Email First!');
  }

  return true;
});

Accounts.emailTemplates.resetPassword.subject = function(user) {
  return 'Reset Your Life' ;

},
Accounts.emailTemplates.resetPassword.text = function(user, url) {

  return 'Hi,' + '\n\n' + 'Click on the link below to reset your password: ' + '\n\n' + url + '\n\n' + '-The OurLife Team';
}

/*
Accounts.sendResetPasswordEmail = function (userId, email) {
  // Make sure the user exists, and email is one of their addresses.
  var user = Meteor.users.findOne(userId);
  if (!user)
    throw new Error("Can't find user");
  // pick the first email if we weren't passed an email.
  if (!email && user.emails && user.emails[0])
    email = user.emails[0].address;
  // make sure we have a valid email
  if (!email || !_.contains(_.pluck(user.emails || [], 'address'), email))
    throw new Error("No such email for user.");

  var token = Random.id();
  var when = new Date();
  Meteor.users.update(userId, {$set: {
    "services.password.reset": {
      token: token,
      email: email,
      when: when
    }
  }});
}
*/


