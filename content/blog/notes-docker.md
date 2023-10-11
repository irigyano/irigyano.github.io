---
title: Docker 🐳 筆記
publishedAt:
editedAt:
state: default
description:
---

## TL;DR

- Development

docker compose (e.g. run frontend Vite, Express api, SQL at the same time.)

- Deployment

IIS?

### 透過 Dockerfile 建立 Docker Image

Dockerfile 的內容包含建立 Image 的步驟及參數設定...

```yaml
FROM node:18.17.1-alpine3.18

# Copy files in current workdir into image.
COPY . .
```

建立 Docker Image

```zsh
# https://docs.docker.com/engine/reference/commandline/build/
docker build -t name:version .
```

### 透過 Docker Image 產生 Container

```zsh
docker run
```

### docker run vs. docker compose

```zsh
docker compose up
```

## Why Docker

![https://courses.devopsdirective.com/docker-beginner-to-pro/lessons/01-history-and-motivation/01-motivation](/images/benefitsofdocker.jpg)

避免開發時各個 dependency 的相依性問題並省去繁瑣的 configuration，以及部署環境與開發環境不同潛在的問題，以下就不同環境的優劣比較：

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

## Terminology

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

1. Volume mount

2. Bind mount

### Docker Networking

[Docker Network](https://docs.docker.com/network/)

[How to connect API with Web SPA through docker](https://stackoverflow.com/questions/63136530/how-to-connect-api-with-web-spa-through-docker)

## Reference

[Docker: Beginner to Pro](https://courses.devopsdirective.com/docker-beginner-to-pro)

[What is meant by shared kernel in Docker?](https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker)

[How does Docker for Windows run Linux containers?](https://stackoverflow.com/questions/41550727/how-does-docker-for-windows-run-linux-containers)

[Hyper-V appears to runs on top of the host OS, so why is it considered a native (type-1) hypervisor?](https://superuser.com/questions/836116/hyper-v-appears-to-runs-on-top-of-the-host-os-so-why-is-it-considered-a-native)
