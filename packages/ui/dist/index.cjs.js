var g=Object.create;var n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var v=(e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})},c=(e,t,o,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of w(t))!k.call(e,a)&&a!==o&&n(e,a,{get:()=>t[a],enumerable:!(l=x(t,a))||l.enumerable});return e};var i=(e,t,o)=>(o=e!=null?g(_(e)):{},c(t||!e||!e.__esModule?n(o,"default",{value:e,enumerable:!0}):o,e)),y=e=>c(n({},"__esModule",{value:!0}),e);var I={};v(I,{ThemaClassname:()=>z});module.exports=y(I);var d=i(require("classnames"));var m="be9603a87e6c2e4fffb3860f346d18780b164680c0ee562304ca99194c8e26c8",S=`._commonVariables_17p2n_1 {
  --interval-0: 0;
  --interval-4: 4px;
  --interval-8: 8px;
  --interval-12: 12px;
  --interval-16: 16px;
  --interval-24: 24px;
  --interval-32: 32px;

  --border-size: 2px;

  --border-style-solid: solid;

  --font-size-12: 12px;
  --font-size-16: 16px;
  --font-size-24: 24px;
  --font-size-32: 32px;

  --line-height-0: 0;
  --line-height-16: 16px;
  --line-height-24: 24px;
  --line-height-32: 32px;
  --line-height-48: 48px;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(m)){var e=document.createElement("style");e.id=m,e.textContent=S,document.head.appendChild(e)}})();var r={commonVariables:"_commonVariables_17p2n_1"};var s="02b363665d53ce81a3e0a842b01d8024447f6f275b14b96b6b48a5729fb63fd2",V=`._themaVariables_vd2lk_1 {
  --background-color: black;
  --font-color: white;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=V,document.head.appendChild(e)}})();var f={themaVariables:"_themaVariables_vd2lk_1"};var b="4d9eed929de026f56810196b7a3a0174e22b21c19050b24d1326525c3cb77ba4",C=`._themaVariables_eaws2_1 {
  --background-color: white;
  --font-color: black;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(b)){var e=document.createElement("style");e.id=b,e.textContent=C,document.head.appendChild(e)}})();var p={themaVariables:"_themaVariables_eaws2_1"};var h=i(require("github-markdown-css/github-markdown-dark.css")),u=i(require("github-markdown-css/github-markdown-light.css")),E=["dark","light"],z=e=>{e&&window&&window.localStorage&&window.localStorage.setItem("thema",e);let t=e;if(window&&window.localStorage){let o=window.localStorage.getItem("thema");E.includes(o)&&(t=o)}return t||(t="dark"),e==="light"?{variables:(0,d.default)(r.commonVariables,p.themaVariables),gitHubMarkdown:u.default["markdown-body"]}:{variables:(0,d.default)(r.commonVariables,f.themaVariables),gitHubMarkdown:h.default["markdown-body"]}};
