import{S as g,i as $,s as C,x as v,y as b,z as k,A as y,B as x,r as _,p as h,C as q,k as E,e as S,K as w,d as f,m as B,c as j,a as z,g as d,q as A,L as D,D as I,o as K}from"../chunks/index-4b63fbd4.js";import{C as L}from"../chunks/Card-ad4a64f6.js";function m(c,s,n){const r=c.slice();return r[2]=s[n],r}function p(c){let s,n;const r=[c[2]];let l={};for(let e=0;e<r.length;e+=1)l=I(l,r[e]);return s=new L({props:l}),{c(){v(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,u){k(s,e,u),n=!0},p(e,u){const t=u&1?y(r,[x(e[2])]):{};s.$set(t)},i(e){n||(_(s.$$.fragment,e),n=!0)},o(e){h(s.$$.fragment,e),n=!1},d(e){q(s,e)}}}function N(c){let s,n,r,l=c[0],e=[];for(let t=0;t<l.length;t+=1)e[t]=p(m(c,l,t));const u=t=>h(e[t],1,1,()=>{e[t]=null});return{c(){s=E(),n=S("section");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){w('[data-svelte="svelte-3souki"]',document.head).forEach(f),s=B(t),n=j(t,"SECTION",{});var o=z(n);for(let i=0;i<e.length;i+=1)e[i].l(o);o.forEach(f),this.h()},h(){document.title="Uno Cards"},m(t,a){d(t,s,a),d(t,n,a);for(let o=0;o<e.length;o+=1)e[o].m(n,null);r=!0},p(t,[a]){if(a&1){l=t[0];let o;for(o=0;o<l.length;o+=1){const i=m(t,l,o);e[o]?(e[o].p(i,a),_(e[o],1)):(e[o]=p(i),e[o].c(),_(e[o],1),e[o].m(n,null))}for(K(),o=l.length;o<e.length;o+=1)u(o);A()}},i(t){if(!r){for(let a=0;a<l.length;a+=1)_(e[a]);r=!0}},o(t){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)h(e[a]);r=!1},d(t){t&&f(s),t&&f(n),D(e,t)}}}function O(c){let s=[];const n=["blue","green","red","yellow"];for(let r=0;r<n.length;r++){const l=n[r];for(let e=0;e<=9;e++)s.push({color:l,number:e})}return[s]}class F extends g{constructor(s){super(),$(this,s,O,N,C,{})}}export{F as default};
