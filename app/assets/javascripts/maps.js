// The init function needs to run on load
google.maps.event.addDomListener(window, 'load', initialize_my_map);
google.maps.event.addDomListener(window, 'page:load', initialize_my_map)

// Define a function that should be ran on load (yay function hoisting)
function initialize_my_map() {

    // Find the map DIV (if it exists)
    var el = document.getElementById('address-map');

    // Bail out if there's not an address map on the page
    if(!el) return;

    // Get an instance of the geocoder
    var geocoder = new google.maps.Geocoder();

    // Get the page's marker data from the JSON API
    var url = window.location.origin + window.location.pathname + ".json";

    // Ajax the data URL
    $.get(url, function(results){

        console.log("Data returned from " + url, results)

        // Wrap the data in an array if it's not one already
        if(!(results instanceof Array)) results = [results];

        // Perform geocoding for all addresses using promises to coordinate the results
        var geo_promises = [];

        // Geocode each address to be displayed
        // Realistically, this should be done in the Model when data is saved
        $.each(results, function(idx, value){
            var promise = $.Deferred(function(deferred){
                geocoder.geocode({'address': value.address}, function(geo_results, status){
                    deferred.resolve(geo_results)
                });
            });
            geo_promises.push(promise);
        });

        // Dispatch the promises
        Promise.all(geo_promises).then(function(promise_results){

            // Create a map
            var mapProps = {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(el, mapProps);

            // Bounds are cool because they center our map for us
            var bounds = new google.maps.LatLngBounds();

            // Track an array of our markers
            var markers = [];

            $.each(promise_results, function(idx, value){

                // result now represents a single geocoded address
                var coord = value[0].geometry.location

                // Create and place a marker
                var marker = new google.maps.Marker({position: coord})
                marker.setMap(map)
                markers.push(marker)

                // Add the coordinates to the bounds (so we can center the map)
                bounds.extend(coord)

                // Create an info window
                var infowindow = new google.maps.InfoWindow({
                    content: "<h1>" + results[idx].name + "</h1>" + value[0].formatted_address
                });

                // Open it above the marker
                infowindow.open(map, markers[idx]);

            })

            // Center and fit the map using the bounds
            map.fitBounds(bounds);

        })

    });

}
