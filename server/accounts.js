Accounts.config({
    sendVerificationEmail: true
});

Accounts.emailTemplates.from = "no-reply@ourLife.com";
Accounts.emailTemplates.sitename = "ourLife";

Accounts.emailTemplates.verifyEmail.subject = function(user) {
  return 'Welcome to ourLife' ;
},
Accounts.emailTemplates.verifyEmail.text = function(user, url) {
  return 'Click on the link below to verify your address: ' + url;
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