---
title: Docker 筆記
publishedAt: August 18, 2023
editedAt:
state: default
description: Notes for Docker crash course from DevOps Directive
---

https://www.youtube.com/watch?v=RqTEHSBrYFw

## Why Docker

![benefits of docker](/images/benefitsofdocker.jpg)
[Source](https://courses.devopsdirective.com/docker-beginner-to-pro/lessons/01-history-and-motivation/01-motivation)

避免開發時各個 dependency 的相依性問題，以及部署時與開發環境不同產生的問題。

### Bare Metal

pros: easy, direct access
cons: dep conflicts, safety issue(one app might crash the other), hard to scale?

### Virtual Machine (Hypervisor)

依據 host 是否有 OS 區分為 
Type-1 no OS: Microsoft Hyper-V, AWS Nitro (more performant)
Type-2 there's host OS (VirtualBox)
創造出虛擬的硬體層

pros: 解決相依性問題、透過切分硬體達到更高的效率(utilization)

### Container

On Linux: similar to VM but sharing the same Kernel

## 實作原理

utilizing linux features including: cgroups/namespace/union fileystems

cgroups:分配特定 application? 可使用的資源(CPU,memory,storage..)

non-Linux OS: 安裝 Docker Desktop 時透過Hyper-V創造出Linux 虛擬機(on Windows there'a WSL2)

透過 Docker CLI 操作 Docker Daemon API

## Container vs. Container Image

Container image 就像物件的 class 包含了其所需要的屬性及方法，container image 則包含了：

1. OS (Ubuntu, Alpine) 
2. Language Runtime (Node.js, Python) 
3. Libs (React, Express) 
4. Source Code

container 即是透過 image instantiate 的實體。

## Reference

[Docker: Beginner to Pro](https://courses.devopsdirective.com/docker-beginner-to-pro)

[What is meant by shared kernel in Docker?](https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker)

[Is Docker using my own system's kernel or base image's kernel?](https://stackoverflow.com/questions/48627110/is-docker-using-my-own-systems-kernel-or-base-images-kernel?rq=3)

[How does Docker for Windows run Linux containers?](https://stackoverflow.com/questions/41550727/how-does-docker-for-windows-run-linux-containers)