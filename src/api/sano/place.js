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
    uri += "&preferences=";
    uri += preferences[0];
    for (let i = 1; i < preferences; i++) {
      uri += ",";
      uri += preferences[i];
    }
  }
  return client.get(uri)
    .then(response => response.data.data);
}

function getById(id) {
  return client.get(`/location/${id}`)
    .then(response => response.data.data);
}

export {
  getPlacesByPreferences,
  getClosesPlaces,
  search,
  getById
}