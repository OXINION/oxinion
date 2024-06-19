import noble from "noble";
import io from "socket.io-client";

let communicationMethod = "rest"; // Default to HTTP REST
const socket = io("http://localhost:3000");

const oxinion = {
  // Method to set the communication method dynamically
  setCommunicationMethod: function (method) {
    communicationMethod = method;
  },

  startScan: function () {
    noble.startScanning();
  },
  stopScan: function () {
    noble.stopScanning();
  },
  onDiscover: function (callback) {
    noble.on("discover", (peripheral) => {
      callback(peripheral.address);
    });
  },
  nearbyMessage: function (message) {
    return new Promise((resolve, reject) => {
      if (window.Notification && Notification.permission === "granted") {
        navigator.geolocation.getCurrentPosition((position) => {
          // send message and location to the server
          resolve(
            `Message "${message}" and location (lat: ${position.coords.latitude}, long: ${position.coords.longitude}) sent successfully.`
          );
        });
      } else {
        // request permission for notification
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            navigator.geolocation.getCurrentPosition((position) => {
              // send message and location to the server
              resolve(
                `Message "${message}" and location (lat: ${position.coords.latitude}, long: ${position.coords.longitude}) sent successfully.`
              );
            });
          } else {
            reject("Permission for notification was denied.");
          }
        });
      }
    });
  },

  megaphoneForCoupon: function (couponMessage) {
    console.log(`Starting to broadcast coupon message: ${couponMessage}`);

    noble.startAdvertising(couponMessage, () => {
      console.log(
        `Coupon message "${couponMessage}" is now being broadcasted.`
      );
    });
  },

  scanAndPay(paymentData) {
    return new Promise((resolve, reject) => {
      noble.startScanning();
      noble.on("discover", (peripheral) => {
        // Check if the peripheral has the desired payment service
        if (peripheral.uuid === paymentData.uuid) {
          // Connect to the peripheral and send the payment information
          peripheral.connect((error) => {
            if (error) {
              reject(error);
            } else {
              peripheral.writeData(paymentData.data, (error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve("Payment Successful!");
                }
              });
            }
          });
        }
      });
    });
  },

  calculateMidPoint(pointA, pointB) {
    if (
      !Array.isArray(pointA) ||
      !Array.isArray(pointB) ||
      pointA.length !== 2 ||
      pointB.length !== 2
    ) {
      throw new Error("Invalid input. Please provide two valid points.");
    }

    const x1 = pointA[0];
    const y1 = pointA[1];
    const x2 = pointB[0];
    const y2 = pointB[1];

    const midPointX = (x1 + x2) / 2;
    const midPointY = (y1 + y2) / 2;

    return [midPointX, midPointY];
  },

  createRandomPoint() {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    return [randomX, randomY];
  },

  listenForLocationUpdates: function (callback) {
    socket.on("locationUpdate", (data) => {
      callback(data);
    });
  },

  // Method to trigger a location update webhook
  triggerLocationUpdateWebhook: function (location) {
    const webhookUrl = "https://example.com/webhook/location-update"; // Replace with your webhook endpoint

    return new Promise((resolve, reject) => {
      axios
        .post(webhookUrl, location)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default oxinion;
