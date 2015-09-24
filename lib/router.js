

Router.configure({
   layoutTemplate: 'layout', 
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
   waitOn: function() 
   {
   		return Meteor.subscribe('schools');
   }
});

Router.route('/', {
	name: 'home',
	template: 'home'


});

Router.route('map', {
	name: 'map',
	template: 'map'


});

Router.route('profile', {
 	waitOn: function () {
 		return Meteor.subscribe('images')
 	} /*,
 	action: function () {
 		
 	if (this.ready())
 		this.render('profile');
 	else
 		this.render('loading');
 	}
 	*/
});



Router.route('schools', {
	name: 'schoolList',
	template: 'schoolList'


});

Router.route('housing', {
	name: 'housingList',
	template: 'housingList'


});

Router.route('dining', {
	name: 'diningList',
	template: 'diningList'


});

Router.route('library', {
	name: 'libraryList',
	template: 'libraryList'


});

Router.route('studentLife', {
	name: 'studentLifeList',
	template: 'studentLifeList'


});




// the :_id tells the router to match routes of the form /ratings/xyz
Router.route('/schools/:_id', {

	name: 'schoolItemPage', 

	// get the proper data based on _id

	data: function() 
	{
		return Schools.findOne(this.params._id);
	}

	/*
	data: function() {
		return {
			_id: Schools.findOne(this.params._id),
			school: this.params.title
		};

	}
	*/

});

Router.route('/housing/:_id', {

	name: 'housingItemPage', 

	// get the proper data based on _id

	data: function() 
	{
		return Housings.findOne(this.params._id);
	}

	/*
	data: function() {
		return {
			_id: Schools.findOne(this.params._id),
			school: this.params.title
		};

	}
	*/

});

Router.route('/dining/:_id', {

	name: 'diningItemPage', 

	// get the proper data based on _id

	data: function() 
	{
		return DiningLocations.findOne(this.params._id);
	}

	

});

Router.route('/library/:_id', {

	name: 'libraryItemPage', 

	// get the proper data based on _id

	data: function() 
	{
		return LibraryLocations.findOne(this.params._id);
	}

	

});

Router.route('/studentLife/:_id', {

	name: 'studentLifeItemPage', 

	// get the proper data based on _id

	data: function() 
	{
		return StudentLifeLocations.findOne(this.params._id);
	}

	

});

var requireLogin = function() {

	if (!Meteor.user())
	{
		this.render('accessDenied');
	}
	else 
	{
		this.next();
	}
}

Router.onBeforeAction(requireLogin, {only: 'profile'});
Router.onBeforeAction(requireLogin, {only: 'map'});
Router.onBeforeAction(requireLogin, {only: 'schoolList'});
Router.onBeforeAction(requireLogin, {only: 'housingList'});
Router.onBeforeAction(requireLogin, {only: 'diningList'});
Router.onBeforeAction(requireLogin, {only: 'libraryList'});
Router.onBeforeAction(requireLogin, {only: 'studentLifeList'});
Router.onBeforeAction('dataNotFound', {only: 'schoolItemPage'});


