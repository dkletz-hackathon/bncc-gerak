import client from "./helper/client";

function getAll() {
  return client.get("/activity")
    .then(response => response.data.data);
}

export {
  getAll
}