import{S as k,i as S,s as E,l as y,g as i,n as w,d as n,e as p,t as m,c as d,a as f,h as b,b as x,J as u,j as g,k as P,m as C}from"./index-7fd2aba4.js";function z(o){let t,v,s,l;return{c(){t=p("div"),v=p("p"),s=m(o[0]),this.h()},l(e){t=d(e,"DIV",{class:!0});var r=f(t);v=d(r,"P",{class:!0});var a=f(v);s=b(a,o[0]),a.forEach(n),r.forEach(n),this.h()},h(){x(v,"class",l="text-6xl font-bold "+o[1]+" svelte-v85807"),x(t,"class","bg-white border p-10 max-w-0 shadow-lg flex justify-center items-center")},m(e,r){i(e,t,r),u(t,v),u(v,s)},p(e,r){r&1&&g(s,e[0]),r&2&&l!==(l="text-6xl font-bold "+e[1]+" svelte-v85807")&&x(v,"class",l)},d(e){e&&n(t)}}}function j(o){let t,v,s,l,e,r;return{c(){t=p("div"),v=p("span"),s=m(o[0]),l=P(),e=p("p"),r=m("Yeni kart"),this.h()},l(a){t=d(a,"DIV",{class:!0});var c=f(t);v=d(c,"SPAN",{class:!0});var _=f(v);s=b(_,o[0]),_.forEach(n),c.forEach(n),l=C(a),e=d(a,"P",{});var h=f(e);r=b(h,"Yeni kart"),h.forEach(n),this.h()},h(){x(v,"class","inner svelte-v85807"),x(t,"class","card svelte-v85807")},m(a,c){i(a,t,c),u(t,v),u(v,s),i(a,l,c),i(a,e,c),u(e,r)},p(a,c){c&1&&g(s,a[0])},d(a){a&&n(t),a&&n(l),a&&n(e)}}}function D(o){let t;function v(e,r){return e[0]&&!e[1]?j:z}let s=v(o),l=s(o);return{c(){l.c(),t=y()},l(e){l.l(e),t=y()},m(e,r){l.m(e,r),i(e,t,r)},p(e,[r]){s===(s=v(e))&&l?l.p(e,r):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},i:w,o:w,d(e){l.d(e),e&&n(t)}}}function I(o,t,v){let{number:s}=t,{color:l}=t;return o.$$set=e=>{"number"in e&&v(0,s=e.number),"color"in e&&v(1,l=e.color)},[s,l]}class V extends k{constructor(t){super(),S(this,t,I,D,E,{number:0,color:1})}}export{V as C};
