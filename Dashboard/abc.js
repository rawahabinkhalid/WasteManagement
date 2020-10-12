<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt2aetmzxdEDsDMB5a63ajqWovxKUIRQg&callback=initMap&libraries=places"></script>
<script>
    function initMap() {
        var map = new google.maps.Map(document.getElementById('mapTest'), {
            center: {
                // lat: -33.8688,
                // lng: 151.2195
                lat: 24.860449,
                lng: 67.000928
                    // 24.860449, 67.000928
            },
            zoom: 18
        });
        // var map = document.getElementById('mapTest');
        var card = document.getElementById('pac-card');
        var input = document.getElementById('location');
        // var types = document.getElementById('type-selector');
        // var strictBounds = document.getElementById('strict-bounds-selector');

        // map.controls[0].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        // Set the data fields to return when the user selects a place.
        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);

        // var infowindow = new google.maps.InfoWindow();
        // var infowindowContent = document.getElementById('infowindow-content');
        // infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
            // infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }
            var latLong = place.geometry.location.toUrlValue(6).split(',');
            document.getElementById('latitude').value = latLong[0];
            document.getElementById('longitude').value = latLong[1];

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(19); // Why 17? Because it looks good.
            }
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            // infowindowContent.children['place-icon'].src = place.icon;
            // infowindowContent.children['place-name'].textContent = place.name;
            // infowindowContent.children['place-address'].textContent = address;
            // infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        // function setupClickListener(id, types) {
        //     var radioButton = document.getElementById(id);
        //     radioButton.addEventListener('click', function() {
        //         autocomplete.setTypes(types);
        //     });
        // }

        // setupClickListener('changetype-all', []);
        // setupClickListener('changetype-address', ['address']);
        // setupClickListener('changetype-establishment', ['establishment']);
        // setupClickListener('changetype-geocode', ['geocode']);

        // document.getElementById('use-strict-bounds')
        //     .addEventListener('click', function() {
        //         console.log('Checkbox clicked! New state=' + this.checked);
        //         autocomplete.setOptions({
        //             strictBounds: this.checked
        //         });
        //     });
    }