import client from "./helper/client";
import { getCurrentLocation } from "../../helper/location";

const { latitude, longitude } = getCurrentLocation();

function logQuery(locationId, preferences) {
  return client.post('/location/marathon', {
    locationId,
    preferences,
    lat: latitude,
    long: longitude
  });
}

export {
  logQuery
}