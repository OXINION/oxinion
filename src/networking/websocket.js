import io from "socket.io-client";

let socket;

export function initializeWebSocket(url) {
  socket = io(url);
}

export function listenForWebSocketEvents(eventName, callback) {
  if (!socket) {
    throw new Error(
      "WebSocket is not initialized. Call initializeWebSocket first."
    );
  }

  socket.on(eventName, (data) => {
    callback(data);
  });
}

export function emitWebSocketEvent(eventName, data) {
  if (!socket) {
    throw new Error(
      "WebSocket is not initialized. Call initializeWebSocket first."
    );
  }

  socket.emit(eventName, data);
}

export function closeWebSocketConnection() {
  if (socket) {
    socket.close();
    socket = null;
  }
}
