var n="1cb4d321f1689a576f673fdae8d73da118c66622bd7a0c5b124c1101cc4612ed",l=`._commonVariables_1qn0a_1 {
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
`;(function(){if(typeof document!="undefined"&&!document.getElementById(n)){var e=document.createElement("style");e.id=n,e.textContent=l,document.head.appendChild(e)}})();var a={commonVariables:"_commonVariables_1qn0a_1"};var i="8a6478e32ed7292c4f20cd02ac186a32f919113778fca834343d521b5f4a926c",m=`._themaVariables_vd2lk_1 {
  --background-color: black;
  --font-color: white;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=m,document.head.appendChild(e)}})();var r={themaVariables:"_themaVariables_vd2lk_1"};var d="4d9eed929de026f56810196b7a3a0174e22b21c19050b24d1326525c3cb77ba4",s=`._themaVariables_eaws2_1 {
  --background-color: white;
  --font-color: black;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(d)){var e=document.createElement("style");e.id=d,e.textContent=s,document.head.appendChild(e)}})();var c={themaVariables:"_themaVariables_eaws2_1"};import f from"github-markdown-css/github-markdown-dark.css";import b from"github-markdown-css/github-markdown-light.css";var h=["dark","light"],S=e=>{e&&window&&window.localStorage&&window.localStorage.setItem("thema",e);let t=e;if(window&&window.localStorage){let o=window.localStorage.getItem("thema");h.includes(o)&&(t=o)}return t||(t="dark"),e==="light"?{commonVariables:a,themaVariables:c.themaVariables,gitHubMarkdown:b["markdown-body"]}:{commonVariables:a,themaVariables:r.themaVariables,gitHubMarkdown:f["markdown-body"]}};export{S as ThemaClassname};
