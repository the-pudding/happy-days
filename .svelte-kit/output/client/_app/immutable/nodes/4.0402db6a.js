import{s as te,l as _e,m as ve,n as ee,r as ue,o as ge}from"../chunks/scheduler.aed2d23e.js";import{S as ne,i as se,g as b,s as L,m as F,z as ke,h as x,f as C,c as M,j as S,n as H,C as K,k,l as W,y as p,a as O,D as Z,o as V,I as Q,d as R,p as ce,b as fe,t as q,A as he,J as Ee,r as pe,u as de,v as me,w as ye}from"../chunks/index.3ecacae0.js";import{e as $}from"../chunks/each.e59479a4.js";import{b as Ce}from"../chunks/paths.1ac41a6a.js";function be(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}class xe extends Map{constructor(t,s=we){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:s}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(le(this,t))}has(t){return super.has(le(this,t))}set(t,s){return super.set(ze(this,t),s)}delete(t){return super.delete(Te(this,t))}}function le({_intern:e,_key:t},s){const n=t(s);return e.has(n)?e.get(n):s}function ze({_intern:e,_key:t},s){const n=t(s);return e.has(n)?e.get(n):(e.set(n,s),s)}function Te({_intern:e,_key:t},s){const n=t(s);return e.has(n)&&(s=e.get(n),e.delete(n)),s}function we(e){return e!==null&&typeof e=="object"?e.valueOf():e}function Se(e){return e}function Le(e,...t){return Me(e,Array.from,Se,t)}function Me(e,t,s,n){return function r(o,v){if(v>=n.length)return s(o);const y=new xe,c=n[v++];let l=-1;for(const m of o){const i=c(m,++l,o),a=y.get(i);a?a.push(m):y.set(i,[m])}for(const[m,i]of y)y.set(m,r(i,v));return t(y)}(e,0)}function G(e,t,s){this.k=e,this.x=t,this.y=s}G.prototype={constructor:G,scale:function(e){return e===1?this:new G(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new G(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};G.prototype;async function De(e){if("clipboard"in navigator)await navigator.clipboard.writeText(e);else{const t=document.createElement("input");t.type="text",t.disabled=!0,t.style.setProperty("position","fixed"),t.style.setProperty("z-index","-100"),t.style.setProperty("pointer-events","none"),t.style.setProperty("opacity","0"),t.value=e,document.body.appendChild(t),t.click(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}const Ie=(e,t)=>{async function s(){if(r)try{await De(r),e.dispatchEvent(new CustomEvent("svelte-copy",{detail:r}))}catch(o){e.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:o}))}}let n=typeof t=="string"?["click"]:[t.events].flat(1),r=typeof t=="string"?t:t.text;return n.forEach(o=>{e.addEventListener(o,s,!0)}),{update:o=>{const v=typeof o=="string"?["click"]:[o.events].flat(1),y=typeof o=="string"?o:o.text,c=v.filter(m=>!n.includes(m)),l=n.filter(m=>!v.includes(m));c.forEach(m=>{e.addEventListener(m,s,!0)}),l.forEach(m=>{e.removeEventListener(m,s,!0)}),n=v,r=y},destroy:()=>{n.forEach(o=>{e.removeEventListener(o,s,!0)})}}};function Ne(e){let t,s,n,r,o,v,y,c,l,m,i,a="CSS Snippet",d,g,B,D,A,T,w="Copy CSS to Clipboard",j,z,I,Y,J;return{c(){t=b("link"),s=L(),n=b("div"),r=b("h3"),o=F(e[0]),v=L(),y=b("p"),c=F(e[1]),l=L(),m=b("details"),i=b("summary"),i.textContent=a,d=L(),g=b("code"),B=F(e[2]),D=L(),A=b("p"),T=b("button"),T.textContent=w,z=b("span"),I=F(e[3]),this.h()},l(E){const u=ke("svelte-1uevrx3",document.head);t=x(u,"LINK",{rel:!0,href:!0}),u.forEach(C),s=M(E),n=x(E,"DIV",{style:!0,class:!0});var N=S(n);r=x(N,"H3",{class:!0});var f=S(r);o=H(f,e[0]),f.forEach(C),v=M(N),y=x(N,"P",{});var _=S(y);c=H(_,e[1]),_.forEach(C),l=M(N),m=x(N,"DETAILS",{class:!0});var h=S(m);i=x(h,"SUMMARY",{class:!0,"data-svelte-h":!0}),K(i)!=="svelte-1p4cxwi"&&(i.textContent=a),d=M(h),g=x(h,"CODE",{class:!0});var P=S(g);B=H(P,e[2]),P.forEach(C),h.forEach(C),D=M(N),A=x(N,"P",{});var U=S(A);T=x(U,"BUTTON",{class:!0,"data-svelte-h":!0}),K(T)!=="svelte-v2s51m"&&(T.textContent=w),z=x(U,"SPAN",{class:!0});var X=S(z);I=H(X,e[3]),X.forEach(C),U.forEach(C),N.forEach(C),this.h()},h(){k(t,"rel","external stylesheet"),k(t,"href",e[5]),k(r,"class","svelte-19ry7n"),W(y,"font-size",e[4]),k(i,"class","svelte-19ry7n"),k(g,"class","svelte-19ry7n"),k(m,"class","svelte-19ry7n"),k(T,"class","svelte-19ry7n"),k(z,"class","svelte-19ry7n"),W(n,"font-family","'"+e[0]+"'"),k(n,"class","svelte-19ry7n")},m(E,u){p(document.head,t),O(E,s,u),O(E,n,u),p(n,r),p(r,o),p(n,v),p(n,y),p(y,c),p(n,l),p(n,m),p(m,i),p(m,d),p(m,g),p(g,B),p(n,D),p(n,A),p(A,T),p(A,z),p(z,I),Y||(J=[_e(j=Ie.call(null,T,e[2])),Z(T,"svelte-copy",e[6])],Y=!0)},p(E,[u]){u&1&&V(o,E[0]),u&2&&V(c,E[1]),u&16&&W(y,"font-size",E[4]),u&4&&V(B,E[2]),j&&ve(j.update)&&u&4&&j.update.call(null,E[2]),u&8&&V(I,E[3]),u&1&&W(n,"font-family","'"+E[0]+"'")},i:ee,o:ee,d(E){E&&(C(s),C(n)),C(t),Y=!1,ue(J)}}}function Pe(e,t,s){let n,{id:r=""}=t,{family:o=""}=t,{size:v=16}=t,{text:y}=t,c="",l="";const m=`${Ce}/assets/demo/fonts/${r}.css`,i=()=>{s(3,l="Copied!"),setTimeout(()=>{s(3,l="")},1e3)};return ge(async()=>{const a=await fetch(m);s(2,c=await a.text())}),e.$$set=a=>{"id"in a&&s(7,r=a.id),"family"in a&&s(0,o=a.family),"size"in a&&s(8,v=a.size),"text"in a&&s(1,y=a.text)},e.$$.update=()=>{e.$$.dirty&256&&s(4,n=`${v}px`)},[o,y,c,l,n,m,i,r,v]}class Ae extends ne{constructor(t){super(),se(this,t,Pe,Ne,te,{id:7,family:0,size:8,text:1})}}const je=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function oe(e,t,s){const n=e.slice();return n[5]=t[s][0],n[6]=t[s][1],n}function ie(e,t,s){const n=e.slice();return n[9]=t[s].family,n[10]=t[s].id,n}function re(e){let t,s;return t=new Ae({props:{id:e[10],family:e[9],size:e[0],text:e[1]}}),{c(){pe(t.$$.fragment)},l(n){de(t.$$.fragment,n)},m(n,r){me(t,n,r),s=!0},p(n,r){const o={};r&1&&(o.size=n[0]),r&2&&(o.text=n[1]),t.$set(o)},i(n){s||(R(t.$$.fragment,n),s=!0)},o(n){q(t.$$.fragment,n),s=!1},d(n){ye(t,n)}}}function ae(e){let t,s=e[5]+"",n,r,o,v,y,c=$(e[6]),l=[];for(let i=0;i<c.length;i+=1)l[i]=re(ie(e,c,i));const m=i=>q(l[i],1,1,()=>{l[i]=null});return{c(){t=b("h2"),n=F(s),r=L(),o=b("section");for(let i=0;i<l.length;i+=1)l[i].c();v=L(),this.h()},l(i){t=x(i,"H2",{});var a=S(t);n=H(a,s),a.forEach(C),r=M(i),o=x(i,"SECTION",{class:!0});var d=S(o);for(let g=0;g<l.length;g+=1)l[g].l(d);v=M(d),d.forEach(C),this.h()},h(){k(o,"class","svelte-1lzc8ku")},m(i,a){O(i,t,a),p(t,n),O(i,r,a),O(i,o,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(o,null);p(o,v),y=!0},p(i,a){if(a&7){c=$(i[6]);let d;for(d=0;d<c.length;d+=1){const g=ie(i,c,d);l[d]?(l[d].p(g,a),R(l[d],1)):(l[d]=re(g),l[d].c(),R(l[d],1),l[d].m(o,v))}for(ce(),d=c.length;d<l.length;d+=1)m(d);fe()}},i(i){if(!y){for(let a=0;a<c.length;a+=1)R(l[a]);y=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)q(l[a]);y=!1},d(i){i&&(C(t),C(r),C(o)),he(l,i)}}}function Be(e){let t,s,n="Hosted Fonts on The Pudding",r,o,v="<em>Do not use fonts hosted by The Pudding without written permission.</em>",y,c,l,m,i,a,d,g,B,D,A="text sample",T,w,j,z,I,Y,J,E=$(e[2]),u=[];for(let f=0;f<E.length;f+=1)u[f]=ae(oe(e,E,f));const N=f=>q(u[f],1,1,()=>{u[f]=null});return{c(){t=b("div"),s=b("h1"),s.textContent=n,r=L(),o=b("p"),o.innerHTML=v,y=L(),c=b("form"),l=b("label"),m=F("font-size: "),i=F(e[0]),a=F("px"),d=L(),g=b("input"),B=L(),D=b("label"),D.textContent=A,T=L(),w=b("input"),j=L(),z=b("article");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){t=x(f,"DIV",{id:!0,class:!0});var _=S(t);s=x(_,"H1",{"data-svelte-h":!0}),K(s)!=="svelte-1m2hcwq"&&(s.textContent=n),r=M(_),o=x(_,"P",{"data-svelte-h":!0}),K(o)!=="svelte-895ja5"&&(o.innerHTML=v),y=M(_),c=x(_,"FORM",{});var h=S(c);l=x(h,"LABEL",{for:!0,class:!0});var P=S(l);m=H(P,"font-size: "),i=H(P,e[0]),a=H(P,"px"),P.forEach(C),d=M(h),g=x(h,"INPUT",{id:!0,type:!0,min:!0,max:!0}),B=M(h),D=x(h,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),K(D)!=="svelte-16zo6eo"&&(D.textContent=A),T=M(h),w=x(h,"INPUT",{id:!0,type:!0,maxlength:!0}),h.forEach(C),_.forEach(C),j=M(f),z=x(f,"ARTICLE",{class:!0});var U=S(z);for(let X=0;X<u.length;X+=1)u[X].l(U);U.forEach(C),this.h()},h(){k(l,"for","size"),k(l,"class","svelte-1lzc8ku"),k(g,"id","size"),k(g,"type","range"),k(g,"min","12"),k(g,"max","48"),k(D,"for","text"),k(D,"class","svelte-1lzc8ku"),k(w,"id","text"),k(w,"type","text"),k(w,"maxlength","100"),k(t,"id","info"),k(t,"class","svelte-1lzc8ku"),k(z,"class","svelte-1lzc8ku")},m(f,_){O(f,t,_),p(t,s),p(t,r),p(t,o),p(t,y),p(t,c),p(c,l),p(l,m),p(l,i),p(l,a),p(c,d),p(c,g),Q(g,e[0]),p(c,B),p(c,D),p(c,T),p(c,w),Q(w,e[1]),O(f,j,_),O(f,z,_);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(z,null);I=!0,Y||(J=[Z(g,"change",e[3]),Z(g,"input",e[3]),Z(w,"input",e[4])],Y=!0)},p(f,[_]){if((!I||_&1)&&V(i,f[0]),_&1&&Q(g,f[0]),_&2&&w.value!==f[1]&&Q(w,f[1]),_&7){E=$(f[2]);let h;for(h=0;h<E.length;h+=1){const P=oe(f,E,h);u[h]?(u[h].p(P,_),R(u[h],1)):(u[h]=ae(P),u[h].c(),R(u[h],1),u[h].m(z,null))}for(ce(),h=E.length;h<u.length;h+=1)N(h);fe()}},i(f){if(!I){for(let _=0;_<E.length;_+=1)R(u[_]);I=!0}},o(f){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)q(u[_]);I=!1},d(f){f&&(C(t),C(j),C(z)),he(u,f),Y=!1,ue(J)}}}function Fe(e,t,s){let n=18,r="The quick brown fox jumps over the lazy dog.";const o=Le(je,c=>c.type);o.sort((c,l)=>be(c[1].length,l[1].length));function v(){n=Ee(this.value),s(0,n)}function y(){r=this.value,s(1,r)}return[n,r,o,v,y]}class He extends ne{constructor(t){super(),se(this,t,Fe,Be,te,{})}}function Oe(e){let t,s;return t=new He({}),{c(){pe(t.$$.fragment)},l(n){de(t.$$.fragment,n)},m(n,r){me(t,n,r),s=!0},p:ee,i(n){s||(R(t.$$.fragment,n),s=!0)},o(n){q(t.$$.fragment,n),s=!1},d(n){ye(t,n)}}}class qe extends ne{constructor(t){super(),se(this,t,null,Oe,te,{})}}export{qe as component};
