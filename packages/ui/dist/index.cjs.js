var u=Object.create;var n=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var k=(e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})},d=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of x(t))!_.call(e,o)&&o!==a&&n(e,o,{get:()=>t[o],enumerable:!(r=g(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?u(w(e)):{},d(t||!e||!e.__esModule?n(a,"default",{value:e,enumerable:!0}):a,e)),V=e=>d(n({},"__esModule",{value:!0}),e);var z={};k(z,{ThemaClassname:()=>E});module.exports=V(z);var l="be9603a87e6c2e4fffb3860f346d18780b164680c0ee562304ca99194c8e26c8",S=`._commonVariables_1qn0a_1 {
  --interval-0: 0;
  --interval-4: 4px;
  --interval-8: 8px;
  --interval-12: 12px;
  --interval-16: 16px;
  --interval-24: 24px;
  --interval-32: 32px;

  --border-size: 2px;

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
`;(function(){if(typeof document!="undefined"&&!document.getElementById(l)){var e=document.createElement("style");e.id=l,e.textContent=S,document.head.appendChild(e)}})();var i={commonVariables:"_commonVariables_1qn0a_1"};var m="02b363665d53ce81a3e0a842b01d8024447f6f275b14b96b6b48a5729fb63fd2",y=`._themaVariables_vd2lk_1 {
  --background-color: black;
  --font-color: white;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(m)){var e=document.createElement("style");e.id=m,e.textContent=y,document.head.appendChild(e)}})();var s={themaVariables:"_themaVariables_vd2lk_1"};var f="9c8d0a53d807bcc4504fad150fe0c6b2aadcf299758e17305a42fa05f5384854",v=`._themaVariables_eaws2_1 {
  --background-color: white;
  --font-color: black;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=v,document.head.appendChild(e)}})();var b={themaVariables:"_themaVariables_eaws2_1"};var h=c(require("github-markdown-css/github-markdown-dark.css")),p=c(require("github-markdown-css/github-markdown-light.css")),C=["dark","light"],E=e=>{e&&window&&window.localStorage&&window.localStorage.setItem("thema",e);let t=e;if(window&&window.localStorage){let a=window.localStorage.getItem("thema");C.includes(a)&&(t=a)}return t||(t="dark"),e==="light"?{commonVariables:i,themaVariables:b.themaVariables,gitHubMarkdown:p.default["markdown-body"]}:{commonVariables:i,themaVariables:s.themaVariables,gitHubMarkdown:h.default["markdown-body"]}};
