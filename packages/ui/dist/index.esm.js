var n="be9603a87e6c2e4fffb3860f346d18780b164680c0ee562304ca99194c8e26c8",l=`._commonVariables_17p2n_1 {
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
`;(function(){if(typeof document!="undefined"&&!document.getElementById(n)){var e=document.createElement("style");e.id=n,e.textContent=l,document.head.appendChild(e)}})();var o={commonVariables:"_commonVariables_17p2n_1"};var i="02b363665d53ce81a3e0a842b01d8024447f6f275b14b96b6b48a5729fb63fd2",m=`._themaVariables_vd2lk_1 {
  --background-color: black;
  --font-color: white;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=m,document.head.appendChild(e)}})();var r={themaVariables:"_themaVariables_vd2lk_1"};var d="9c8d0a53d807bcc4504fad150fe0c6b2aadcf299758e17305a42fa05f5384854",s=`._themaVariables_eaws2_1 {
  --background-color: white;
  --font-color: black;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(d)){var e=document.createElement("style");e.id=d,e.textContent=s,document.head.appendChild(e)}})();var c={themaVariables:"_themaVariables_eaws2_1"};import f from"github-markdown-css/github-markdown-dark.css";import b from"github-markdown-css/github-markdown-light.css";var p=["dark","light"],y=e=>{e&&window&&window.localStorage&&window.localStorage.setItem("thema",e);let t=e;if(window&&window.localStorage){let a=window.localStorage.getItem("thema");p.includes(a)&&(t=a)}return t||(t="dark"),e==="light"?{commonVariables:o.commonVariables,themaVariables:c.themaVariables,gitHubMarkdown:b["markdown-body"]}:{commonVariables:o.commonVariables,themaVariables:r.themaVariables,gitHubMarkdown:f["markdown-body"]}};export{y as ThemaClassname};
