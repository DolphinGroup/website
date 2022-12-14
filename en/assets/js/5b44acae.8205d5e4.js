"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},p="Quick Start",i={unversionedId:"intro",id:"intro",title:"Quick Start",description:"Create",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/website/en/docs/intro",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1670922261,formattedLastUpdatedAt:"Dec 13, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u7ec4\u4ef6\u5e93",permalink:"/website/en/docs/category/\u7ec4\u4ef6\u5e93"}},l={},c=[{value:"Create",id:"create",level:2},{value:"install",id:"install",level:2},{value:"\u4f7f\u7528\u7ec4\u4ef6",id:"\u4f7f\u7528\u7ec4\u4ef6",level:2},{value:"\u95ee\u9898\u53cd\u9988",id:"\u95ee\u9898\u53cd\u9988",level:2}],s=(u="RawImg",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("h2",{id:"create"},"Create"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u7ec4\u4ef6\u4e4b\u524d\uff0c\u9700\u8981\u51c6\u5907\u597d\u7ec4\u4ef6\u7684\u8fd0\u884c\u73af\u5883\u3002\u5bf9\u4e8e\u65b0\u5e94\u7528\u800c\u8a00\uff0c\u53ef\u76f4\u63a5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://febase.netease.com/?tenantId=1"},"Febase")," \u4e0a\u521b\u5efa React Native \u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u6309\u7167\u4f7f\u7528\u573a\u666f\u7684\u4e0d\u540c\uff0c\u53ef\u9009 ",(0,a.kt)("a",{parentName:"p",href:"https://febase-doc.st.netease.com/docs/app-rn/rn-multi"},"\u62c6\u5305 RN \u5e94\u7528")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://febase-doc.st.netease.com/docs/app-rn/rn"},"\u5e38\u89c4 RN \u5e94\u7528")," \u3002"),(0,a.kt)(s,{style:{width:800},src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/17558616227/c48b/35f0/a8fe/3d4e17fb94e757c36007d0713c02cc4a.png",mdxType:"RawImg"}),(0,a.kt)("h2",{id:"install"},"install"),(0,a.kt)("p",null,"\u5e94\u7528\u51c6\u5907\u597d\u540e\uff0c\u4fbf\u53ef\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -S @music/dolphin-rn@^1.0.0\n")),(0,a.kt)("p",null,"\u7136\u540e\u5f00\u53d1\u8c03\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run start\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u7ec4\u4ef6"},"\u4f7f\u7528\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Button } from '@music/dolphin-rn';\n\nexport default () => <Button> hello </Button>;\n")),(0,a.kt)("h2",{id:"\u95ee\u9898\u53cd\u9988"},"\u95ee\u9898\u53cd\u9988"),(0,a.kt)("p",null,"\u5982\u679c\u5728\u5f00\u53d1\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u53ef\u4ee5\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://haitun.netease.com/app/5/doc/413/540"},"\u5e38\u89c1\u95ee\u9898")," \u4e2d\u5bfb\u627e\u7b54\u6848\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u65e0\u6cd5\u81ea\u52a9\u89e3\u51b3\u7684\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://playground.ft.netease.com/"},"Playground")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u53ef\u590d\u73b0\u7684\u6700\u5c0f Demo\uff0c\u7136\u540e\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://popo.netease.com/static/html/open_popo.html?ssid=2482126&sstp=1"},"POPO \u7fa4")," \u53cd\u9988\u7ed9\u6211\u4eec\uff0c\u6211\u4eec\u5c06\u5728\u7b2c\u4e00\u65f6\u95f4\u534f\u52a9\u89e3\u51b3\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u6d77\u8c5a\u7ec4\u4ef6\u7b54\u7591\u7fa4\uff1a"),(0,a.kt)(s,{style:{width:300},src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/17557920054/91ce/f547/6224/d07de5f7263a608bd1d314046872ba91.png",mdxType:"RawImg"}))}m.isMDXComponent=!0}}]);