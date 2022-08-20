var r=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var s=(e,t)=>{for(var o in t)r(e,o,{get:t[o],enumerable:!0})},h=(e,t,o,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of b(t))!l.call(e,a)&&a!==o&&r(e,a,{get:()=>t[a],enumerable:!(d=f(t,a))||d.enumerable});return e};var u=e=>h(r({},"__esModule",{value:!0}),e);var g={};s(g,{ThemaClassname:()=>V});module.exports=u(g);var n="c426f7c823a59f303fdf162b2b2fb8ea34d23d2eeeb8dbd4eafc11829b3f1536",p=`._themaVariables_1pofo_1 {
  --background-color: black;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(n)){var e=document.createElement("style");e.id=n,e.textContent=p,document.head.appendChild(e)}})();var c={themaVariables:"_themaVariables_1pofo_1"};var m="d124c8ef29672cbb89f8db8e7776673f7bfbecc364e736eba4bdee887fc349f5",_=`._themaVariables_1alnm_1 {
  --background-color: white;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(m)){var e=document.createElement("style");e.id=m,e.textContent=_,document.head.appendChild(e)}})();var i={themaVariables:"_themaVariables_1alnm_1"};var V=e=>e==="light"?{themaVariables:i.themaVariables}:{themaVariables:c.themaVariables};
