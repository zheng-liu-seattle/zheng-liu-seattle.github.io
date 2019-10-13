---
layout: post
title: "Server-Sent Events"
date: 2019-7-10
categories:
  - work
description:
image: /assets/images/SSE.png
image-sm: /assets/images/SSE.png
comments: true
---

Now days, there are three different technologies to be used for communication bewteen server and client.

_Web Socket_

_Pulling by Restful API_

_Server Sent Events (SSE)_

I have been using the first two for years, but never
thought about using SSE for my porjects until recently I am planning to improve the Push Notification system for mobile applications.

## What is SSE?

In short, it’s a technology standard that allows server-to-client streaming of text-based event data over a HTTP connection. SSE makes working with real-time data simple and efficient, using just one, long-lived HTTP connection.

One of the most important feature is the data communication only happens one-way, in this case from the server to the client. This is the major difference from WebSocket which is bi-directional communication.

SSE standard provides multiple out-of-the-box features that WebSockets lack, such as reconnection handling.

Here are some major differens between SSE and WebSocket.

1. SSE is using HTTP protocal, while WebSocket is a separate protocal.
2. SSE is simpler than WebSocket.
3. SSE default support reconnection handling, WebSocket doesn't.

## Use Cases

Since SSE only support one way communication from server to client, if any use cases require two way communication can't use SSE at all, like Chat Room.

In my use case, I want to use SSE to replace APNS / FCM push notification from Apple / Google, especially FCM is not free.
