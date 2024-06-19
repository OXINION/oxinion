// Import functions from individual modules in networking folder
import {
  listenForLocationUpdates,
  triggerLocationUpdateWebhook,
} from "./networking/websocket";
import { sendHttpRequest } from "./networking/rest";
import {
  setCommunicationMethod,
  getCommunicationMethod,
} from "./communication";

// Import functions from other modules
import { startScan, stopScan, onDiscover } from "./scanner";

import { nearbyMessage } from "./notification";

import { megaphoneForCoupon } from "./advertising";

import { scanAndPay, calculateMidPoint, createRandomPoint } from "./geometry";

// Export all functions and variables
export {
  startScan,
  stopScan,
  onDiscover,
  nearbyMessage,
  megaphoneForCoupon,
  scanAndPay,
  calculateMidPoint,
  createRandomPoint,
  listenForLocationUpdates,
  triggerLocationUpdateWebhook,
  setCommunicationMethod,
  getCommunicationMethod,
  sendHttpRequest, // Include HTTP functions in export list
};
