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
};

export default oxinion;
