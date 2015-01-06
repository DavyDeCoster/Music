var LocationController = function($scope)
{
    $scope.address = null;

    var geocoder, latlng;
    var getLocation = function()
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    };

    var showPosition = function(position)
    {
        geocoder = new google.maps.Geocoder();
        latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        geocoder.geocode({'latLng': latlng}, function(results) {

            document.getElementById('location').innerHTML="Surfing from "+results[1].formatted_address;
        });
    };

    getLocation();
};