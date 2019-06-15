import client from "./helper/client";

function getPlacesByPreferences(preferences) {
  client.get('/places', {
    preferences
  })
    .then(response => response.data.data);
}

function getClosesPlaces(latitude, longitude) {
  client.get('/places', {

  })
    .then(response => response.data.data);
}

export {
  getPlacesByPreferences,
  getClosesPlaces
}