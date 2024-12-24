---
title: Setup GitHub SSH on Linux
description: bye bye buddy
date: 2024-12-23
---

1. Generate SSH keys

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Active SSH Agent session

```sh
eval "$(ssh-agent -s)"
```

3. Adding Generated Key to Agent

```sh
ssh-add ~/path/to/private_key
```

4. Adding SSH Public key on github

Visit [GitHub Settings](https://github.com/settings/keys).
