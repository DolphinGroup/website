---
name: Box

subName: 盒子

group: 基础
---

# Box 盒子

## 注意：

animation 为 true 时，获取 Box 节点 ref 信息分别有以下两种方式：

- ref.current.target：获取 Box 内部的容器节点
- ref.current.target.\_component：获取 Box 节点

## Usage

### 基础用法

```tsx live Basic
import { Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  return (
    <Box _text={{ color: '#fff' }} bg="colorPrimary1" p={10}>
      I am a Box
    </Box>
  );
};
```

### 渐变背景

```tsx live Gradient
import { Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  return (
    <Box
      _text={{ color: '#fff' }}
      p={10}
      linearGradientProps={{
        useAngle: true,
        angle: 225,
        angleCenter: { x: 0.5, y: 0.5 },
        colors: ['#B477FF', '#F65EBA', '#FF4D4D'],
        locations: [0, 0.5, 1],
      }}>
      I am a linearGradient Box
    </Box>
  );
};
```

## API

### Box

| 参数                | 说明             | 类型                                                                                                                                                                                                                                                                               | 默认值 |
| ------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| children            | 子节点           | any                                                                                                                                                                                                                                                                                | -      |
| bg                  | 背景色           | ResponsiveValue\<"colorPrimary1" &#124; "colorPrimary2" &#124; "colorPrimary3" &#124; "colorPrimary4" &#124; "colorPrimary5" &#124; "colorPrimary6" &#124; "colorPrimary7" &#124; "colorSecondary11" &#124; "colorSecondary12" &#124; ... 63 more ... &#124; LinearGradientProps\> | -      |
| background          | 同上，背景色     | ResponsiveValue\<"colorPrimary1" &#124; "colorPrimary2" &#124; "colorPrimary3" &#124; "colorPrimary4" &#124; "colorPrimary5" &#124; "colorPrimary6" &#124; "colorPrimary7" &#124; "colorSecondary11" &#124; "colorSecondary12" &#124; ... 63 more ... &#124; LinearGradientProps\> | -      |
| bgColor             | 同上，背景色     | ResponsiveValue\<"colorPrimary1" &#124; "colorPrimary2" &#124; "colorPrimary3" &#124; "colorPrimary4" &#124; "colorPrimary5" &#124; "colorPrimary6" &#124; "colorPrimary7" &#124; "colorSecondary11" &#124; "colorSecondary12" &#124; ... 63 more ... &#124; LinearGradientProps\> | -      |
| backgroundColor     | 同上，背景色     | ResponsiveValue\<"colorPrimary1" &#124; "colorPrimary2" &#124; "colorPrimary3" &#124; "colorPrimary4" &#124; "colorPrimary5" &#124; "colorPrimary6" &#124; "colorPrimary7" &#124; "colorSecondary11" &#124; "colorSecondary12" &#124; ... 63 more ... &#124; LinearGradientProps\> | -      |
| linearGradientProps | 线性渐变背景     | LinearGradientProps                                                                                                                                                                                                                                                                | -      |
| animation           | 是否需要支持动画 | boolean                                                                                                                                                                                                                                                                            | false  |
