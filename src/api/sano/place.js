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

function search(latitude, longitude, preferences = undefined) {
  let uri = "/location/search?";
  uri += `lat=${latitude}&`;
  uri += `long=${longitude}`;
  if (!!preferences) {
    uri += `&preferences=${preferences}`;
  }
  return client.get(uri)
    .then(response => response.data.data);
}

export {
  getPlacesByPreferences,
  getClosesPlaces,
  search
}