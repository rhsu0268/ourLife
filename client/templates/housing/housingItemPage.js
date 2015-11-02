Template.housingItemPage.helpers({
   housingratings: function() {
   	var selectedHousingId = this._id;

   	var selectedHousing = Housings.findOne( {_id: selectedHousingId});
   	console.log(selectedHousing.title);

   	//console.log(this._id);
   	console.log(HousingRatings.find());
    return HousingRatings.find( {housing: selectedHousing.title}, {sort: {submitted: -1}} );
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

Template.housingItemPage.events({
	'click #back': function(event, template)
	{
	   event.preventDefault();
     Router.go('housingList');
	},
  'click #upvoteHousingRating': function(e)
  {
    e.preventDefault();
    console.log("You clicked the upvote Button!");
    Meteor.call('upvoteHousingRating', this._id);

   }

})
