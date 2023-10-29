---
title: Docker 🐳
publishedAt: October 29, 2023
editedAt:
state: default
description: but it works on my machine 🤔
---

## TL;DR

### Why Docker?

![dockertldr](https://courses.devopsdirective.com/_next/image?url=%2Fdocker-beginner-to-pro%2F01-01-development.jpg&w=750&q=75)

- Development

避免不同主機的環境差異，並省去繁瑣的 configuration，僅需要 docker compose 一個指令即可同時執行前端、後端及資料庫，幫助開發者快速 onboard。

- Deployment

TBA

## Terminology

### Image vs. Container

Image 就像 OO 中的 class 包含了物件的屬性及方法，image 主要包含了：

1. OS Dependencies（Alpine、Debian）
2. Language Runtime （Node.js、Python）
3. Libs （React、Express、PostgreSQL）
4. Source Code

container 即是透過 image instantiate 的實體。

### Volumes vs. Bind Mounts

每個 container 皆為獨立的個體，其產生的資料預設情形會隨著該 container 終止而消去。欲儲存其產生的資料（寫入 database 的資料、error log 等）則可以透過 Volumes 及 Bind mounts 兩種手段達成：

- Volumes（Recommended）

根據[官方文件](https://docs.docker.com/storage/volumes/)推薦使用 Volumes，相較於 bind 更加穩定、快速。將資料儲存在由 Docker daemon 管理的特定位置，以 WSL2 環境為例是儲存於：

```ps1
 wsl$\docker-desktop-data\data\docker\volumes
```

- Bind Mounts

資料儲存的位置可由 user 任意指定，常作為開發時實現 hot reload 的手段，不建議在 production 環境中使用。

### Docker Network

Container 可透過 exposed port 與 host machine 溝通，若是要讓 container 之間溝通則需要使用 Docker network。

```zsh
docker network ls
# within container
<service>:<port>
```

### Dockerfile vs. compose

部份的參數例如 ENV 可同時在 Dockerfile 和 compose 中設定，若有重複的參數則以 compose 中的優先使用。在設定 Dockerfile 時建議直接以 production 環境的情境設定，開發時再透過 compose 覆蓋掉部份設定建立開發環境。

## Reference

[Docker: Beginner to Pro](https://courses.devopsdirective.com/docker-beginner-to-pro)

[What is meant by shared kernel in Docker?](https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker)

[How does Docker for Windows run Linux containers?](https://stackoverflow.com/questions/41550727/how-does-docker-for-windows-run-linux-containers)

[Hyper-V appears to runs on top of the host OS, so why is it considered a native (type-1) hypervisor?](https://superuser.com/questions/836116/hyper-v-appears-to-runs-on-top-of-the-host-os-so-why-is-it-considered-a-native)

[Different Dockerfile for Dev vs Staging/Prod](https://www.reddit.com/r/kubernetes/comments/ukhi3t/different_dockerfile_for_dev_vs_stagingprod/)

[Separate Dockerfile for development?](https://www.reddit.com/r/docker/comments/nkkycv/separate_dockerfile_for_development/)
