---
name: Alert

subName: 弹窗

group: 反馈
---

# Alert 弹窗

## Usage

### 基础弹窗

```tsx live Basic
import { Alert, Button, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Box>
      <Button onPress={() => setVisible(true)}>show</Button>
      <Alert
        visible={visible}
        title="这里是一个弹窗"
        content="弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容"
        cancelButtonText="取消"
        extra="额外信息"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        banner={{
          height: 152,
          width: 288,
          uri: 'https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7532377519/9556/a6eb/27b0/c01dbbacfac13c2b93a6fd6176bb6763.png',
        }}
      />
    </Box>
  );
};
```

### 事件回调

```tsx live Event
import { Alert, Button, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Box>
      <Button onPress={() => setVisible(true)}>show</Button>
      <Alert
        visible={visible}
        title="这里是一个弹窗"
        content="弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容"
        cancelButtonText="取消"
        extra="额外信息"
        banner={{
          height: 152,
          width: 288,
          uri: 'https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7532377519/9556/a6eb/27b0/c01dbbacfac13c2b93a6fd6176bb6763.png',
        }}
        onOk={() => {
          console.log('点击了确定');
          setVisible(false);
        }}
        onCancel={() => {
          console.log('点击了取消');
          setVisible(false);
        }}
        onClose={() => {
          console.log('点击了关闭');
          setVisible(false);
        }}
        onMaskPress={() => {
          console.log('点击了遮罩');
          setVisible(false);
        }}
        onBannerPress={() => {
          console.log('点击了图片');
        }}
      />
    </Box>
  );
};
```

### 图片弹窗

```tsx live Banner
import { Alert, Button, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Box>
      <Button onPress={() => setVisible(true)}>show</Button>
      <Alert
        visible={visible}
        okButtonText=""
        bannerImageStyle={{
          left: -17,
        }}
        banner={{
          height: 323,
          width: 323,
          uri: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13429803603/4628/ebe3/2187/7056ea97d0c037a4a40f74b74077140a.png',
        }}
        bg="transparent"
        onBannerPress={() => {
          console.log('点击了图片');
        }}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </Box>
  );
};
```

### 异形图

```tsx live BannerSpecial
import { Alert, Button, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Box>
      <Button onPress={() => setVisible(true)}>show</Button>
      <Alert
        visible={visible}
        title="这里是一个弹窗"
        content="banner 可以放置超出弹窗边框的异形图片"
        bannerImageStyle={{
          left: -17,
          top: -40,
        }}
        bannerStyle={{
          overflow: 'visible',
        }}
        banner={{
          height: 275,
          width: 323,
          uri: 'https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/10838683794/b0ce/d516/d96e/b28e7388d70dfdc80412a2442232177a.png',
        }}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </Box>
  );
};
```

### 自定义头图节点

```tsx live BannerCustom
import { Alert, Button, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Box>
      <Button onPress={() => setVisible(true)}>show</Button>
      <Alert
        visible={visible}
        title="这里是一个弹窗"
        content="banner 节点可以自定义"
        banner={
          <Box mt={20} alignItems="center">
            这里是一个banner节点
          </Box>
        }
        bannerStyle={{
          overflow: 'visible',
        }}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </Box>
  );
};
```

### 弹窗 View

```tsx live View
import { Alert, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  return (
    <Box bg="#ccc" py={60}>
      <Alert.View
        visible
        title="这里是一个弹窗"
        content="弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容"
        cancelButtonText="取消"
        extra="额外信息"
        banner={{
          height: 152,
          width: 288,
          uri: 'https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7532377519/9556/a6eb/27b0/c01dbbacfac13c2b93a6fd6176bb6763.png',
        }}
      />
    </Box>
  );
};
```

## API

### Alert

| 参数             | 说明             | 类型                               | 默认值 |
| ---------------- | ---------------- | ---------------------------------- | ------ |
| banner           | 顶部头图         | Element &#124; ImageSourcePropType | -      |
| title            | 标题             | string &#124; Element              | -      |
| content          | 内容             | string &#124; Element              | -      |
| okButtonText     | 确认按钮文字     | string                             | 确认   |
| cancelButtonText | 取消按钮文字     | string                             | -      |
| extra            | 底部额外区域     | string &#124; Element              | -      |
| closable         | 是否显示关闭按钮 | boolean                            | true   |
| onOk             | 点击确认按钮     | () =\> void                        | -      |
| onCancel         | 点击取消按钮     | () =\> void                        | -      |
| onClose          | 点击关闭按钮     | () =\> void                        | -      |
| onBannerPress    | 图片区域点击     | () =\> void                        | -      |
| bannerStyle      | 头图区域样式     | any                                | -      |
| bannerImageStyle | 头图图片样式     | any                                | -      |

### Alert.View

| 参数             | 说明             | 类型                               | 默认值 |
| ---------------- | ---------------- | ---------------------------------- | ------ |
| banner           | 顶部头图         | Element &#124; ImageSourcePropType | -      |
| title            | 标题             | string &#124; Element              | -      |
| content          | 内容             | string &#124; Element              | -      |
| okButtonText     | 确认按钮文字     | string                             | 确认   |
| cancelButtonText | 取消按钮文字     | string                             | -      |
| extra            | 底部额外区域     | string &#124; Element              | -      |
| closable         | 是否显示关闭按钮 | boolean                            | true   |
| onOk             | 点击确认按钮     | () =\> void                        | -      |
| onCancel         | 点击取消按钮     | () =\> void                        | -      |
| onClose          | 点击关闭按钮     | () =\> void                        | -      |
| onBannerPress    | 图片区域点击     | () =\> void                        | -      |
| bannerStyle      | 头图区域样式     | any                                | -      |
| bannerImageStyle | 头图图片样式     | any                                | -      |
