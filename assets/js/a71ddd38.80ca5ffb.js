"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[344],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>g});var a=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var u=a.createContext({}),p=function(n){var e=a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=p(n.components);return a.createElement(u.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,u=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),d=p(t),c=l,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||r;return t?a.createElement(g,i(i({ref:e},s),{},{components:t})):a.createElement(g,i({ref:e},s))}));function g(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o[d]="string"==typeof n?n:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1381:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={name:"Cascader",subName:"\u7ea7\u8054\u9009\u62e9\u5668",group:"\u8868\u5355"},i="Cascader \u7ea7\u8054\u9009\u62e9\u5668",o={unversionedId:"components/form/Cascater",id:"components/form/Cascater",title:"Cascader \u7ea7\u8054\u9009\u62e9\u5668",description:"Usage",source:"@site/docs/components/form/Cascater.md",sourceDirName:"components/form",slug:"/components/form/Cascater",permalink:"/website/docs/components/form/Cascater",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/docs/components/form/Cascater.md",tags:[],version:"current",lastUpdatedAt:1670901654,formattedLastUpdatedAt:"2022\u5e7412\u670813\u65e5",frontMatter:{name:"Cascader",subName:"\u7ea7\u8054\u9009\u62e9\u5668",group:"\u8868\u5355"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u5355",permalink:"/website/docs/category/\u8868\u5355"},next:{title:"\u5bfc\u822a",permalink:"/website/docs/category/\u5bfc\u822a"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"\u57fa\u7840 (CascaderView)",id:"\u57fa\u7840-cascaderview",level:3},{value:"\u5f02\u6b65\u52a0\u8f7d (CascaderView)",id:"\u5f02\u6b65\u52a0\u8f7d-cascaderview",level:3},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u53d7\u63a7",id:"\u53d7\u63a7",level:3},{value:"API",id:"api",level:2},{value:"Cascader",id:"cascader",level:3},{value:"Cascader.View",id:"cascaderview",level:3}],s={toc:p};function d(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cascader-\u7ea7\u8054\u9009\u62e9\u5668"},"Cascader \u7ea7\u8054\u9009\u62e9\u5668"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"\u57fa\u7840-cascaderview"},"\u57fa\u7840 (CascaderView)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live ViewBasic",live:!0,ViewBasic:!0},"import { Cascader } from '@music/dolphin-rn';\nimport React from 'react';\n\nexport default () => {\n  const options = [\n    {\n      label: '\u6d59\u6c5f',\n      value: 'zhejiang',\n      children: [\n        {\n          label: '\u676d\u5dde',\n          value: 'hangzhou',\n        },\n        {\n          label: '\u5b81\u6ce2',\n          value: 'ningbo',\n        },\n      ],\n    },\n    {\n      label: '\u56db\u5ddd',\n      value: 'sichuan',\n      children: [\n        {\n          label: '\u6210\u90fd',\n          value: 'chengdu',\n        },\n        {\n          label: '\u7ef5\u9633',\n          value: 'mianyang',\n        },\n        {\n          label: '\u81ea\u8d21',\n          value: 'zigong',\n        },\n      ],\n    },\n  ];\n  return (\n    <Cascader.View\n      options={options}\n      defaultValue={['zhejiang', 'ningbo']}\n      onChange={(values) => {\n        console.info('onChange', values);\n      }}\n    />\n  );\n};\n")),(0,l.kt)("h3",{id:"\u5f02\u6b65\u52a0\u8f7d-cascaderview"},"\u5f02\u6b65\u52a0\u8f7d (CascaderView)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live ViewAsync",live:!0,ViewAsync:!0},"import { Cascader, CascaderOption } from '@music/dolphin-rn';\nimport React from 'react';\n\nexport default () => {\n  const [options, setOptions] = React.useState<CascaderOption[]>([\n    {\n      label: '\u6cb3\u5357',\n      value: 'henan',\n      children: [\n        {\n          label: '\u90d1\u5dde',\n          value: 'zhengzhou',\n        },\n        {\n          label: '\u5f00\u5c01',\n          value: 'kaifeng',\n        },\n      ],\n    },\n    {\n      label: '\u6c5f\u897f',\n      value: 'jiangxi',\n      children: [],\n    },\n    {\n      label: '\u6c5f\u82cf',\n      value: 'jiangsu',\n      children: [],\n    },\n  ]);\n\n  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n  const mockApi = async (prov) => {\n    await sleep(500);\n    if (prov === 'jiangsu') {\n      return [\n        {\n          label: '\u5357\u4eac',\n          value: 'nanjing',\n        },\n        {\n          label: '\u82cf\u5dde',\n          value: 'suzhou',\n        },\n      ];\n    }\n    if (prov === 'jiangxi') {\n      return [\n        {\n          label: '\u5357\u660c',\n          value: 'nanchang',\n        },\n        {\n          label: '\u4e5d\u6c5f',\n          value: 'jiujiang',\n        },\n      ];\n    }\n    return undefined;\n  };\n\n  return (\n    <Cascader.View\n      options={options}\n      onChange={(values) => {\n        console.info('onChange', values);\n        const prov = values?.[0];\n        const city = values?.[1];\n        if (!city) {\n          mockApi(prov).then((cities) => {\n            setOptions(\n              options.map((op) => {\n                if (op.value === prov) {\n                  return {\n                    ...op,\n                    children: cities,\n                  };\n                }\n                return op;\n              }),\n            );\n          });\n        }\n      }}\n    />\n  );\n};\n")),(0,l.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live Basic",live:!0,Basic:!0},"import { Cascader, Button } from '@music/dolphin-rn';\nimport React from 'react';\n\nexport default () => {\n  const [visible, setVisible] = React.useState(false);\n  const options = [\n    {\n      label: '\u6d59\u6c5f',\n      value: 'zhejiang',\n      children: [\n        {\n          label: '\u676d\u5dde',\n          value: 'hangzhou',\n        },\n        {\n          label: '\u5b81\u6ce2',\n          value: 'ningbo',\n        },\n      ],\n    },\n    {\n      label: '\u56db\u5ddd',\n      value: 'sichuan',\n      children: [\n        {\n          label: '\u6210\u90fd',\n          value: 'chengdu',\n        },\n        {\n          label: '\u7ef5\u9633',\n          value: 'mianyang',\n        },\n        {\n          label: '\u81ea\u8d21',\n          value: 'zigong',\n        },\n      ],\n    },\n  ];\n  return (\n    <>\n      <Button onPress={() => setVisible(true)}>open</Button>\n      <Cascader\n        visible={visible}\n        options={options}\n        // defaultValue={['zhejiang', 'ningbo']}\n        onVisibleChange={(visible) => {\n          setVisible(visible);\n        }}\n        onOk={(values) => {\n          console.info('onOk', values);\n        }}\n        onChange={(values) => {\n          console.info('onChange', values);\n        }}\n      />\n    </>\n  );\n};\n")),(0,l.kt)("h3",{id:"\u53d7\u63a7"},"\u53d7\u63a7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live Controlled",live:!0,Controlled:!0},"import { Cascader, Button } from '@music/dolphin-rn';\nimport React from 'react';\n\nexport default () => {\n  const [visible, setVisible] = React.useState(false);\n  const [value, setValue] = React.useState(['zhejiang', 'ningbo']);\n  const options = [\n    {\n      label: '\u6d59\u6c5f',\n      value: 'zhejiang',\n      children: [\n        {\n          label: '\u676d\u5dde',\n          value: 'hangzhou',\n        },\n        {\n          label: '\u5b81\u6ce2',\n          value: 'ningbo',\n        },\n      ],\n    },\n    {\n      label: '\u56db\u5ddd',\n      value: 'sichuan',\n      children: [\n        {\n          label: '\u6210\u90fd',\n          value: 'chengdu',\n        },\n        {\n          label: '\u7ef5\u9633',\n          value: 'mianyang',\n        },\n        {\n          label: '\u81ea\u8d21',\n          value: 'zigong',\n        },\n      ],\n    },\n  ];\n  return (\n    <>\n      <Button onPress={() => setVisible(true)}>open</Button>\n      <Cascader\n        visible={visible}\n        options={options}\n        value={value}\n        onVisibleChange={(visible) => {\n          setVisible(visible);\n        }}\n        onOk={(values) => {\n          console.info('onOk', values);\n          setValue(values);\n        }}\n        onChange={(values) => {\n          console.info('onChange', values);\n        }}\n      />\n    </>\n  );\n};\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"cascader"},"Cascader"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f39\u7a97\u662f\u5426\u53ef\u89c1\uff08\u53d7\u63a7\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9009\u4e2d\u503c\uff08\u53d7\u63a7\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"okText"),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u6309\u94ae\u6587\u6848"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancelText"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u6309\u94ae\u6587\u6848"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onOk"),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(values: string[]) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onCancel"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f39\u7a97\u663e\u793a\u6216\u9690\u85cf\u65f6\u89e6\u53d1\u7684\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(visible: boolean) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u9879\u6570\u636e\uff08\u8bf7\u6ce8\u610f children \u4e3a undefined \u65f6\u8868\u793a\u4e3a\u53f6\u8282\u70b9\uff0c\u4e3a [] \u65f6\u4f1a\u663e\u793a loading \u72b6\u6001\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"CascaderOption[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"itemHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u9009\u9879\u7684\u9ad8\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visibleCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u89c6\u6570\u91cf(\u5947\u6570)"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debounce"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u503c\u53d8\u5316\u56de\u8c03\u5ef6\u8fdf\uff08ms\uff09\uff0c\u76f4\u63a5\u4f7f\u7528 View \u65f6\u53ef\u80fd\u9700\u8981\u9632\u6b62\u5217\u6570\u636e\u53d8\u52a8\u8fc7\u7a0b\u4e2d\u8fde\u7eed\u89e6\u53d1 onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u503c\u53d8\u5316\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(values: string[]) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wrapStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u6837\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"cascaderview"},"Cascader.View"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u9879\u6570\u636e\uff08\u8bf7\u6ce8\u610f children \u4e3a undefined \u65f6\u8868\u793a\u4e3a\u53f6\u8282\u70b9\uff0c\u4e3a [] \u65f6\u4f1a\u663e\u793a loading \u72b6\u6001\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"CascaderOption[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"itemHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u9009\u9879\u7684\u9ad8\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visibleCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u89c6\u6570\u91cf(\u5947\u6570)"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debounce"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u503c\u53d8\u5316\u56de\u8c03\u5ef6\u8fdf\uff08ms\uff09\uff0c\u76f4\u63a5\u4f7f\u7528 View \u65f6\u53ef\u80fd\u9700\u8981\u9632\u6b62\u5217\u6570\u636e\u53d8\u52a8\u8fc7\u7a0b\u4e2d\u8fde\u7eed\u89e6\u53d1 onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u503c\u53d8\u5316\u56de\u8c03"),(0,l.kt)("td",{parentName:"tr",align:null},"(values: string[]) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wrapStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u6837\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}d.isMDXComponent=!0}}]);