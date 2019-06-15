import client from "./helper/client";

function logQuery(placeId, query) {
  return client.post('/log', {
    placeId,
    query
  });
}

export {
  logQuery
}