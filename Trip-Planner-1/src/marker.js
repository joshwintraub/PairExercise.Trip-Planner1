const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapbox.Marker(marker).setLngLat(coords);
};

module.exports = buildMarker;

// OLD WAY:
// const activityMarker = document.createElement("div");
// activityMarker.style.width = "32px";
// activityMarker.style.height = "39px";
// activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const hotelMarker = document.createElement("div");
// hotelMarker.style.width = "32px";
// hotelMarker.style.height = "39px";
// hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

// const restaurantMarker = document.createElement("div");
// restaurantMarker.style.width = "32px";
// restaurantMarker.style.height = "39px";
// restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

// module.exports = {
//   activityMarker,
//   hotelMarker,
//   restaurantMarker
// };
