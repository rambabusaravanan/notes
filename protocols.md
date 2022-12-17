## Protocol: WebSocket

_Reference: WebSocket Protocol Registries - https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name_

Sub Protocols
- WAMP (The WebSocket Application Messaging Protocol)
- STOMP (Simple / Streaming Text Orientated Messaging Protocol)
- AMQP (Advanced Message Queuing Protocol)
- MQTT (Message Queuing Telemetry Transport) - _Refer [Using WebSocket as a network transport](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Using_WebSocket_as)_
- XMPP (WebSocket Transport for the Extensible Messaging and Presence Protocol)

## Protocol: MQTT

Usage
- MQTT over TCP
- MQTT over WebSocket

Port:
- 1883 (non-TLS)
- 8883 (MQTT TLS / MQTTs / IANA service name: secure-mqtt)

_Reference: https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901261_

## Protocol: Socket.IO

A custom real-time transport protocol implementation on top of other real-time protocols. 

Usage: uses the **WebSocket** protocol, with **polling** as a fallback option
