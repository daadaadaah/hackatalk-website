(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return a}));var n=t(98),i=t(102);function o(){const{siteConfig:{baseUrl:e="/",url:r}={}}=Object(n.a)();return{withBaseUrl:(t,n)=>function(e,r,t,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(n)return r+t;const a=!t.startsWith(r)?r+t.replace(/^\//,""):t;return o?e+a:a}(r,e,t,n)}}function a(e,r={}){const{withBaseUrl:t}=o();return t(e,r)}},102:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return i}))},76:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return f}));var n=t(2),i=t(6),o=(t(0),t(97)),a=t(100),c={id:"server-overview",title:"Overview",sidebar_label:"Overview"},u={unversionedId:"server-overview",id:"server-overview",isDocsHomePage:!1,title:"Overview",description:"Diagrams",source:"@site/docs/server-overview.md",permalink:"/docs/server-overview",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Integrate with backend",permalink:"/docs/client-doc3"},next:{title:"Specification",permalink:"/docs/server-doc1"}},s=[{value:"Diagrams",id:"diagrams",children:[{value:"Starting Server",id:"starting-server",children:[]}]}],l={rightToc:s};function f(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"diagrams"},"Diagrams"),Object(o.b)("p",null,"These diagrams are for those who want to understand how this project operates at a glance."),Object(o.b)("h3",{id:"starting-server"},"Starting Server"),Object(o.b)("img",{src:Object(a.a)("diagrams/server_overview.drawio.svg"),alt:"hackatalk starting server diagram"}))}f.isMDXComponent=!0},97:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return v}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=l(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=n,v=f["".concat(a,".").concat(d)]||f[d]||p[d]||o;return t?i.a.createElement(v,c(c({ref:r},s),{},{components:t})):i.a.createElement(v,c({ref:r},s))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98:function(e,r,t){"use strict";var n=t(0),i=t(20);r.a=function(){const e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);