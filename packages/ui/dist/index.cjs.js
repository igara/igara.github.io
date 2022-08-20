var u=Object.create;var n=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var k=(e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})},d=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of x(t))!_.call(e,a)&&a!==o&&n(e,a,{get:()=>t[a],enumerable:!(r=g(t,a))||r.enumerable});return e};var c=(e,t,o)=>(o=e!=null?u(w(e)):{},d(t||!e||!e.__esModule?n(o,"default",{value:e,enumerable:!0}):o,e)),V=e=>d(n({},"__esModule",{value:!0}),e);var z={};k(z,{ThemaClassname:()=>E});module.exports=V(z);var l="1cb4d321f1689a576f673fdae8d73da118c66622bd7a0c5b124c1101cc4612ed",y=`._commonVariables_17p2n_1 {
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
`;(function(){if(typeof document!="undefined"&&!document.getElementById(l)){var e=document.createElement("style");e.id=l,e.textContent=y,document.head.appendChild(e)}})();var i={commonVariables:"_commonVariables_17p2n_1"};var m="8a6478e32ed7292c4f20cd02ac186a32f919113778fca834343d521b5f4a926c",S=`._themaVariables_vd2lk_1 {
  --background-color: black;
  --font-color: white;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(m)){var e=document.createElement("style");e.id=m,e.textContent=S,document.head.appendChild(e)}})();var s={themaVariables:"_themaVariables_vd2lk_1"};var f="4d9eed929de026f56810196b7a3a0174e22b21c19050b24d1326525c3cb77ba4",v=`._themaVariables_eaws2_1 {
  --background-color: white;
  --font-color: black;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=v,document.head.appendChild(e)}})();var b={themaVariables:"_themaVariables_eaws2_1"};var p=c(require("github-markdown-css/github-markdown-dark.css")),h=c(require("github-markdown-css/github-markdown-light.css")),C=["dark","light"],E=e=>{e&&window&&window.localStorage&&window.localStorage.setItem("thema",e);let t=e;if(window&&window.localStorage){let o=window.localStorage.getItem("thema");C.includes(o)&&(t=o)}return t||(t="dark"),e==="light"?{commonVariables:i.commonVariables,themaVariables:b.themaVariables,gitHubMarkdown:h.default["markdown-body"]}:{commonVariables:i.commonVariables,themaVariables:s.themaVariables,gitHubMarkdown:p.default["markdown-body"]}};
