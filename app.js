var app = angular.module('route', ['google-maps']);

app.controller('MainCtrl', function($scope, $document) {
  $scope.map = {
    control: {},
    center: {
        latitude: 44.0128,
        longitude: 20.9114
    },
    zoom: 14
  };
  
  $scope.savedroutes = [];

  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var geocoder = new google.maps.Geocoder();
  
  $scope.getDirections = function () {
  	var request = {
  		origin: $scope.directions.origin,
  		destination: $scope.directions.destination,
  		travelMode: google.maps.DirectionsTravelMode.DRIVING
  	};
  	directionsService.route(request, function (response, status) {
  		if (status === google.maps.DirectionsStatus.OK) {
  			directionsDisplay.setDirections(response);
  			directionsDisplay.setMap($scope.map.control.getGMap());
  			directionsDisplay.setPanel(document.getElementById('directionsList'));
  			$scope.directions.showList = true
			$scope.showbuttonsave = true
  		} else {
  			alert('Google route unsuccesfull!');
  		}
  	});
     }
     
  $scope.getRoute =  function() {
  	if(!$scope.directions.origin && !$scope.directions.destination) {
  		return;
  	}
	return 	$scope.theroute = "for "+ $scope.directions.origin + ' - ' + $scope.directions.destination;
  }
  
  $scope.storeRoute = function(){
	
	var route = {location:$scope.directions.origin, destination: $scope.directions.destination}
	
	$scope.savedroutes.push(route);  
  
  }


});

function openNav() {
    document.getElementById("savedroutes").style.width = "250px";
}

function closeNav() {
    document.getElementById("savedroutes").style.width = "0";
}



