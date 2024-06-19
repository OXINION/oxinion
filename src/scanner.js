import noble from "noble";

export function startScan() {
  noble.startScanning();
}

export function stopScan() {
  noble.stopScanning();
}

export function onDiscover(callback) {
  noble.on("discover", (peripheral) => {
    callback(peripheral.address);
  });
}
