import client from "./helper/client";

function getPlacesByPreferences(preferences) {
  client.get('/places', {
    preferences
  })
    .then(response => response.data);
}

export {
  getPlacesByPreferences
}