---
sidebar_position: 1
---

# Quick Start

## Create  

在使用组件之前，需要准备好组件的运行环境。对于新应用而言，可直接在 [Febase](https://febase.netease.com/?tenantId=1) 上创建 React Native 应用。

按照使用场景的不同，可选 [拆包 RN 应用](https://febase-doc.st.netease.com/docs/app-rn/rn-multi) 和 [常规 RN 应用](https://febase-doc.st.netease.com/docs/app-rn/rn) 。

<RawImg style={{width:800}} src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/17558616227/c48b/35f0/a8fe/3d4e17fb94e757c36007d0713c02cc4a.png"/>

## install

应用准备好后，便可安装相关依赖：

```sh
npm i -S @music/dolphin-rn@^1.0.0
```

然后开发调试：

```sh
npm run start
```

## 使用组件

最简单的用法：

```tsx
import { Button } from '@music/dolphin-rn';

export default () => <Button> hello </Button>;
```

## 问题反馈

如果在开发中遇到了问题，可以到 [常见问题](https://haitun.netease.com/app/5/doc/413/540) 中寻找答案。

对于无法自助解决的，可以在 [Playground](https://playground.ft.netease.com/) 上创建一个可复现的最小 Demo，然后在 [POPO 群](https://popo.netease.com/static/html/open_popo.html?ssid=2482126&sstp=1) 反馈给我们，我们将在第一时间协助解决问题。

海豚组件答疑群：

<RawImg style={{width:300}} src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/17557920054/91ce/f547/6224/d07de5f7263a608bd1d314046872ba91.png"/>
