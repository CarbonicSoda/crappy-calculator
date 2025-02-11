(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))g(h);new MutationObserver(h=>{for(const l of h)if(l.type==="childList")for(const O of l.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&g(O)}).observe(document,{childList:!0,subtree:!0});function p(h){const l={};return h.integrity&&(l.integrity=h.integrity),h.referrerPolicy&&(l.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?l.credentials="include":h.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function g(h){if(h.ep)return;h.ep=!0;const l=p(h);fetch(h.href,l)}})();var n;(t=>{(r=>{r[r.Prefix=0]="Prefix",r[r.Postfix=1]="Postfix",r[r.Function=2]="Function"})(t.UnaryOpTypes||(t.UnaryOpTypes={})),(r=>{r[r.Bracket=0]="Bracket",r[r.Numeral=1]="Numeral",r[r.UnaryOp=2]="UnaryOp",r[r.BinaryOp=3]="BinaryOp"})(t.TokenTypes||(t.TokenTypes={})),(r=>{r[r.Root=0]="Root",r[r.Numeral=1]="Numeral",r[r.UnaryOp=2]="UnaryOp",r[r.BinaryOp=3]="BinaryOp"})(t.TreeTypes||(t.TreeTypes={}))})(n||(n={}));var i;(t=>{t.constantRegistry=new Map,t.constantSymbolRegistry=new Map,t.unaryOpRegistry=new Map,t.unaryOpSymbolRegistry=new Map,t.binaryOpRegistry=new Map,t.binaryOpSymbolRegistry=new Map;function r(o){return t.constantRegistry.has(o)}t.existConstant=r;function p(o){return t.constantSymbolRegistry.has(o)}t.existConstantWithSymbol=p;function g(o){return t.unaryOpRegistry.has(o)}t.existUnaryOp=g;function h(o){return t.unaryOpSymbolRegistry.has(o)}t.existUnaryOpWithSymbol=h;function l(o){return t.binaryOpRegistry.has(o)}t.existBinaryOp=l;function O(o){return t.binaryOpSymbolRegistry.has(o)}t.existBinaryOpWithSymbol=O;function a(o,b){if(r(o))throw new Error(`Constant with id ${o} already exists.`);if(p(b.symbol))throw new Error(`Constant with symbol ${b.symbol} already exists.`);t.constantRegistry.set(o,{id:o,...b}),t.constantSymbolRegistry.set(b.symbol,{id:o,...b})}t.registerConstant=a;function d(o,b){if(g(o))throw new Error(`Unary operator with id ${o} already exists.`);if(h(b.symbol))throw new Error(`Unary operator with symbol ${b.symbol} already exists.`);t.unaryOpRegistry.set(o,{id:o,...b}),t.unaryOpSymbolRegistry.set(b.symbol,{id:o,...b})}t.registerUnaryOp=d;function w(o,b){if(l(o))throw new Error(`Binary operator with id ${o} already exists.`);if(O(b.symbol))throw new Error(`Binary operator with symbol ${b.symbol} already exists.`);t.binaryOpRegistry.set(o,{id:o,...b}),t.binaryOpSymbolRegistry.set(b.symbol,{id:o,...b})}t.registerBinaryOp=w;function E(){return[...t.constantSymbolRegistry.keys()]}t.getConstantSymbols=E;function u(){return[...t.unaryOpSymbolRegistry.keys()]}t.getUnaryOpSymbols=u;function m(){return[...t.binaryOpSymbolRegistry.keys()]}t.getBinaryOpSymbols=m;function f(o){if(!r(o))throw new Error(`Constant with id ${o} is not registered.`);return t.constantRegistry.get(o)}t.getConstant=f;function y(o){if(!p(o))throw new Error(`Constant with symbol ${o} is not registered.`);return t.constantSymbolRegistry.get(o)}t.getConstantWithSymbol=y;function e(o){if(!g(o))throw new Error(`Unary operator with id ${o} is not registered.`);return t.unaryOpRegistry.get(o)}t.getUnaryOp=e;function c(o){if(!h(o))throw new Error(`Unary operator with symbol ${o} is not registered.`);return t.unaryOpSymbolRegistry.get(o)}t.getUnaryOpWithSymbol=c;function s(o){if(!l(o))throw new Error(`Binary operator with id ${o} is not registered.`);return t.binaryOpRegistry.get(o)}t.getBinaryOp=s;function T(o){if(!O(o))throw new Error(`Binary operator with symbol ${o} is not registered.`);return t.binaryOpSymbolRegistry.get(o)}t.getBinaryOpWithSymbol=T})(i||(i={}));var U;(t=>{function p(a){if(a===1/0)return 1/0;if(a>=0&&a<100&&Number.isInteger(a)){let d=1;for(let w=2;w<a+1;w++)d*=w;return d}return h(a+1)}t.factorial=p;function g(a){return p(a-1)}t.gamma=g;function h(a){const w=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(a<.5)return Math.PI/(Math.sin(Math.PI*a)*h(1-a));a--;let E=w[0];for(let m=1;m<9;m++)E+=w[m]/(a+m);const u=a+7+.5;return Math.sqrt(2*Math.PI)*Math.pow(u,a+.5)*Math.exp(-u)*E}function l(a,d){return p(a)/p(a-d)}t.permutation=l;function O(a,d){return l(a,d)/p(d)}t.combination=O})(U||(U={}));function P(){i.registerConstant("e",{symbol:"E",value:Math.E}),i.registerConstant("pi",{symbol:"PI",value:Math.PI}),i.registerUnaryOp("pos",{symbol:"+",type:n.UnaryOpTypes.Prefix,callback:r=>r}),i.registerUnaryOp("neg",{symbol:"-",type:n.UnaryOpTypes.Prefix,callback:r=>-r}),i.registerUnaryOp("factorial",{symbol:"!",type:n.UnaryOpTypes.Postfix,callback:U.factorial}),i.registerUnaryOp("abs",{symbol:"abs",type:n.UnaryOpTypes.Function,callback:Math.abs}),i.registerUnaryOp("floor",{symbol:"floor",type:n.UnaryOpTypes.Function,callback:Math.floor}),i.registerUnaryOp("ceil",{symbol:"ceil",type:n.UnaryOpTypes.Function,callback:Math.ceil}),i.registerUnaryOp("round",{symbol:"round",type:n.UnaryOpTypes.Function,callback:Math.round}),i.registerUnaryOp("sqrt",{symbol:"sqrt",type:n.UnaryOpTypes.Function,callback:Math.sqrt}),i.registerUnaryOp("exp",{symbol:"exp",type:n.UnaryOpTypes.Function,callback:Math.exp}),i.registerUnaryOp("log",{symbol:"Ln",type:n.UnaryOpTypes.Function,callback:Math.log}),i.registerUnaryOp("log10",{symbol:"log",type:n.UnaryOpTypes.Function,callback:Math.log10}),i.registerUnaryOp("sin",{symbol:"sin",type:n.UnaryOpTypes.Function,callback:Math.sin}),i.registerUnaryOp("cos",{symbol:"cos",type:n.UnaryOpTypes.Function,callback:Math.cos}),i.registerUnaryOp("tan",{symbol:"tan",type:n.UnaryOpTypes.Function,callback:Math.tan}),i.registerUnaryOp("gamma",{symbol:"Gamma",type:n.UnaryOpTypes.Function,callback:U.gamma}),i.registerBinaryOp("add",{symbol:"+",callback:(r,p)=>r+p,precedence:0}),i.registerBinaryOp("sub",{symbol:"-",callback:(r,p)=>r-p,precedence:0}),i.registerBinaryOp("mul",{symbol:"*",callback:(r,p)=>r*p,precedence:1}),i.registerBinaryOp("div",{symbol:"/",callback:(r,p)=>r/p,precedence:1}),i.registerBinaryOp("int_div",{symbol:"//",callback:(r,p)=>Math.floor(r/p),precedence:1}),i.registerBinaryOp("pow",{symbol:"**",callback:(r,p)=>r**p,precedence:2}),i.registerBinaryOp("pow_alias",{symbol:"^",callback:(r,p)=>r**p,precedence:2}),i.registerBinaryOp("mod",{symbol:"%",callback:(r,p)=>r%p,precedence:2});const t=100;i.registerBinaryOp("min",{symbol:"min",callback:Math.min,precedence:t}),i.registerBinaryOp("max",{symbol:"max",callback:Math.max,precedence:t}),i.registerBinaryOp("permutation",{symbol:"P",callback:U.permutation,precedence:t}),i.registerBinaryOp("combination",{symbol:"C",callback:U.combination,precedence:t})}var x;(t=>{function r(u){const m=u.length,f=[];for(;u.length;){const y=m-u.length,e=O(u,y,f);u=u.slice(e.length)}return f}t.tokenize=r;class p{constructor(m,f,y){this.type=m,this.symbol=f,this.meta=y}toString(){return`Token[${this.meta.from}-${this.meta.to}]<${n.TokenTypes[this.type]}> ${this.symbol}`}}t.Token=p,P();const g=u=>u.replaceAll(/[.*+?^${}()|[\]\\]/g,"\\$&"),h=Object.keys(n.TokenTypes).length/2,l={[n.TokenTypes.Bracket]:/[()]/,[n.TokenTypes.Numeral]:new RegExp(`(?:${i.getConstantSymbols().sort((u,m)=>m.length-u.length).map(g).join(")|(?:")})|(?:\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)`),[n.TokenTypes.UnaryOp]:new RegExp(`(?:${i.getUnaryOpSymbols().sort((u,m)=>m.length-u.length).map(g).join(")|(?:")})`),[n.TokenTypes.BinaryOp]:new RegExp(`(?:${i.getBinaryOpSymbols().sort((u,m)=>m.length-u.length).map(g).join(")|(?:")})`)};function O(u,m,f){let y;for(let e=0;e<h;e++){const c=new RegExp(`^\\s*(?:${l[e].source})\\s*`);if(y=u.match(c)?.[0],y===void 0)continue;let s=y.trimStart();const T=m+y.length-s.length;s=s.trimEnd();const o=T+s.length-1,b={from:T,to:o},B=f.at(-1);switch(e){case n.TokenTypes.Bracket:{if(a(f,s,b,B))break;continue}case n.TokenTypes.Numeral:{if(d(f,s,b,B))break;continue}case n.TokenTypes.UnaryOp:{if(w(f,s,b,B))break;continue}case n.TokenTypes.BinaryOp:{if(E(f,s,b))break;continue}}break}if(!y)throw new SyntaxError(`Invalid symbol at ${m}.`);return y}function a(u,m,f,y){const e=y?.symbol===")"||y?.type===n.TokenTypes.Numeral||y?.type===n.TokenTypes.UnaryOp&&i.getUnaryOpWithSymbol(y.symbol).type===n.UnaryOpTypes.Postfix;if(m==="("&&e&&i.existBinaryOp("mul")){const s=new p(n.TokenTypes.BinaryOp,i.getBinaryOp("mul").symbol,f);u.push(s)}const c=new p(n.TokenTypes.Bracket,m,f);return u.push(c)}function d(u,m,f,y){const e=y?.symbol===")"||y?.type===n.TokenTypes.Numeral||y?.type===n.TokenTypes.UnaryOp&&i.getUnaryOpWithSymbol(y.symbol).type===n.UnaryOpTypes.Postfix;if(i.existConstantWithSymbol(m)&&e&&i.existBinaryOp("mul")){const s=new p(n.TokenTypes.BinaryOp,i.getBinaryOp("mul").symbol,f);u.push(s)}const c=new p(n.TokenTypes.Numeral,m,f);return u.push(c)}function w(u,m,f,y){const e=y?.symbol===")"||y?.type===n.TokenTypes.Numeral||y?.type===n.TokenTypes.UnaryOp&&i.getUnaryOpWithSymbol(y.symbol).type===n.UnaryOpTypes.Postfix;switch(i.getUnaryOpWithSymbol(m).type){case n.UnaryOpTypes.Prefix:{if(e)return!1;break}case n.UnaryOpTypes.Postfix:{if(!e)return!1;break}case n.UnaryOpTypes.Function:{if(!e||!i.existBinaryOp("mul"))break;const s=new p(n.TokenTypes.BinaryOp,i.getBinaryOp("mul").symbol,f);u.push(s);break}}const c=new p(n.TokenTypes.UnaryOp,m,f);return u.push(c)}function E(u,m,f,y){const e=new p(n.TokenTypes.BinaryOp,m,f);return u.push(e)}})(x||(x={}));var $;(t=>{function r(y){const e=new O,c={index:0,position:()=>{const s=c.tokens[c.index];return`${s.meta.from} - ${s.meta.to}`},tokens:y,pointer:e};for(;c.index<y.length;){const s=y[c.index];switch(s.type){case n.TokenTypes.Bracket:{E(s,c);break}case n.TokenTypes.Numeral:{u(s,c);break}case n.TokenTypes.UnaryOp:{m(s,c);break}case n.TokenTypes.BinaryOp:{f(s,c);break}}c.index++}return e}t.parse=r;class p{constructor(e,c){this.type=e,this.precedence=c}clone(){const e=Object.create(Object.getPrototypeOf(this));return Object.defineProperties(e,Object.getOwnPropertyDescriptors(this)),e}}t.Tree=p;const g=-1,h=Number.MAX_SAFE_INTEGER+1,l=Number.MAX_SAFE_INTEGER;class O extends p{$content;set content(e){this.$content=e,e.parent=this}get content(){return this.$content}constructor(){super(n.TreeTypes.Root,g)}toString(){return`${this.content?this.content.toString():"<Empty>"}`}}t.RootTree=O;class a extends p{constructor(e,c){super(n.TreeTypes.Numeral,h),this.parent=e,this.numeral=c}toString(e=1){return`Tree<Numeral>${`
`+"  ┃  ".repeat(e)}${this.numeral}`}}t.NumeralTree=a;class d extends p{constructor(e,c){super(n.TreeTypes.UnaryOp,l),this.parent=e,this.operator=i.getUnaryOpWithSymbol(c.symbol),this.meta=c.meta}$argument;set argument(e){this.$argument=e,e.parent=this}get argument(){return this.$argument}operator;meta;toString(e=1){const c=`
`+"  ┃  ".repeat(e);return`Tree<Unary>${c}Operator: ${this.operator.id} (${this.operator.symbol})${c}Argument: ${this.argument?this.argument.toString(e+1):"<Empty>"}`}}t.UnaryOpTree=d;class w extends p{constructor(e,c){const s=i.getBinaryOpWithSymbol(c.symbol);super(n.TreeTypes.BinaryOp,s.precedence),this.parent=e,this.operator=s,this.meta=c.meta}$left;$right;set left(e){this.$left=e,e.parent=this}get left(){return this.$left}set right(e){this.$right=e,e.parent=this}get right(){return this.$right}operator;meta;toString(e=1){const c=`
`+"  ┃  ".repeat(e);return`Tree<Binary>${c}Operator: ${this.operator.id} (${this.operator.symbol})${c}Left: ${this.left?this.left.toString(e+1):"<Empty>"}${c}Right: ${this.right?this.right.toString(e+1):"<Empty>"}`}}t.BinaryOpTree=w;function E(y,e){if(y.symbol===")")throw new SyntaxError(`Lone right bracket at ${e.position()}.`);if(e.pointer.type===n.TreeTypes.Numeral)throw new SyntaxError(`Missing operator before bracket at ${e.position()}.`);const c=e.index;let s=c,T=1;for(;s<e.tokens.length-1&&(s++,!(e.tokens[s].type===n.TokenTypes.Bracket&&(e.tokens[s].symbol==="("?T++:T--,T===0))););if(T!==0)throw new SyntaxError(`Unbalanced bracket at ${e.position()}.`);if(s===c+1)throw new SyntaxError(`Empty brackets at ${e.position()}.`);e.index=s;const o=r(e.tokens.slice(c+1,s));switch(o.content.precedence=h,e.pointer.type){case n.TreeTypes.Root:{const b=e.pointer;e.pointer=b.content=o.content;break}case n.TreeTypes.UnaryOp:{const b=e.pointer;e.pointer=b.argument=o.content;break}case n.TreeTypes.BinaryOp:{const b=e.pointer;e.pointer=b.right=o.content;break}}}function u(y,e){if(e.pointer.type===n.TreeTypes.Numeral)throw new SyntaxError(`Missing operator between numerals at ${e.position()}.`);const c=new a(e.pointer,y);switch(e.pointer.type){case n.TreeTypes.Root:{const s=e.pointer;e.pointer=s.content=c;break}case n.TreeTypes.UnaryOp:{const s=e.pointer;e.pointer=s.argument=c;break}case n.TreeTypes.BinaryOp:{const s=e.pointer;e.pointer=s.right=c;break}}}function m(y,e){for(;e.pointer.type!==n.TreeTypes.Root&&e.pointer.precedence>l;)e.pointer=e.pointer.parent;const s=i.getUnaryOpWithSymbol(y.symbol).type===n.UnaryOpTypes.Postfix;if(s&&!(e.pointer.type===n.TreeTypes.Root&&e.pointer.content||e.pointer.type===n.TreeTypes.UnaryOp&&e.pointer.argument||e.pointer.type===n.TreeTypes.BinaryOp&&e.pointer.right))throw new SyntaxError(`Missing entry before postfix unary operator at ${e.position()}.`);const T=new d(e.pointer,y);switch(e.pointer.type){case n.TreeTypes.Root:{const o=e.pointer;s&&(T.argument=o.content.clone()),e.pointer=o.content=T;break}case n.TreeTypes.UnaryOp:{const o=e.pointer;s&&(T.argument=o.argument.clone()),e.pointer=o.argument=T;break}case n.TreeTypes.BinaryOp:{const o=e.pointer;s&&(T.argument=o.right.clone()),e.pointer=o.right=T;break}}}function f(y,e){if(e.pointer.type===n.TreeTypes.Root)throw new SyntaxError(`Missing entry before binary operator at ${e.position()}.`);const c=i.getBinaryOpWithSymbol(y.symbol);for(;e.pointer.precedence>=c.precedence;)e.pointer=e.pointer.parent;const s=new w(e.pointer,y);switch(e.pointer.type){case n.TreeTypes.Root:{const T=e.pointer;s.left=T.content.clone(),e.pointer=T.content=s;break}case n.TreeTypes.UnaryOp:{const T=e.pointer;s.left=T.clone(),e.pointer=T.argument=s;break}case n.TreeTypes.BinaryOp:{const T=e.pointer;s.left=T.right.clone(),e.pointer=T.right=s;break}}}})($||($={}));var C;(t=>{function r(a){switch(a.type){case n.TreeTypes.Root:return p(a);case n.TreeTypes.Numeral:return g(a);case n.TreeTypes.UnaryOp:return h(a);case n.TreeTypes.BinaryOp:return l(a)}}t.evaluate=r;function p(a){if(!a.content)throw new SyntaxError("Evaluating empty tree.");return r(a.content)}function g(a){const d=a.numeral.symbol;return i.existConstantWithSymbol(d)?i.getConstantWithSymbol(d).value:Number(d)}function h(a){if(!a.argument)throw new SyntaxError(`Unary operator lacks argument at ${O(a.meta)}.`);const d=i.getUnaryOpWithSymbol(a.operator.symbol).callback;return d(r(a.argument))}function l(a){if(!a.left)throw new SyntaxError(`Binary operator lacks left operand at ${O(a.meta)}.`);if(!a.right)throw new SyntaxError(`Binary operator lacks right operand at ${O(a.meta)}.`);const d=i.getBinaryOpWithSymbol(a.operator.symbol).callback,w=r(a.left),E=r(a.right);return d(w,E)}const O=a=>`${a.from} - ${a.to}`})(C||(C={}));var N;(t=>{function r(g){const h=x.tokenize(g),l=$.parse(h),O=C.evaluate(l);return{tokens:h,tree:l,value:O}}t.calculate=r;function p(g){return r(g).value}t.value=p})(N||(N={}));const v=50,S=document.getElementById("input"),k=document.getElementById("result");M(S.getAttribute("placeholder"));S.oninput=()=>M(S.value);function M(t){console.clear(),k.classList.remove("error");let r;try{r=N.calculate(t.length===0?S.getAttribute("placeholder"):t)}catch(p){k.innerHTML="",k.classList.add("error");const g=document.createElement("p");g.textContent=`${p}`.replace(/.*Error: /,""),k.appendChild(g);return}console.log(`${r.tree}`),R(r.tokens,r.value)}function R(t,r){if(k.innerHTML="",(l=>{let O=0;for(const a of l)O+=a;return O})(t.map(l=>l.symbol.length))>v){const l=document.createElement("p");l.textContent="Expression",k.appendChild(l)}else for(const l of t){const O=document.createElement("p");O.textContent=l.symbol,O.className=n.TokenTypes[l.type],k.appendChild(O)}const g=document.createElement("p");g.textContent=" = ",k.appendChild(g);const h=document.createElement("p");h.textContent=`${r}`,k.appendChild(h)}
