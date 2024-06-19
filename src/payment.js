import noble from "noble";

export function scanAndPay(paymentData) {
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
}
