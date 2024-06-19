import axios from "axios";

export function sendWebhookRequest(url, data) {
  return axios.post(url, data);
}
