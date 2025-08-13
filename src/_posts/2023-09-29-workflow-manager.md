---
layout: post
title: Workflow Manager
slug: workflow-manager
date: "2023-09-29"
og_image: /assets/blogg/workflow-manager.jpg
description: A solution for efficient scheduled workflows in Github
author: Pär Berge
---

![workflow manager dashboard](/assets/blogg/workflow-manager-ss1.png)
[Workflow Manager](https://github.com/codelabsab/workflow-manager) is the result
of an innovation week, or hackweek as we at Codelabs call it. It's a solution
for scheduling workflows (a.k.a
[workflows](https://docs.github.com/en/actions/using-workflows)) in Github.

Unlike Github's built-in solution for scheduling workflows, Workflow Manager is
more flexible and can schedule workflows in a more advanced way.

## The problem

Github's built-in solution for scheduling workflows uses
[cron expressions](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule),
which is a good solution for simple scheduling. But if you want to schedule
workflows in a more advanced way, such as:

- Scheduling workflows to run at specific times on specific days
- Scheduling workflows to run only on weekdays
- Scheduling workflows to run only during certain months
- Being able to see an overview of when workflows are scheduled to run

Then Github's built-in solution is not sufficient.

## The solution

Workflow Manager is a web application that provides a user-friendly interface
for scheduling workflows in Github. It uses
[Github's REST API](https://docs.github.com/en/rest) to trigger workflows and
[Github's webhooks](https://docs.github.com/en/developers/webhooks-and-events/webhooks)
to listen for workflow events.

![workflow manager calendar](/assets/blogg/workflow-manager-ss2.png)

The application is built with [Next.js](https://nextjs.org/) and
[Tailwind CSS](https://tailwindcss.com/) and uses
[Supabase](https://supabase.io/) as database.

## Features

- **Schedule workflows**: Schedule workflows to run at specific times on
  specific days
- **Calendar view**: See an overview of when workflows are scheduled to run
- **Workflow history**: See a history of when workflows have run
- **Multiple repositories**: Manage workflows across multiple repositories
- **User management**: Multiple users can use the same instance

![workflow manager workflow list](/assets/blogg/workflow-manager-ss3.png)

## How it works

The application works by storing scheduled workflows in a database and then
using a cron job to check if any workflows should be triggered. When a workflow
should be triggered, the application uses Github's REST API to trigger the
workflow.

## Try it out

Workflow Manager is open source and available on
[Github](https://github.com/codelabsab/workflow-manager). You can also try out a
demo instance [here](https://workflow-manager.codelabs.se/).

## Future plans

We have several ideas for how to develop Workflow Manager further:

- Support for more advanced scheduling rules
- Integration with other CI/CD platforms
- Support for workflow dependencies
- Better visualization of workflow history

If you have ideas or want to contribute, we welcome contributions via
[Github](https://github.com/codelabsab/workflow-manager)!
