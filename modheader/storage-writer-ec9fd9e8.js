function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o);}function c(t){return "function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let u;function i(t,n){return u||(u=document.createElement("a")),u.href=n,t===u.href}function l(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function f(t){let n;return l(t,(t=>n=t))(),n}function d(t,n,e){t.$$.on_destroy.push(l(n,e));}function h(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function p(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function g(t,n,e,o,r,s){if(r){const c=m(n,e,o,s);t.p(c,r);}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return -1}function y(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function b(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function w(t){const n={};for(const e in t)n[e]=!0;return n}function v(t,n,e){return t.set(e),n}function E(n){return n&&c(n.destroy)?n.destroy:t}const _="undefined"!=typeof window;let k=_?()=>window.performance.now():()=>Date.now(),x=_?t=>requestAnimationFrame(t):t;const P=new Set;function j(t){P.forEach((n=>{n.c(t)||(P.delete(n),n.f());})),0!==P.size&&x(j);}function C(t,n){t.appendChild(n);}function A(t,n,e){const o=M(t);if(!o.getElementById(n)){const t=T("style");t.id=n,t.textContent=e,S(o,t);}}function M(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function O(t){const n=T("style");return S(M(t),n),n.sheet}function S(t,n){C(t.head||t,n);}function N(t,n,e){t.insertBefore(n,e||null);}function R(t){t.parentNode.removeChild(t);}function D(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n);}function T(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function q(){return z(" ")}function B(){return z("")}function F(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function I(t){return function(n){return n.preventDefault(),t.call(this,n)}}function G(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function H(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e);}function J(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:H(t,o,n[o]);}function K(t,n){n=""+n,t.wholeText!==n&&(t.data=n);}function Q(t,n){t.value=null==n?"":n;}function U(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"");}function V(t,n,e){t.classList[e?"add":"remove"](n);}function W(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}const X=new Map;let Y,Z=0;function tt(t,n,e,o,r,s,c,a=0){const u=16.666/o;let i="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*s(t);i+=100*t+`%{${c(o,1-o)}}\n`;}const l=i+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${a}`,d=M(t),{stylesheet:h,rules:m}=X.get(d)||function(t,n){const e={stylesheet:O(n),rules:{}};return X.set(t,e),e}(d,t);m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${o}ms linear ${r}ms 1 both`,Z+=1,f}function nt(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),Z-=r,Z||x((()=>{Z||(X.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={};})),X.clear());})));}function et(t){Y=t;}function ot(){if(!Y)throw new Error("Function called outside component initialization");return Y}function rt(t){ot().$$.on_mount.push(t);}function st(t){ot().$$.on_destroy.push(t);}function ct(){const t=ot();return (n,e,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=W(n,e,{cancelable:o});return r.slice().forEach((n=>{n.call(t,s);})),!s.defaultPrevented}return !0}}function at(t,n){return ot().$$.context.set(t,n),n}function ut(t){return ot().$$.context.get(t)}function it(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)));}const lt=[],ft=[],dt=[],ht=[],mt=Promise.resolve();let pt=!1;function gt(){pt||(pt=!0,mt.then(_t));}function $t(){return gt(),mt}function yt(t){dt.push(t);}function bt(t){ht.push(t);}const wt=new Set;let vt,Et=0;function _t(){const t=Y;do{for(;Et<lt.length;){const t=lt[Et];Et++,et(t),kt(t.$$);}for(et(null),lt.length=0,Et=0;ft.length;)ft.pop()();for(let t=0;t<dt.length;t+=1){const n=dt[t];wt.has(n)||(wt.add(n),n());}dt.length=0;}while(lt.length);for(;ht.length;)ht.pop()();pt=!1,wt.clear(),et(t);}function kt(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(yt);}}function xt(t,n,e){t.dispatchEvent(W(`${n?"intro":"outro"}${e}`));}const Pt=new Set;let jt;function Ct(){jt={r:0,c:[],p:jt};}function At(){jt.r||s(jt.c),jt=jt.p;}function Mt(t,n){t&&t.i&&(Pt.delete(t),t.i(n));}function Ot(t,n,e,o){if(t&&t.o){if(Pt.has(t))return;Pt.add(t),jt.c.push((()=>{Pt.delete(t),o&&(e&&t.d(1),o());})),t.o(n);}else o&&o();}const St={duration:0};function Nt(e,o,r,a){let u=o(e,r),i=a?0:1,l=null,f=null,d=null;function h(){d&&nt(e,d);}function m(t,n){const e=t.b-i;return n*=Math.abs(e),{a:i,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function p(o){const{delay:r=0,duration:c=300,easing:a=n,tick:p=t,css:g}=u||St,$={start:k()+r,b:o};o||($.group=jt,jt.r+=1),l||f?f=$:(g&&(h(),d=tt(e,i,o,c,r,a,g)),o&&p(0,1),l=m($,c),yt((()=>xt(e,o,"start"))),function(t){0===P.size&&x(j),new Promise((e=>{P.add({c:t,f:e});}));}((t=>{if(f&&t>f.start&&(l=m(f,c),f=null,xt(e,l.b,"start"),g&&(h(),d=tt(e,i,l.b,l.duration,0,a,u.css))),l)if(t>=l.end)p(i=l.b,1-i),xt(e,l.b,"end"),f||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;i=l.a+l.d*a(n/l.duration),p(i,1-i);}return !(!l&&!f)})));}return {run(t){c(u)?(vt||(vt=Promise.resolve(),vt.then((()=>{vt=null;}))),vt).then((()=>{u=u(),p(t);})):p(t);},end(){h(),l=f=null;}}}function Rt(t,n){const e=n.token={};function o(t,o,r,s){if(n.token!==e)return;n.resolved=s;let c=n.ctx;void 0!==r&&(c=c.slice(),c[r]=s);const a=t&&(n.current=t)(c);let u=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(Ct(),Ot(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null);})),At());})):n.block.d(1),a.c(),Mt(a,1),a.m(n.mount(),n.anchor),u=!0),n.block=a,n.blocks&&(n.blocks[o]=a),u&&_t();}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=ot();if(t.then((t=>{et(e),o(n.then,1,n.value,t),et(null);}),(t=>{if(et(e),o(n.catch,2,n.error,t),et(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else {if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t;}var r;}function Dt(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e);}const Tt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Lt(t,n){Ot(t,1,1,(()=>{n.delete(t.key);}));}function zt(t,n,e,o,r,s,c,a,u,i,l,f){let d=t.length,h=s.length,m=d;const p={};for(;m--;)p[t[m].key]=m;const g=[],$=new Map,y=new Map;for(m=h;m--;){const t=f(r,s,m),a=e(t);let u=c.get(a);u?o&&u.p(t,n):(u=i(a,t),u.c()),$.set(a,g[m]=u),a in p&&y.set(a,Math.abs(m-p[a]));}const b=new Set,w=new Set;function v(t){Mt(t,1),t.m(a,l),c.set(t.key,t),l=t.first,h--;}for(;d&&h;){const n=g[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,h--):$.has(r)?!c.has(o)||b.has(o)?v(n):w.has(r)?d--:y.get(o)>y.get(r)?(w.add(o),v(n)):(b.add(r),d--):(u(e,c),d--);}for(;d--;){const n=t[d];$.has(n.key)||u(n,c);}for(;h;)v(g[h-1]);return g}function qt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=n[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[s]=a;}else for(const t in c)r[t]=1;}for(const t in o)t in e||(e[t]=void 0);return e}function Bt(t){return "object"==typeof t&&null!==t?t:{}}function Ft(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]));}function It(t){t&&t.c();}function Gt(t,n,e,r){const{fragment:a,on_mount:u,on_destroy:i,after_update:l}=t.$$;a&&a.m(n,e),r||yt((()=>{const n=u.map(o).filter(c);i?i.push(...n):s(n),t.$$.on_mount=[];})),l.forEach(yt);}function Ht(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[]);}function Jt(n,e,o,c,a,u,i,l=[-1]){const f=Y;et(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:r(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};i&&i(d.root);let h=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(lt.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31;}(n,t)),e})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(R);}else d.fragment&&d.fragment.c();e.intro&&Mt(n.$$.fragment),Gt(n,e.target,e.anchor,e.customElement),_t();}et(f);}class Kt{$destroy(){Ht(this,1),this.$destroy=t;}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1);}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1);}}async function Qt(t){return new Promise(((n,e)=>{chrome.storage.local.get(t,(t=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n(t);}));}))}async function Ut(t){return new Promise(((n,e)=>{chrome.storage.local.set(t,(()=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n();}));}))}async function Vt(t){return new Promise(((n,e)=>{chrome.storage.local.remove(t,(()=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n();}));}))}async function Wt(t){return new Promise(((n,e)=>{chrome.storage.sync.get(t,(t=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n(t);}));}))}async function Xt(t){return new Promise(((n,e)=>{chrome.storage.sync.set(t,(()=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n();}));}))}async function Yt(t){return new Promise(((n,e)=>{chrome.storage.sync.remove(t,(()=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n();}));}))}async function Zt(t){return new Promise(((n,e)=>{chrome.storage.managed.get(t,(t=>{chrome.runtime.lastError?e(chrome.runtime.lastError):n(t);}));}))}function tn(t){return chrome.storage.onChanged.addListener(((n,e)=>{if("local"===e)return t(n)}))}async function nn(t,n){await Ut({profiles:t,selectedProfile:n});}async function en(t){await Ut({profiles:t});}async function on(t){await Ut({selectedProfile:t});}async function rn(t){t?await Ut({isPaused:!0}):await Vt("isPaused");}

export { $, A, B, g as C, p as D, E, F, Gt as G, Ht as H, It as I, Jt as J, Kt as K, it as L, Mt as M, N, Ot as O, Ct as P, Qt as Q, R, Rt as S, T, Ut as U, Vt as V, Wt as W, Xt as X, Yt as Y, Zt as Z, Dt as _, t as a, d as a0, q as a1, H as a2, C as a3, V as a4, rt as a5, Ft as a6, bt as a7, z as a8, K as a9, D as aa, yt as ab, Nt as ac, U as ad, Q as ae, ct as af, n as ag, L as ah, w as ai, $t as aj, Tt as ak, v as al, i as am, zt as an, Lt as ao, a as b, c, Bt as d, en as e, f, At as g, b as h, ot as i, I as j, G as k, l, at as m, nn as n, on as o, st as p, qt as q, rn as r, s, tn as t, ut as u, e as v, ft as w, h as x, y, J as z };
