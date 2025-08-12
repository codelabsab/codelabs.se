---
title: Adding real-time support to a webapp
slug: elixir-adding-support-in-app
date: "2020-10-12"
description: Walkthrough of how to easily use Elixir in an existing app
tags: [elixir, webapp, real-time support]
og_image: /assets/blogg/phoenix-elixir.webp
author: Mattias Lundberg
---

In a [previous post](https://codelabs.se/elixir-och-varfor-du-ska-anvanda-det) I
introduced Elixir, what it is and how you can use it. One of the places where I
personally have seen great value in Elixir and its strengths is using it to add
real-time support to an existing webapp. Either as a replacement for previous
solutions based on periodic polling of an API or solutions with websockets from
other frameworks.

The example we'll start with is a simple booking system, where a user can book a
resource by opening it and making a booking that lasts from now until it's
manually ended. To keep the example as simple as possible, there is no user
management or backend, but everything is handled in the frontend with a static
list of resources.

The system lists all resources
![The system lists all resources](/assets/blogg/image1.png)

Confirmation when a user books a resource
![Booking confirmation](/assets/blogg/image4.png)

In this app, the confirmation consists of a simple question, however it's common
to require the user to fill in additional information about the booking. In
these cases, the filling takes longer and it becomes more important to be able
to show that the filling is in progress.

Why would you want to add real-time support? In this example it might seem
unnecessary, but it's often the case that users expect to immediately see
changes that other users make. This could be, for example, if the booking system
is used by a large number of users or if it's some other type of system where
multiple users interact with each other, for example if you want to be able to
chat with each other from within the system.

You can find the skeleton of the system used on
[Github](https://github.com/mattiaslundberg/elixir-realtime/tree/3276afa1e12c4e3bab70e4ca4592a412d6d055e0/frontend),
where there are also instructions for how you can show the app locally if you
want to follow along from your own computer.

The first thing we need to do is install Elixir and Phoenix. You can find
Elixir's official installation instructions
[here](https://elixir-lang.org/install.html). After that you install Phoenix, or
at least the tool needed to create a new project with Phoenix with
`mix archive.install hex phx_new 1.5.6`. Now we're ready to create the Phoenix
project that we'll build on by running the command
`mix phx.new realtime --no-ecto --no-html --no-webpack --no-gettext` This
creates a foundation for the project, which doesn't contain any database, any
frontend or any translations. In our example this is already handled by the
existing application.

## Setting up the Phoenix server

Phoenix comes with built-in support for websockets through channels. A channel
is a way to handle two-way communication between client and server. In our case,
we want to create a channel that handles bookings of resources.

First, we need to create a channel module:

```elixir
defmodule RealtimeWeb.BookingChannel do
  use Phoenix.Channel

  def join("booking:lobby", _params, socket) do
    {:ok, socket}
  end

  def handle_in("book_resource", %{"resource_id" => resource_id}, socket) do
    broadcast(socket, "resource_booked", %{"resource_id" => resource_id})
    {:noreply, socket}
  end

  def handle_in("release_resource", %{"resource_id" => resource_id}, socket) do
    broadcast(socket, "resource_released", %{"resource_id" => resource_id})
    {:noreply, socket}
  end
end
```

This channel handles three things:

1. Joining the channel
2. Booking a resource
3. Releasing a resource

When a resource is booked or released, the channel broadcasts the change to all
connected clients.

## Connecting from the frontend

To connect to the Phoenix channel from our JavaScript frontend, we use the
Phoenix JavaScript client:

```javascript
import { Socket } from "phoenix";

let socket = new Socket("/socket", { params: { token: window.userToken } });
socket.connect();

let channel = socket.channel("booking:lobby", {});
channel.join()
  .receive("ok", (resp) => {
    console.log("Joined successfully", resp);
  })
  .receive("error", (resp) => {
    console.log("Unable to join", resp);
  });

// Listen for resource bookings
channel.on("resource_booked", (payload) => {
  updateResourceStatus(payload.resource_id, "booked");
});

// Listen for resource releases
channel.on("resource_released", (payload) => {
  updateResourceStatus(payload.resource_id, "available");
});

// Book a resource
function bookResource(resourceId) {
  channel.push("book_resource", { resource_id: resourceId });
}

// Release a resource
function releaseResource(resourceId) {
  channel.push("release_resource", { resource_id: resourceId });
}
```

## Benefits of this approach

1. **Real-time updates**: All users see changes immediately
2. **Scalable**: Phoenix can handle thousands of concurrent connections
3. **Fault-tolerant**: If a connection is lost, Phoenix automatically reconnects
4. **Easy to implement**: The WebSocket handling is abstracted away

## Conclusion

By adding Phoenix and Elixir to handle real-time communication, we can easily
add live updates to an existing application without having to rewrite the entire
frontend or backend. This gives users a much better experience and makes the
application feel more responsive and modern.

The complete example code is available on
[Github](https://github.com/mattiaslundberg/elixir-realtime) if you want to
explore further or use it as a starting point for your own real-time features.
