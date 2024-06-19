export function nearbyMessage(message) {
  return new Promise((resolve, reject) => {
    if (window.Notification && Notification.permission === "granted") {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(
          `Message "${message}" and location (lat: ${position.coords.latitude}, long: ${position.coords.longitude}) sent successfully.`
        );
      });
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          navigator.geolocation.getCurrentPosition((position) => {
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
}
