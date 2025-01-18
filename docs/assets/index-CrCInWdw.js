(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const k=4;var o=(t=>(t[t.Bracket=0]="Bracket",t[t.UnaryOperator=1]="UnaryOperator",t[t.BinaryOperator=2]="BinaryOperator",t[t.Numeral=3]="Numeral",t))(o||{}),h=(t=>(t[t.Left=0]="Left",t[t.Right=1]="Right",t))(h||{}),p=(t=>(t[t.Pos=0]="Pos",t[t.Neg=1]="Neg",t))(p||{}),l=(t=>(t[t.Add=0]="Add",t[t.Sub=1]="Sub",t[t.Mul=2]="Mul",t[t.Div=3]="Div",t[t.Pow=4]="Pow",t))(l||{}),c=(t=>(t[t.Unset=0]="Unset",t[t.Numeral=1]="Numeral",t[t.Unary=2]="Unary",t[t.Binary=3]="Binary",t))(c||{});function w(t){const r=t.length,e=[];for(;t.length;){const i=r-t.length,n=U(t,e,i);if(!n)throw new SyntaxError(`Unknown symbol at index ${i}.`);t=t.slice(n.length)}return e}const N={[o.Bracket]:/[\(\)]/,[o.UnaryOperator]:/[\+\-]/,[o.BinaryOperator]:/[\+\-\*\/\^]/,[o.Numeral]:/\d+(?:\.\d+)?(?:[eE](?:[\+\-])?\d+)?/};function U(t,r,e){let i;for(let n=0;n<k;n++){const a=new RegExp(`^\\s*${N[n].source}\\s*`);if(i=t.match(a)?.[0],!i)continue;const u=i.trim();switch(n){case o.Bracket:{const s=u==="("?h.Left:h.Right;r.at(-1)?.type===o.Numeral&&s===h.Left&&r.push({type:o.BinaryOperator,value:l.Mul,index:e}),r.push({type:o.Bracket,value:s,index:e});break}case o.UnaryOperator:{const s=r.at(-1);if(s?.type===void 0||s?.type===o.Bracket&&s.value===h.Left||s?.type===o.UnaryOperator||s?.type===o.BinaryOperator){r.push({type:o.UnaryOperator,value:u==="-"?p.Neg:p.Pos,index:e});break}}case o.BinaryOperator:{r.push({type:o.BinaryOperator,value:{"+":l.Add,"-":l.Sub,"*":l.Mul,"/":l.Div,"^":l.Pow}[u],index:e});break}case o.Numeral:{r.push({type:o.Numeral,value:Number(u),index:e});break}}break}return i}function v(t){if(t.length===1){const n=t[0];if(n.type!==o.Numeral)throw new SyntaxError("Invalid single token.");return f(c.Numeral,{numeral:n})}const r={kind:c.Unset,content:{}};let e=r,i=0;for(;i<t.length;){const n=t[i];switch(n.type){case o.Bracket:{const a=B(t,i),u=v(t.slice(i+1,a));switch(i=a,e.kind){case c.Unset:{const s=i===t.length-1;e.kind=c.Binary,e.content=(s?u:f(c.Binary,{left:u})).content;break}case c.Unary:{e.content.argument=u;break}case c.Binary:{e.content.right=u;break}}break}case o.UnaryOperator:{const a=f(c.Unary,{operator:n});switch(e.kind){case c.Unset:{e.kind=c.Unary,e.content=a.content;break}case c.Unary:{e.content.argument=a,e=a;break}case c.Binary:{e.content.right=a,e=a;break}}break}case o.BinaryOperator:{const a=n;if(e.kind===c.Binary&&!e.content.operator){e.content.operator=a;break}const u=a.value===l.Add||a.value===l.Sub,s=e.kind===c.Unary,d=f(c.Binary,{left:structuredClone(u||s?e:e.content.right),operator:a});if(u||s){e.kind=c.Binary,e.content=d.content;break}e.content.right=d,e=d;break}case o.Numeral:{const a=f(c.Numeral,{numeral:n});switch(e.kind){case c.Unset:{e.kind=c.Binary,e.content=f(c.Binary,{left:a}).content;break}case c.Unary:{e.content.argument=a;break}case c.Binary:{e.content.right=a;break}}break}}i++}return r}function B(t,r){let e=r,i=1;for(;e<t.length&&(e++,!(t[e].type===o.Bracket&&(t[e].value===h.Left?i++:i--,i===0))););if(i!==0)throw new SyntaxError(`No matching right bracket for left bracket at index ${r}`);if(e===r+1)throw new SyntaxError(`Empty brackets at index ${r}.`);return e}function f(t,r){return{kind:t,content:r}}function g(t){switch(t.kind){case c.Numeral:return t.content.numeral.value;case c.Unary:{const r=g(t.content.argument);return t.content.operator.value===p.Pos?r:-r}case c.Binary:{const r=g(t.content.left),e=g(t.content.right);switch(t.content.operator.value){case l.Add:return r+e;case l.Sub:return r-e;case l.Mul:return r*e;case l.Div:return r/e;case l.Pow:return r**e}}default:return NaN}}function b(t){return g(v(w(t)))}const y=document.getElementById("calc"),m=document.getElementById("res");m.textContent=String(b(y.getAttribute("placeholder")));y.oninput=()=>{if(y.value.length===0){m.textContent=String(b(y.getAttribute("placeholder")));return}try{m.textContent=String(b(y.value))}catch{m.textContent="Invalid Input"}};
