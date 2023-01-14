// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([50.77, 15.04], 16);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);