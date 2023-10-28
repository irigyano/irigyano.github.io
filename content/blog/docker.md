---
title: Docker 🐳
publishedAt: October 28, 2023
editedAt:
state: default
description: but it works on my machine 🤔
---

## TL;DR

### Why Docker?

![https://courses.devopsdirective.com/docker-beginner-to-pro/lessons/01-history-and-motivation/01-motivation](/images/benefitsofdocker.jpg)

- 開發階段

避免開發時各個 dependency 的相依性問題並省去繁瑣的 configuration，以及部署環境與開發環境不同潛在的問題..，

僅需要 docker compose 一個指令即可將前端、後端及資料庫..，省去

- 佈署階段

TBA

## Terminology

### History

以下就不同環境的優劣比較：

1. Bare Metal

直接對 host machine 操作的模式都能視為 bare metal，提供簡單 easy, direct access，缺點也非常明顯，dep conflicts, safety issue(one app might crash the other)

2. Virtual Machine（Hypervisor）

依據 host 是否有 OS (X) VM 是否能直接與硬體互動 可區分為

Type-1 （no OS thus more performant）: Microsoft Hyper-V、AWS Nitro

Type-2 （OS）：VirtualBox

基於 host machine 上虛擬出硬體層，可以看待為切分出新的 machine，

pros: 解決相依性問題、透過切分硬體達到更高的效率(utilization)

3. Container

On Linux: similar to VM but sharing the same Kernel

在 Windows & Mac 環境中則是先透過 VM（Hyper-V）創造出一個虛擬的 Linux 環境，

### huh

Skip this part if you're a web andy like me who also have no idea what th OS is doing underneath Pepega Clap

utilizing linux features including: cgroups/namespace/union fileystems

cgroups:分配特定 application? 可使用的資源(CPU,memory,storage..)

non-Linux OS: 安裝 Docker Desktop 時透過 Hyper-V 創造出 Linux 虛擬機(on Windows there'a WSL2)

透過 Docker CLI 操作 Docker Daemon API

### Container vs. Container Image

Container image 就像物件的 class 包含了其所需要的屬性及方法，container image 則包含了：

1. OS Dependencies（Ubuntu、Alpine）
2. Language Runtime （Node.js、Python）
3. Libs （React、Express）
4. Source Code

container 即是透過 image instantiate 的實體。

### Bind vs. Volume

Container 如何儲存資料

每次透過 image 產生的 container 都是新的實體且只包含 image 中敘明的屬性及方法，欲儲存 app 產生的資料（寫入 database 的資料、error log 等）則可以透過 Volume mount 及 Bind mount 兩種手段達成：

both create data on host machine, but volume mount is preferred since its managed by docker daemon hence more stable.

1. Volume mount

store data from database, but usually store to the cloud?

須特別在 compose 中註明 volume 的名稱，否則預設使用 bind?

2. Bind mount

Mainly for developing experience (hot reload)

### Docker Networking

docker network ls

<service_name>:<container_port> to direct connect

### Dockerfile vs. compose

some args can be set in both files, while compose would have precedency

## Reference

[Docker: Beginner to Pro](https://courses.devopsdirective.com/docker-beginner-to-pro)

[What is meant by shared kernel in Docker?](https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker)

[How does Docker for Windows run Linux containers?](https://stackoverflow.com/questions/41550727/how-does-docker-for-windows-run-linux-containers)

[Hyper-V appears to runs on top of the host OS, so why is it considered a native (type-1) hypervisor?](https://superuser.com/questions/836116/hyper-v-appears-to-runs-on-top-of-the-host-os-so-why-is-it-considered-a-native)

https://www.reddit.com/r/kubernetes/comments/ukhi3t/different_dockerfile_for_dev_vs_stagingprod/

https://www.reddit.com/r/docker/comments/nkkycv/separate_dockerfile_for_development/

https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp

Development:
Goal: single 'compose' command to setup 1. frontend hot reload server 2. backend api 3. local database
notes: mount the source code to avoid rebuilding everytime

Prod/Deployment:
Goal: single compose' to run all the images including: 1. how to serve static files? 2. backend image 3. connect to prod db 4. nginx?
