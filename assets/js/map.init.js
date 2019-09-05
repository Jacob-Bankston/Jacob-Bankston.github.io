// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,
    scrollwheel: true,
    disableDefaultUI: true,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(29.7499, -95.3584), // Houston

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
        {
            "stylers": [
                {
                    "hue": "#2c3e50"
                },
                {
                    "saturation": 250
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 50
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var image = {
    url: "assets/images/icon-map-pic.svg",
    scaledSize: new google.maps.Size(50, 50)
  };

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(29.7499, -95.3584),
    map: map,
    optimized: false,
    icon: image
  });

  // Construct a new InfoWindow.
  var infoWindow = new google.maps.InfoWindow({
    content:
      '<h1 class="popover-map-title">Jacob Bankston</h1>' +
      '<div class="popover-map-caption">Houston, TX</div>'
  });

  // Opens the InfoWindow when marker is clicked.
  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}
