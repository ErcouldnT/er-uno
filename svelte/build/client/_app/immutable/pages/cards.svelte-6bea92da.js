import{S as E,i as y,s as S,e as h,t as $,c as d,a as m,h as A,d as u,b as _,g as v,J as g,j as N,n as q,x as j,y as w,z as x,A as B,B as D,r as p,p as b,C as I,k as P,K as z,m as J,q as K,L,D as O,o as T}from"../chunks/index-414e08b6.js";/* empty css                                                   */function U(c){let s,n,a,l,e;return{c(){s=h("div"),n=h("span"),a=h("span"),l=$(c[0]),this.h()},l(i){s=d(i,"DIV",{class:!0});var t=m(s);n=d(t,"SPAN",{class:!0});var o=m(n);a=d(o,"SPAN",{class:!0});var r=m(a);l=A(r,c[0]),r.forEach(u),o.forEach(u),t.forEach(u),this.h()},h(){_(a,"class","mark svelte-1iqr3nc"),_(n,"class","inner svelte-1iqr3nc"),_(s,"class",e="card num-"+c[0]+" "+c[1]+" svelte-1iqr3nc")},m(i,t){v(i,s,t),g(s,n),g(n,a),g(a,l)},p(i,[t]){t&1&&N(l,i[0]),t&3&&e!==(e="card num-"+i[0]+" "+i[1]+" svelte-1iqr3nc")&&_(s,"class",e)},i:q,o:q,d(i){i&&u(s)}}}function V(c,s,n){let{number:a}=s,{color:l}=s;return c.$$set=e=>{"number"in e&&n(0,a=e.number),"color"in e&&n(1,l=e.color)},[a,l]}class F extends E{constructor(s){super(),y(this,s,V,U,S,{number:0,color:1})}}function k(c,s,n){const a=c.slice();return a[2]=s[n],a}function C(c){let s,n;const a=[c[2]];let l={};for(let e=0;e<a.length;e+=1)l=O(l,a[e]);return s=new F({props:l}),{c(){j(s.$$.fragment)},l(e){w(s.$$.fragment,e)},m(e,i){x(s,e,i),n=!0},p(e,i){const t=i&1?B(a,[D(e[2])]):{};s.$set(t)},i(e){n||(p(s.$$.fragment,e),n=!0)},o(e){b(s.$$.fragment,e),n=!1},d(e){I(s,e)}}}function G(c){let s,n,a,l=c[0],e=[];for(let t=0;t<l.length;t+=1)e[t]=C(k(c,l,t));const i=t=>b(e[t],1,1,()=>{e[t]=null});return{c(){s=P(),n=h("section");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){z('[data-svelte="svelte-3souki"]',document.head).forEach(u),s=J(t),n=d(t,"SECTION",{});var r=m(n);for(let f=0;f<e.length;f+=1)e[f].l(r);r.forEach(u),this.h()},h(){document.title="Uno Cards"},m(t,o){v(t,s,o),v(t,n,o);for(let r=0;r<e.length;r+=1)e[r].m(n,null);a=!0},p(t,[o]){if(o&1){l=t[0];let r;for(r=0;r<l.length;r+=1){const f=k(t,l,r);e[r]?(e[r].p(f,o),p(e[r],1)):(e[r]=C(f),e[r].c(),p(e[r],1),e[r].m(n,null))}for(T(),r=l.length;r<e.length;r+=1)i(r);K()}},i(t){if(!a){for(let o=0;o<l.length;o+=1)p(e[o]);a=!0}},o(t){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)b(e[o]);a=!1},d(t){t&&u(s),t&&u(n),L(e,t)}}}function H(c){let s=[];const n=["blue","green","red","yellow"];for(let a=0;a<n.length;a++){const l=n[a];for(let e=0;e<=9;e++)s.push({color:l,number:e})}return[s]}class R extends E{constructor(s){super(),y(this,s,H,G,S,{})}}export{R as default};