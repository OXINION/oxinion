# oxinion

Open indoor-positioning
Nearby Notifications

oxinion.nearbyMessage('soho, London', 'its so expensive')

## marketing - beacons

## utilities

## usage

```js

yarn add oxinion

import {getDistance} from 'oxinion'

const midPoint = getDistance([51.5074, 0.1278], [51.5074, 0.1278], 'kilometers')
console.log(`Distance : ${midPoint} km`)

```

## Dynamic Communication Method Configuration

1. Using HTTP and REST API
   API Integration: Use HTTP requests (REST APIs) to interact with location-based services for geocoding, routing, and POI search functionalities.

```js
// Set communication method HTTP
oxinion.setCommunicationMethod("rest");
```

2. Using WebSockets (socket.io)
   Real-Time Updates: Implement WebRTC or WebSockets (socket.io) for real-time location sharing or notifications in collaborative mapping or geofencing scenarios.

```js
import oxinion from "oxinion";

oxinion.listenForLocationUpdates((data) => {
  console.log("Received location update:", data);
});
```

3. Using Webhooks
   Event-Driven: Utilize Webhooks for receiving location updates or triggering actions based on geofencing events.

```js
oxinion
  .triggerLocationUpdateWebhook({ lat: 51.5074, lon: 0.1278 })
  .then((response) => {
    console.log("Webhook triggered successfully:", response);
  })
  .catch((error) => {
    console.error("Error triggering webhook:", error);
  });
```
