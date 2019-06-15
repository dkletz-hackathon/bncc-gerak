import client from "./helper/client";

function login(username, password) {
  return client.post("/user/login", {
    username,
    password
  })
    .then(response => response.data);
}

function getProfile() {
  return client.get("/user/profile", {
    "Authorization": "DEPUC1b1m0u0auvUiqg9oNxjR77fpXNj-tknpshGPd94db6DJv1JCA"
  })
    .then(response => response.data);
}

export {
  login,
  getProfile
}