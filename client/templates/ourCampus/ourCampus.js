Meteor.startup(function() {

	GoogleMaps.load();
});


Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {

      return {
        center: new google.maps.LatLng(38.9007, -77.0508),
        zoom: 18
      };
    }
  }
});

Template.map.onCreated(function() {

	GoogleMaps.ready('map', function(map) {

		console.log("I'm ready!");
		var latLng = {lat: 38.9007, lng: -77.0508};
		

		var locations = CampusLocations.find().fetch();
		

		for (var i = 0; i < locations.length; i++)
		{
			var name = locations[i].location;
			//console.log(name);
			var description = locations[i].description;

			var infoWindow = new google.maps.InfoWindow();
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
				map: map.instance
			});

			var text = "<div align='center'><b>" + name + "</b></div><div>" + description + "</div>";

			google.maps.event.addListener(marker, 'click', (function(marker, text) {
            return function() {
                infoWindow.setContent(text);
                infoWindow.open(map.instance, marker);
            }
        	})(marker, text));
		}
		
		
	});

});



