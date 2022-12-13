---
name: BottomBar

subName: 底部导航栏

group: 导航
---

# BottomBar 底部导航栏

## Usage

### 基础

```tsx live Base
import { BottomBar, Box, Badge } from '@music/dolphin-rn';
import React, { useState } from 'react';
import isLokiRunning from '@loki/is-loki-running';
const lokiRunning = isLokiRunning();

const findIcon = lokiRunning ? '' : 'outline/find';
const podcastIcon = lokiRunning ? '' : 'outline/podcast';
const mineIcon = lokiRunning ? '' : 'outline/mine';
const followIcon = lokiRunning ? '' : 'outline/follow';

export default () => {
  const [activeKey, setActiveKey] = useState('2');
  return (
    <Box bg="backgroundColor: '#CCC'">
      <Box w={375} margin={5}>
        一行 4 个
        <BottomBar defaultActiveKey="2">
          <BottomBar.Item
            key="1"
            icon={findIcon}
            title="发现"
            badge={<Badge />}
          />
          <BottomBar.Item key="2" icon={podcastIcon} title="播客" />
          <BottomBar.Item key="3" icon={mineIcon} title="我的" />
          <BottomBar.Item key="4" icon={followIcon} title="关注" />
        </BottomBar>
      </Box>
      <Box w={375} margin={5}>
        一行 3 个
        <BottomBar>
          <BottomBar.Item key="1" icon={findIcon} title="发现" />
          <BottomBar.Item key="2" icon={podcastIcon} title="播客" />
          <BottomBar.Item key="3" icon={mineIcon} title="我的" />
        </BottomBar>
      </Box>
      <Box w={375} margin={5}>
        受控
        <BottomBar activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
          <BottomBar.Item key="1" icon={findIcon} title="发现" />
          <BottomBar.Item key="2" icon={podcastIcon} title="播客" />
          <BottomBar.Item key="3" icon={mineIcon} title="我的" />
          <BottomBar.Item key="4" icon={followIcon} title="关注" />
        </BottomBar>
      </Box>
      <Box w={375} margin={5}>
        改变颜色
        <BottomBar activeColor="#2196f3" inactiveColor="#000">
          <BottomBar.Item key="1" icon={findIcon} title="发现" />
          <BottomBar.Item key="2" icon={podcastIcon} title="播客" />
          <BottomBar.Item key="3" icon={mineIcon} title="我的" />
        </BottomBar>
      </Box>
    </Box>
  );
};
```

## API

### BottomBar

| 参数             | 说明           | 类型                   | 默认值 |
| ---------------- | -------------- | ---------------------- | ------ |
| activeKey        | 选中值         | string                 | -      |
| defaultActiveKey | 初始化选中值   | string                 | -      |
| activeColor      | 选中色         | string                 | -      |
| inactiveColor    | 未选中色       | string                 | -      |
| fixed            | 是否固定在底部 | boolean                | -      |
| onChange         | 切换回调       | (key: string) =\> void | -      |

### BottomBar.Item

| 参数       | 说明                   | 类型      | 默认值 |
| ---------- | ---------------------- | --------- | ------ |
| key        | 唯一值，对应 activekey | string    | -      |
| title      | 标题                   | ReactNode | -      |
| icon       | 图标                   | ReactNode | -      |
| activeIcon | 选中的图标             | ReactNode | -      |
| badge      | 角标，透传 Badge 组件  | ReactNode | -      |
