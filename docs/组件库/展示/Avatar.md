---
name: Avatar

subName: 头像

group: 展示
---

# Avatar 头像

## Usage

### 默认

```SnackPlayer dependencies=antd%405.0.0
import { Avatar } from 'antd';
import React from 'react';

export default () => {
  return <Avatar />;
};
```

### 头像类型

```SnackPlayer
import { Avatar, Box } from '@music/dolphin-rn';
import React from 'react';

const imgSource =
  'http://p1.music.126.net/bR1HTKGyDQeCZBMofFIhOg==/109951165406505522.jpg?imageView&thumbnail=140x0&quality=80&tostatic=0&interlace=0&type=webp';

export default () => {
  return (
    <Box>
      <Avatar resourceType="image" resource={imgSource} />
      <Avatar resourceType="text" resource="测试名称" mt={10} />
      <Avatar resourceType="text" resource="name" mt={10} />
      <Avatar resourceType="text" resource="_name" mt={10} />
    </Box>
  );
};
```

### 指定大小

```SnackPlayer
import { Avatar, Box } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  return (
    <Box>
      <Avatar size="xs" />
      <Avatar size="s" mt={10} />
      <Avatar size="m" mt={10} />
      <Avatar size="l" mt={10} />
      <Avatar size="xl" mt={10} />
      <Avatar size="xs" resourceType="text" mt={10} />
      <Avatar size="s" resourceType="text" mt={10} />
      <Avatar size="m" resourceType="text" mt={10} />
      <Avatar size="l" resourceType="text" mt={10} />
      <Avatar size="xl" resourceType="text" mt={10} />
      <Avatar size={80} resourceType="text" mt={10} />
    </Box>
  );
};
```

### 修改默认图片

```SnackPlayer
import { Avatar, Box } from '@music/dolphin-rn';
import React from 'react';

const musician =
  'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9541720907/a58f/6ee7/3b6e/6bca7d6f55ca8147307ccc136e1af2f0.png';

export default () => {
  return (
    <Box>
      <Avatar />
      <Avatar defaultImage={musician} mt={10} />
    </Box>
  );
};
```

### 头像角标 - 红点

```SnackPlayer
import { Avatar, Box, Badge } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  return (
    <Box>
      <Badge size="m" top={0} right={0} containerStyle={{ marginTop: 10 }}>
        <Avatar />
      </Badge>
      <Badge size="m" top={0} right={0} containerStyle={{ marginTop: 10 }}>
        <Avatar resourceType="text" />
      </Badge>
    </Box>
  );
};
```

### 头像角标 - 绿点

```SnackPlayer
import { Avatar, Box, Badge } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  return (
    <Box>
      <Badge
        size="m"
        bottom={0}
        right={0}
        bg="green"
        containerStyle={{ marginTop: 10 }}>
        <Avatar />
      </Badge>
      <Badge
        size="m"
        bottom={0}
        right={0}
        bg="green"
        containerStyle={{ marginTop: 10 }}>
        <Avatar resourceType="text" />
      </Badge>
    </Box>
  );
};
```

### 头像角标 - 身份标签

```SnackPlayer
import { Avatar, Box, Badge } from '@music/dolphin-rn';
import React from 'react';

const imageUrl =
  'https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/11678720164/0570/2bb9/0ae5/585fd67c4317fa2b6987b24c361b1775.png?imageView&thumbnail=20x0';

export default () => {
  return (
    <Box>
      <Badge
        size="m"
        bottom={0}
        right={0}
        image={imageUrl}
        containerStyle={{ marginTop: 10 }}>
        <Avatar />
      </Badge>
      <Badge
        size="m"
        bottom={0}
        right={0}
        image={imageUrl}
        containerStyle={{ marginTop: 10 }}>
        <Avatar resourceType="text" />
      </Badge>
    </Box>
  );
};
```

### 头像角标 - 挂件

```SnackPlayer
import { Avatar, Box, Badge } from '@music/dolphin-rn';
import React from 'react';

const imgSource =
  'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/10838242022/1f19/d4dc/00eb/2cd37c91c81b63b7b9e4e36ba36f384c.png?imageView&thumbnail=60x0';

export default () => {
  return (
    <Box>
      <Badge
        size={60}
        left={0}
        top={0}
        bottom={0}
        right={0}
        image={imgSource}
        containerStyle={{ marginTop: 10 }}>
        <Avatar />
      </Badge>
      <Badge
        size={60}
        left={0}
        top={0}
        bottom={0}
        right={0}
        image={imgSource}
        containerStyle={{ marginTop: 40 }}>
        <Avatar resourceType="text" />
      </Badge>
    </Box>
  );
};
```

### 事件回调

```SnackPlayer
import { Avatar, Box } from '@music/dolphin-rn';
import React from 'react';

const imgSource =
  'http://p1.music.126.net/bR1HTKGyDQeCZBMofFIhOg==/109951165406505522.jpg?imageView&thumbnail=140x0&quality=80&tostatic=0&interlace=0&type=webp';

export default () => {
  return (
    <Box>
      <Avatar
        resourceType="image"
        resource={imgSource}
        onPress={() => console.log('test')}
      />
      <Avatar resourceType="text" mt={10} onPress={() => console.log('test')} />
      <Avatar mt={10} onLongPress={() => console.log('Long press test')} />
      <Avatar mt={10} onPress={() => console.log('press test')} />
    </Box>
  );
};
```

## API

### Avatar

| 参数         | 说明                             | 类型                                                            | 默认值 |
| ------------ | -------------------------------- | --------------------------------------------------------------- | ------ |
| size         | 大小                             | number &#124; "m" &#124; "xs" &#124; "s" &#124; "l" &#124; "xl" | m      |
| resource     | 资源值（结合 resourceType 使用） | string                                                          | -      |
| resourceType | 资源类型                         | "image" &#124; "text"                                           | image  |
| defaultImage | 默认图片头像链接                 | string                                                          | -      |
| textStyle    | 匿名头像文字样式                 | object                                                          | -      |
