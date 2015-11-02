Template.diningItemPage.helpers({
   diningratings: function() {
   	var selectedDiningId = this._id;

   	var selectedDining = DiningLocations.findOne( {_id: selectedDiningId});
   	console.log(selectedDining.name);

   	//console.log(this._id);
   	console.log(DiningRatings.find());
      return DiningRatings.find( {dining: selectedDining.name}, {sort: {submitted: -1}} );
   },

  idFromHelper: function() {
   	  return this._id;
  },
  equals: function(a, b) {

     return a == b;
  },
  upVotedClass: function() {
     var userId = Meteor.userId();
     if (userId && !_.include(this.upvoters, userId))
     {
        console.log('btn-default');
        return 'btn-default';
     }
     else
     {
        return 'btn-primary';
     }
 }

});

Template.diningItemPage.events({
	'click #back': function(event, template)
	{
		event.preventDefault();
		Router.go('diningList');
	},
    'click #upvoteDiningRating': function(e)
    {
      e.preventDefault();
      console.log("You clicked the upvote Button!");
      Meteor.call('upvoteDiningRating', this._id);

     }

})
