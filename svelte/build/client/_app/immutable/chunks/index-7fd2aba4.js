function b(){}const ot=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function N(t){t.forEach(Q)}function U(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function Pt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Tt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function zt(t,e,n,i,r,c){if(r){const s=V(e,n,i,c);t.p(s,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ft(t){return t&&U(t.destroy)?t.destroy:b}const X=typeof window!="undefined";let ut=X?()=>window.performance.now():()=>Date.now(),F=X?t=>requestAnimationFrame(t):b;const k=new Set;function Y(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&F(Y)}function at(t){let e;return k.size===0&&F(Y),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let q=!1;function ft(){q=!0}function _t(){q=!1}function dt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:dt(1,r,_=>e[n[_]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<c.length&&s[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(s[o],f)}}function mt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=tt("style");return pt(Z(t),e),e.sheet}function pt(t,e){mt(t.head||t,e)}function gt(t,e){if(q){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){q&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Wt(){return H(" ")}function Gt(){return H("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){$t(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function bt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ut(t,e,n){return bt(t,e,n,tt)}function kt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Vt(t){return kt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e){t.value=e==null?"":e}function Zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function te(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Map;let O=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:yt(e),rules:{}};return D.set(t,n),n}function St(t,e,n,i,r,c,s,l=0){const o=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=o){const p=e+(n-e)*c(y);u+=y*100+`%{${s(p,1-p)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${vt(f)}_${l}`,_=Z(t),{stylesheet:d,rules:m}=D.get(_)||Et(_,t);m[a]||(m[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||At())}function At(){F(()=>{O||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}function ee(t,e,n,i){if(!e)return b;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return b;const{delay:c=0,duration:s=300,easing:l=ot,start:o=ut()+c,end:u=o+s,tick:f=b,css:a}=n(t,{from:e,to:r},i);let _=!0,d=!1,m;function w(){a&&(m=St(t,0,1,s,c,l,a)),c||(d=!0)}function y(){a&&Ct(t,m),_=!1}return at(p=>{if(!d&&p>=o&&(d=!0),d&&p>=u&&(f(1,0),y()),!_)return!1;if(d){const v=p-o,E=0+1*l(v/s);f(E,1-E)}return!0}),w(),f(0,1),y}function ne(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Nt(t,r)}}function Nt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let A;function C(t){A=t}function I(){if(!A)throw new Error("Function called outside component initialization");return A}function ie(t){I().$$.on_mount.push(t)}function re(t){I().$$.after_update.push(t)}function se(t,e){return I().$$.context.set(t,e),e}const S=[],J=[],R=[],K=[],nt=Promise.resolve();let z=!1;function it(){z||(z=!0,nt.then(rt))}function oe(){return it(),nt}function L(t){R.push(t)}const T=new Set;let M=0;function rt(){const t=A;do{for(;M<S.length;){const e=S[M];M++,C(e),jt(e.$$)}for(C(null),S.length=0,M=0;J.length;)J.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];T.has(n)||(T.add(n),n())}R.length=0}while(S.length);for(;K.length;)K.pop()();z=!1,T.clear(),C(t)}function jt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const B=new Set;let $;function le(){$={r:0,c:[],p:$}}function ce(){$.r||N($.c),$=$.p}function st(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Mt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),$.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Rt(t,e){Mt(t,1,1,()=>{e.delete(t.key)})}function ue(t,e){t.f(),Rt(t,e)}function ae(t,e,n,i,r,c,s,l,o,u,f,a){let _=t.length,d=c.length,m=_;const w={};for(;m--;)w[t[m].key]=m;const y=[],p=new Map,v=new Map;for(m=d;m--;){const h=a(r,c,m),g=n(h);let x=s.get(g);x?i&&x.p(h,e):(x=u(g,h),x.c()),p.set(g,y[m]=x),g in w&&v.set(g,Math.abs(m-w[g]))}const E=new Set,W=new Set;function P(h){st(h,1),h.m(l,f),s.set(h.key,h),f=h.first,d--}for(;_&&d;){const h=y[d-1],g=t[_-1],x=h.key,j=g.key;h===g?(f=h.first,_--,d--):p.has(j)?!s.has(x)||E.has(x)?P(h):W.has(j)?_--:v.get(x)>v.get(j)?(W.add(x),P(h)):(E.add(j),_--):(o(g,s),_--)}for(;_--;){const h=t[_];p.has(h.key)||o(h,s)}for(;d;)P(y[d-1]);return y}function fe(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||L(()=>{const o=c.map(Q).filter(U);s?s.push(...o):N(o),t.$$.on_mount=[]}),l.forEach(L)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(S.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,c,s,l=[-1]){const o=A;C(t);const u=t.$$={fragment:null,ctx:null,props:c,update:b,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const m=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=m)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](m),f&&Ot(t,a)),_}):[],u.update(),f=!0,N(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ft();const a=wt(e.target);u.fragment&&u.fragment.l(a),a.forEach(xt)}else u.fragment&&u.fragment.c();e.intro&&st(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),_t(),rt()}C(o)}class ye{$destroy(){Dt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as A,_e as B,Dt as C,lt as D,oe as E,Pt as F,zt as G,Lt as H,Tt as I,gt as J,te as K,It as L,U as M,Jt as N,Yt as O,Kt as P,N as Q,ne as R,ye as S,ee as T,Ft as U,ae as V,ue as W,wt as a,Qt as b,Ut as c,xt as d,tt as e,Zt as f,Ht as g,kt as h,me as i,Xt as j,Wt as k,Gt as l,Vt as m,b as n,le as o,Mt as p,ce as q,st as r,qt as s,H as t,se as u,re as v,ie as w,de as x,he as y,Bt as z};
