import axios from "axios";

export function sendHttpRequest(url, data) {
  return axios.post(url, data);
}
