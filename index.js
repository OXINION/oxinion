import noble from "noble";

const oxinion = {
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
};

export default oxinion;
