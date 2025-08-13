---
title: What Elixir is and why you should use it
slug: elixir-and-why-you-should-use-it
date: "2020-05-06"
description: Elixir is a relatively new programming language created by José Valim and launched in 2011.
tags: [elixir, webapp, real-time support]
og_image: /assets/blogg/elixir-featuredImage.jpg
author: Mattias Lundberg
---

**[Elixir](https://elixir-lang.org/) is a relatively new programming language
created by José Valim and launched in 2011. It has quickly become popular for
several reasons, including its simplicity to develop in and that it runs on
BEAM, Erlang's virtual machine, which provides high
[reliability.](https://www.erlang-solutions.com/blog/which-companies-are-using-erlang-and-why-mytopdogstatus.html)**

To give background to Elixir, we start by going through Erlang.
[Erlang](https://www.erlang.org/) was created during the 1980s at Ericsson to be
used in telephone exchanges where there are high demands for availability and
stability while also needing high performance. It was then important to have
robustness built into the language from the beginning. The robustness comes
largely from its own process management where systems are often designed with
lots of small processes that keep track of their own state and error handling.
If a process has problems, Erlang automatically restarts the failing and related
processes to restore the system to a known and working state. A typical system
can consist of hundreds of processes and these are not ordinary operating system
processes but Erlang has its own types of processes that require less
performance. Thanks to this, Erlang has long been a common language for systems
that need to route large amounts of data, like telephone exchanges, and is used
among other things in [RabbitMQ](https://www.rabbitmq.com/) and for WhatsApp.

Other important components in Erlang are variable immutability, a value will
never be able to change in the same structure but instead you create new
variables, and its functional design. This means you can completely avoid the
type of bugs where data inexplicably changes somewhere else in the system. These
advantages have then followed as important components in Elixir. In addition,
Elixir builds on this and provides additional advantages especially when it
comes to tools around development and production environments in the form of the
[Mix](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html)
tool. It can handle everything from code generation to dependency management,
builds and releases. With the help of the tool, it's easy to handle most
commonly occurring tasks related to these areas.

One area where Elixir has found its niche is embedded systems/IoT where the
Nerves project has made it easy to use Elixir for several different purposes.
It's used for both hobby projects and by several large companies. Nerves makes
it easier to manage and work with these types of systems compared to C/C++.

Another area where Elixir has become appreciated is in more advanced web
systems, thanks to the Phoenix and Ecto frameworks. Ecto is used to talk to
databases and has an easy-to-use API for interacting with the database from an
Elixir application. Phoenix is a web framework that makes it easy to build
different types of HTTP APIs.

What makes Phoenix special, thanks to Elixir, is that it's easy to build
services with real-time support via websockets. This type of real-time support
is something that helps when multiple users need to collaborate in a web app,
for example word processing programs, as all users can see what others are
doing. Another advantage with Phoenix is that you automatically get system
monitoring in the form of a dashboard with several different metrics displayed,
something that can then be forwarded to external systems for monitoring if
available. Another is Live View, which makes it possible to build dynamic
interfaces without having to write frontend code, all views are rendered on the
server which then uses websockets to update what is shown in the browser. This
makes it much easier to build modern web apps, even if it doesn't give quite as
many possibilities as if you use a frontend framework.

```elixir
# In your config/config.exs file
config :my_app, ecto_repos: [Sample.Repo]

config :my_app, Sample.Repo,
  database: "ecto_simple",
  username: "postgres",
  password: "postgres",
  hostname: "localhost"

# In your lib/sample/repo.ex file
defmodule Sample.Repo do
  use Ecto.Repo,
    otp_app: :my_app,
    adapter: Ecto.Adapters.Postgres
end

# Creating a schema
defmodule Sample.User do
  use Ecto.Schema

  schema "users" do
    field :name, :string
    field :email, :string
    field :bio, :string
    field :number_of_pets, :integer

    timestamps()
  end
end

# Querying the database
import Ecto.Query

query = from u in Sample.User,
        where: u.number_of_pets > 2,
        select: u

Sample.Repo.all(query)
```

![Phoenix Framework](/assets/blogg/phoenix.png)

The example above shows what a simple schema looks like in Ecto and how you can
make a query to the database. The nice thing is that these queries are built
statically, which means you get help from the compiler if you make syntax errors
or try to query fields that don't exist in the schema.

Phoenix also comes with built-in support for GraphQL through the Absinthe
library, which makes it easy to build APIs that are flexible and efficient for
frontend applications.

## When should you choose Elixir?

Elixir is particularly well-suited for:

1. **Real-time applications** - Chat systems, live updates, collaborative tools
2. **High-availability systems** - Applications that need to handle failures
   gracefully
3. **IoT and embedded systems** - Thanks to the Nerves project
4. **API backends** - Especially when you need to handle many concurrent
   requests
5. **Data processing** - Systems that need to process streams of data

## Getting started

If you're interested in trying Elixir, the best place to start is the
[official getting started guide](https://elixir-lang.org/getting-started/introduction.html).
There you'll learn the basics of the language and how to build your first
applications.

For web development with Phoenix, there's an excellent
[Phoenix guide](https://phoenixframework.org/guides) that takes you through
everything from installation to building your first real-time web application.

## Conclusion

Elixir offers a unique combination of functional programming, fault tolerance
and excellent performance for concurrent systems. While it may not be the right
choice for every project, it excels in areas where reliability and real-time
features are important.

The growing ecosystem around Elixir, with tools like Phoenix, Ecto and Nerves,
makes it an attractive choice for modern web development and IoT projects. If
you're looking for a language that can handle high loads while keeping your code
maintainable and robust, Elixir is definitely worth considering.
