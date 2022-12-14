"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8312],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),m=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=m(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(t),s=a,y=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return t?n.createElement(y,l(l({ref:r},p),{},{components:t})):n.createElement(y,l({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4181:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=t(7462),a=(t(7294),t(3905));const o={name:"Box",subName:"\u76d2\u5b50",group:"\u57fa\u7840"},l="Box \u76d2\u5b50",i={unversionedId:"components/basic/Box",id:"components/basic/Box",title:"Box \u76d2\u5b50",description:"\u6ce8\u610f\uff1a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/basic/Box.md",sourceDirName:"components/basic",slug:"/components/basic/Box",permalink:"/website/en/docs/components/basic/Box",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/docs/components/basic/Box.md",tags:[],version:"current",lastUpdatedAt:1670922261,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{name:"Box",subName:"\u76d2\u5b50",group:"\u57fa\u7840"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/website/en/docs/category/\u57fa\u7840"},next:{title:"\u8868\u5355",permalink:"/website/en/docs/category/\u8868\u5355"}},c={},m=[{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:2},{value:"Usage",id:"usage",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u6e10\u53d8\u80cc\u666f",id:"\u6e10\u53d8\u80cc\u666f",level:3},{value:"API",id:"api",level:2},{value:"Box",id:"box",level:3}],p={toc:m};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"box-\u76d2\u5b50"},"Box \u76d2\u5b50"),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,a.kt)("p",null,"animation \u4e3a true \u65f6\uff0c\u83b7\u53d6 Box \u8282\u70b9 ref \u4fe1\u606f\u5206\u522b\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ref.current.target\uff1a\u83b7\u53d6 Box \u5185\u90e8\u7684\u5bb9\u5668\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"ref.current.target.","_","component\uff1a\u83b7\u53d6 Box \u8282\u70b9")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live Basic",live:!0,Basic:!0},"import { Box } from '@music/dolphin-rn';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <Box _text={{ color: '#fff' }} bg=\"colorPrimary1\" p={10}>\n      I am a Box\n    </Box>\n  );\n};\n")),(0,a.kt)("h3",{id:"\u6e10\u53d8\u80cc\u666f"},"\u6e10\u53d8\u80cc\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live Gradient",live:!0,Gradient:!0},"import { Box } from '@music/dolphin-rn';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <Box\n      _text={{ color: '#fff' }}\n      p={10}\n      linearGradientProps={{\n        useAngle: true,\n        angle: 225,\n        angleCenter: { x: 0.5, y: 0.5 },\n        colors: ['#B477FF', '#F65EBA', '#FF4D4D'],\n        locations: [0, 0.5, 1],\n      }}>\n      I am a linearGradient Box\n    </Box>\n  );\n};\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"box"},"Box"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b50\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"any"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bg"),(0,a.kt)("td",{parentName:"tr",align:null},"\u80cc\u666f\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},'ResponsiveValue\\<"colorPrimary1" ',"|",' "colorPrimary2" ',"|",' "colorPrimary3" ',"|",' "colorPrimary4" ',"|",' "colorPrimary5" ',"|",' "colorPrimary6" ',"|",' "colorPrimary7" ',"|",' "colorSecondary11" ',"|",' "colorSecondary12" ',"|"," ... 63 more ... ","|"," LinearGradientProps",">"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"background"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\uff0c\u80cc\u666f\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},'ResponsiveValue\\<"colorPrimary1" ',"|",' "colorPrimary2" ',"|",' "colorPrimary3" ',"|",' "colorPrimary4" ',"|",' "colorPrimary5" ',"|",' "colorPrimary6" ',"|",' "colorPrimary7" ',"|",' "colorSecondary11" ',"|",' "colorSecondary12" ',"|"," ... 63 more ... ","|"," LinearGradientProps",">"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bgColor"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\uff0c\u80cc\u666f\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},'ResponsiveValue\\<"colorPrimary1" ',"|",' "colorPrimary2" ',"|",' "colorPrimary3" ',"|",' "colorPrimary4" ',"|",' "colorPrimary5" ',"|",' "colorPrimary6" ',"|",' "colorPrimary7" ',"|",' "colorSecondary11" ',"|",' "colorSecondary12" ',"|"," ... 63 more ... ","|"," LinearGradientProps",">"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\uff0c\u80cc\u666f\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},'ResponsiveValue\\<"colorPrimary1" ',"|",' "colorPrimary2" ',"|",' "colorPrimary3" ',"|",' "colorPrimary4" ',"|",' "colorPrimary5" ',"|",' "colorPrimary6" ',"|",' "colorPrimary7" ',"|",' "colorSecondary11" ',"|",' "colorSecondary12" ',"|"," ... 63 more ... ","|"," LinearGradientProps",">"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linearGradientProps"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ebf\u6027\u6e10\u53d8\u80cc\u666f"),(0,a.kt)("td",{parentName:"tr",align:null},"LinearGradientProps"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"animation"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u652f\u6301\u52a8\u753b"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false")))))}u.isMDXComponent=!0}}]);