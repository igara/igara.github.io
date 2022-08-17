var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var b=(e,t)=>{for(var o in t)r(e,o,{get:t[o],enumerable:!0})},h=(e,t,o,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of f(t))!s.call(e,a)&&a!==o&&r(e,a,{get:()=>t[a],enumerable:!(d=l(t,a))||d.enumerable});return e};var u=e=>h(r({},"__esModule",{value:!0}),e);var x={};b(x,{ThemaClassname:()=>g});module.exports=u(x);var n="33f0a9012ac491ac8606adc603c5aa1052e6cbb47a901aed989c3e7a27fd3f94",p=`._themaVariables_1pofo_1 {
  --background-color: black;
  --border-color: white;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(n)){var e=document.createElement("style");e.id=n,e.textContent=p,document.head.appendChild(e)}})();var c={themaVariables:"_themaVariables_1pofo_1"};var m="f01d6352536cb0115bb2f15f7ecd57923ac5d499decc0070b22c3de26fd7be24",_=`._themaVariables_1alnm_1 {
  --background-color: white;
  --border-color: black;
}
`;(function(){if(typeof document!="undefined"&&!document.getElementById(m)){var e=document.createElement("style");e.id=m,e.textContent=_,document.head.appendChild(e)}})();var i={themaVariables:"_themaVariables_1alnm_1"};var g=e=>e==="light"?i.themaVariables:c.themaVariables;
