import axios from "axios";
import { baseURL } from "./config";
import applyConverters from "axios-case-converter";

let sanoAxios = axios.create({
  baseURL,
  headers: {"Content-Type": "application/json"}
});

let sanoAxios = applyConverters(sanoAxios);

if (process.env.NODE_ENV === "development") {
  sanoAxios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request
  });

  sanoAxios.interceptors.response.use(
    response => {
      console.log('Response:', response);
      return response
    },

    error => {
      console.log('Error:', error);
      return Promise.reject(error);
    }
  )
}

export default sanoAxios;