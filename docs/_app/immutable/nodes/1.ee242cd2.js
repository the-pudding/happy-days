import{s as d,n as m,e as f}from"../chunks/scheduler.aed2d23e.js";import{S as _,i as h,g as v,m as u,h as $,j as E,n as p,f as b,a as S,y as l,o as g}from"../chunks/index.3ecacae0.js";import{s as x}from"../chunks/singletons.71dffe26.js";const y=()=>{const s=x;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return y().page.subscribe(s)}};function q(s){let e,r=s[0].status+"",n,o,i=s[0].error.message+"",c;return{c(){e=v("h1"),n=u(r),o=u(": "),c=u(i)},l(a){e=$(a,"H1",{});var t=E(e);n=p(t,r),o=p(t,": "),c=p(t,i),t.forEach(b)},m(a,t){S(a,e,t),l(e,n),l(e,o),l(e,c)},p(a,[t]){t&1&&r!==(r=a[0].status+"")&&g(n,r),t&1&&i!==(i=a[0].error.message+"")&&g(c,i)},i:m,o:m,d(a){a&&b(e)}}}function C(s,e,r){let n;return f(s,j,o=>r(0,n=o)),[n]}let z=class extends _{constructor(e){super(),h(this,e,C,q,d,{})}};export{z as component};
