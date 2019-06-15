import { latitude, longitude } from "../mocks/location";

// Gonna mock this so component have consistent API to access
// current location HEHE :D
function getCurrentLocation() {
  return {
    latitude,
    longitude
  }
}

export {
  getCurrentLocation
}