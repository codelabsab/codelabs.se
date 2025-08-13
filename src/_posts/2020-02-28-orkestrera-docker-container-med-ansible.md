---
title: Using Ansible for orchestrating Docker containers
slug: orchestrate-docker-containers-with-ansible
date: "2020-02-28"
description: Ansible deploy & orchestration of applications with Docker.
og_image: /assets/blogg/ansible-docker.png
author: Pär Berge
---

_There are almost as many ways to set up your application as there are
applications. In this article we will take a closer look at one way, using
Ansible to deploy or orchestrate applications in Docker containers. Code Labs'
Mattias Lundberg walks us through it._

Ansible is a platform for managing servers and what runs on servers. In Ansible
you use so-called playbooks to make changes to one or more servers
simultaneously. A playbook has settings for which servers it should run against
and what it should perform - tasks. A task can be installing a package or
ensuring that a container is running.

Docker is a system for packaging and running applications in a consistent way
regardless of which programming language it's written in. Docker builds and runs
containers which can be seen as small and lightweight virtual machines.

Orchestration is automated configuration and management of multiple computer
systems and software. In this article it's used to describe how and where a
certain application runs.

For orchestration of containers there are lots of different ways to handle them.
A common system is Kubernetes which makes orchestration simple. A disadvantage
that Kubernetes brings, especially in smaller environments, is that it's
relatively complex to set up and maintain. For simpler applications it's often
too big a cost to run Kubernetes or other similar systems.

In a project we chose to use Ansible to control and manage containers instead of
using a more full-featured solution like Kubernetes. The application was set up
in AWS and consisted of a small web application that was planned to be kept
small and isolated. The application needed a database, load balancer and
multiple application servers. Here we focus on the application servers.

The application consisted of a codebase that could run in the same way on
multiple servers in parallel.

For orchestration, Ansible was chosen because it was used elsewhere in the
organization and the team had some experience with it.

A number of servers were set up (along with support services) using Terraform
and then Ansible was used for all management of server and application
configuration. After a server was set up, the following steps were required:

1. Run an Ansible playbook to install the base system
2. Run an Ansible playbook to deploy the application

## Base system playbook

The base system playbook handles the installation and configuration of
everything needed to run the application but which is not the application
itself. This includes:

- Installing Docker
- Setting up users and permissions
- Configuring firewalls
- Installing monitoring tools
- Setting up log rotation

```yaml
---
- hosts: app_servers
  become: yes
  tasks:
    - name: Install Docker
      apt:
        name: docker.io
        state: present
        update_cache: yes

    - name: Start Docker service
      service:
        name: docker
        state: started
        enabled: yes

    - name: Add user to docker group
      user:
        name: "{{ ansible_user }}"
        groups: docker
        append: yes
```

## Application deployment playbook

The application deployment playbook handles the actual deployment of the
application:

```yaml
---
- hosts: app_servers
  tasks:
    - name: Pull application image
      docker_image:
        name: "{{ app_image }}"
        tag: "{{ app_version }}"
        source: pull

    - name: Stop old container
      docker_container:
        name: app
        state: absent

    - name: Start new container
      docker_container:
        name: app
        image: "{{ app_image }}:{{ app_version }}"
        state: started
        restart_policy: always
        ports:
          - "8080:8080"
        env:
          DATABASE_URL: "{{ database_url }}"
```

## Benefits of this approach

1. **Simplicity**: Easier to understand and maintain than Kubernetes
2. **Flexibility**: Can easily customize deployment for specific needs
3. **Familiarity**: Many teams already know Ansible
4. **Cost-effective**: No additional infrastructure needed
5. **Gradual adoption**: Can start simple and add complexity as needed

## Drawbacks

1. **Manual scaling**: No automatic scaling like Kubernetes provides
2. **Service discovery**: Must handle service discovery manually
3. **Health checks**: Need to implement health monitoring separately
4. **Load balancing**: Must configure load balancing externally

## Conclusion

Using Ansible for Docker orchestration is a good middle ground between manual
deployment and full container orchestration platforms. It works well for smaller
applications or teams that want to start simple and gradually add complexity.

While it doesn't provide all the features of Kubernetes, it offers a much
simpler setup and maintenance overhead, making it an attractive choice for many
projects.

The approach scales reasonably well up to a certain point, after which you might
want to consider migrating to a more specialized container orchestration
platform.
