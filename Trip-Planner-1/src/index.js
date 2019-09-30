const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHdpIiwiYSI6ImNrMTZsbzE1cTB5cXgzbG5peGVycTRqY24ifQ.iK4xN7tPwbzwRWsf0ApZbw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const fsaMarker = buildMarker("activities", [-74.009151, 40.705]);
fsaMarker.addTo(map);

const hotelMarker = buildMarker("hotels", [-74.010, 40.707]);
hotelMarker.addTo(map);

const restaurantMarker = buildMarker("restaurants", [-74.015, 40.71]);
restaurantMarker.addTo(map);
