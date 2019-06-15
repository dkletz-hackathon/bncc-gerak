import client from "./helper/client";

function getAll() {
  return client.get("/category")
    .then(response => response.data.data);
}

export {
  getAll
}