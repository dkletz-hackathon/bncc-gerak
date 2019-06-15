import client from "./helper/client";

function getAll() {
  client.get("/category")
    .then(response => response.data.data);
}

export {
  getAll
}