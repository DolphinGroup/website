---
name: Cascader

subName: 级联选择器

group: 表单
---

# Cascader 级联选择器

## Usage

### 基础 (CascaderView)

```tsx live ViewBasic
import { Cascader } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const options = [
    {
      label: '浙江',
      value: 'zhejiang',
      children: [
        {
          label: '杭州',
          value: 'hangzhou',
        },
        {
          label: '宁波',
          value: 'ningbo',
        },
      ],
    },
    {
      label: '四川',
      value: 'sichuan',
      children: [
        {
          label: '成都',
          value: 'chengdu',
        },
        {
          label: '绵阳',
          value: 'mianyang',
        },
        {
          label: '自贡',
          value: 'zigong',
        },
      ],
    },
  ];
  return (
    <Cascader.View
      options={options}
      defaultValue={['zhejiang', 'ningbo']}
      onChange={(values) => {
        console.info('onChange', values);
      }}
    />
  );
};
```

### 异步加载 (CascaderView)

```tsx live ViewAsync
import { Cascader, CascaderOption } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [options, setOptions] = React.useState<CascaderOption[]>([
    {
      label: '河南',
      value: 'henan',
      children: [
        {
          label: '郑州',
          value: 'zhengzhou',
        },
        {
          label: '开封',
          value: 'kaifeng',
        },
      ],
    },
    {
      label: '江西',
      value: 'jiangxi',
      children: [],
    },
    {
      label: '江苏',
      value: 'jiangsu',
      children: [],
    },
  ]);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const mockApi = async (prov) => {
    await sleep(500);
    if (prov === 'jiangsu') {
      return [
        {
          label: '南京',
          value: 'nanjing',
        },
        {
          label: '苏州',
          value: 'suzhou',
        },
      ];
    }
    if (prov === 'jiangxi') {
      return [
        {
          label: '南昌',
          value: 'nanchang',
        },
        {
          label: '九江',
          value: 'jiujiang',
        },
      ];
    }
    return undefined;
  };

  return (
    <Cascader.View
      options={options}
      onChange={(values) => {
        console.info('onChange', values);
        const prov = values?.[0];
        const city = values?.[1];
        if (!city) {
          mockApi(prov).then((cities) => {
            setOptions(
              options.map((op) => {
                if (op.value === prov) {
                  return {
                    ...op,
                    children: cities,
                  };
                }
                return op;
              }),
            );
          });
        }
      }}
    />
  );
};
```

### 基础

```tsx live Basic
import { Cascader, Button } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const options = [
    {
      label: '浙江',
      value: 'zhejiang',
      children: [
        {
          label: '杭州',
          value: 'hangzhou',
        },
        {
          label: '宁波',
          value: 'ningbo',
        },
      ],
    },
    {
      label: '四川',
      value: 'sichuan',
      children: [
        {
          label: '成都',
          value: 'chengdu',
        },
        {
          label: '绵阳',
          value: 'mianyang',
        },
        {
          label: '自贡',
          value: 'zigong',
        },
      ],
    },
  ];
  return (
    <>
      <Button onPress={() => setVisible(true)}>open</Button>
      <Cascader
        visible={visible}
        options={options}
        // defaultValue={['zhejiang', 'ningbo']}
        onVisibleChange={(visible) => {
          setVisible(visible);
        }}
        onOk={(values) => {
          console.info('onOk', values);
        }}
        onChange={(values) => {
          console.info('onChange', values);
        }}
      />
    </>
  );
};
```

### 受控

```tsx live Controlled
import { Cascader, Button } from '@music/dolphin-rn';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState(['zhejiang', 'ningbo']);
  const options = [
    {
      label: '浙江',
      value: 'zhejiang',
      children: [
        {
          label: '杭州',
          value: 'hangzhou',
        },
        {
          label: '宁波',
          value: 'ningbo',
        },
      ],
    },
    {
      label: '四川',
      value: 'sichuan',
      children: [
        {
          label: '成都',
          value: 'chengdu',
        },
        {
          label: '绵阳',
          value: 'mianyang',
        },
        {
          label: '自贡',
          value: 'zigong',
        },
      ],
    },
  ];
  return (
    <>
      <Button onPress={() => setVisible(true)}>open</Button>
      <Cascader
        visible={visible}
        options={options}
        value={value}
        onVisibleChange={(visible) => {
          setVisible(visible);
        }}
        onOk={(values) => {
          console.info('onOk', values);
          setValue(values);
        }}
        onChange={(values) => {
          console.info('onChange', values);
        }}
      />
    </>
  );
};
```

## API

### Cascader

| 参数            | 说明                                                                                    | 类型                        | 默认值 |
| --------------- | --------------------------------------------------------------------------------------- | --------------------------- | ------ |
| visible         | 弹窗是否可见（受控）                                                                    | boolean                     | -      |
| value           | 当前选中值（受控）                                                                      | string[]                    | -      |
| title           | 标题                                                                                    | ReactNode                   | -      |
| okText          | 确认按钮文案                                                                            | ReactNode                   | -      |
| cancelText      | 取消按钮文案                                                                            | ReactNode                   | -      |
| onOk            | 确认回调                                                                                | (values: string[]) =\> void | -      |
| onCancel        | 取消回调                                                                                | () =\> void                 | -      |
| onVisibleChange | 弹窗显示或隐藏时触发的回调                                                              | (visible: boolean) =\> void | -      |
| options         | 选项数据（请注意 children 为 undefined 时表示为叶节点，为 [] 时会显示 loading 状态）    | CascaderOption[]            | -      |
| defaultValue    | 默认值                                                                                  | string[]                    | -      |
| itemHeight      | 每个选项的高度                                                                          | number                      | -      |
| visibleCount    | 可视数量(奇数)                                                                          | number                      | -      |
| debounce        | 选中值变化回调延迟（ms），直接使用 View 时可能需要防止列数据变动过程中连续触发 onChange | number                      | -      |
| onChange        | 选中值变化回调                                                                          | (values: string[]) =\> void | -      |
| wrapStyle       | 容器样式                                                                                | object                      | -      |

### Cascader.View

| 参数         | 说明                                                                                    | 类型                        | 默认值 |
| ------------ | --------------------------------------------------------------------------------------- | --------------------------- | ------ |
| options      | 选项数据（请注意 children 为 undefined 时表示为叶节点，为 [] 时会显示 loading 状态）    | CascaderOption[]            | -      |
| defaultValue | 默认值                                                                                  | string[]                    | -      |
| itemHeight   | 每个选项的高度                                                                          | number                      | -      |
| visibleCount | 可视数量(奇数)                                                                          | number                      | -      |
| debounce     | 选中值变化回调延迟（ms），直接使用 View 时可能需要防止列数据变动过程中连续触发 onChange | number                      | -      |
| onChange     | 选中值变化回调                                                                          | (values: string[]) =\> void | -      |
| wrapStyle    | 容器样式                                                                                | object                      | -      |
