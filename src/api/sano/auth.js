import client from "./helper/client";

function login(username, password) {
  return client.post("/login", {
    username,
    password
  })
    .then(response => response.data);
}

function validateToken(token) {
  return client.post("/token", {
    token
  })
    .then(response => response.data);
}

export {
  login,
  validateToken
}