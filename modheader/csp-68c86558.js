import { z as z$1, a as St, Z as Zi, S as Sv, j as jv, Q as Qi, M as Mf, C as Cv, e as jt, o as ot, F as Fr, N as Nt, g as Ec, V as Vu, K as Ki, h as zc, x as xc, k as dc, W as W$1, l as hr$1, m as ct, n as at, p as f, q as qe$1, r as ur$1, t as Ft, G as G$1, E as Eo, v as sl, w as Kv } from './profile-hook-3f857096.js';
import { U as Ut, Z as Zt } from './storage-writer-ec9fd9e8.js';

var A=qe$1,L=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},x=function(e){return this.__data__.has(e)};function C(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new A;++r<t;)this.add(e[r]);}C.prototype.add=C.prototype.push=L,C.prototype.has=x;var T=C;var k=function(e,r){return e.has(r)},M=T,N=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return !0;return !1},D=k;var J=function(e,r,t,n,a,o){var i=1&t,s=e.length,u=r.length;if(s!=u&&!(i&&u>s))return !1;var f=o.get(e),l=o.get(r);if(f&&l)return f==r&&l==e;var c=-1,p=!0,d=2&t?new M:void 0;for(o.set(e,r),o.set(r,e);++c<s;){var v=e[c],h=r[c];if(n)var y=i?n(h,v,c,r,e,o):n(v,h,c,e,r,o);if(void 0!==y){if(y)continue;p=!1;break}if(d){if(!N(r,(function(e,r){if(!D(d,r)&&(v===e||a(v,e,t,n,o)))return d.push(r)}))){p=!1;break}}else if(v!==h&&!a(v,h,t,n,o)){p=!1;break}}return o.delete(e),o.delete(r),p};var z=at,H=f,q=J,B=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e];})),t},F=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e;})),t},G=z$1?z$1.prototype:void 0,K=G?G.valueOf:void 0;var W=function(e,r,t,n,a,o,i){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return !1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return !(e.byteLength!=r.byteLength||!o(new z(e),new z(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return H(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=B;case"[object Set]":var u=1&n;if(s||(s=F),e.size!=r.size&&!u)return !1;var f=i.get(e);if(f)return f==r;n|=2,i.set(e,r);var l=q(s(e),s(r),n,a,o,i);return i.delete(e),l;case"[object Symbol]":if(K)return K.call(e)==K.call(r)}return !1},Q=hr$1,X=Object.prototype.hasOwnProperty;var Y=ot,Z=J,ee=W,re=function(e,r,t,n,a,o){var i=1&t,s=Q(e),u=s.length;if(u!=Q(r).length&&!i)return !1;for(var f=u;f--;){var l=s[f];if(!(i?l in r:X.call(r,l)))return !1}var c=o.get(e),p=o.get(r);if(c&&p)return c==r&&p==e;var d=!0;o.set(e,r),o.set(r,e);for(var v=i;++f<u;){var h=e[l=s[f]],y=r[l];if(n)var m=i?n(y,h,l,r,e,o):n(h,y,l,e,r,o);if(!(void 0===m?h===y||a(h,y,t,n,o):m)){d=!1;break}v||(v="constructor"==l);}if(d&&!v){var b=e.constructor,g=r.constructor;b==g||!("constructor"in e)||!("constructor"in r)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(d=!1);}return o.delete(e),o.delete(r),d},te=Fr,ne=ct,ae=St.exports,oe=Nt,ie="[object Object]",se=Object.prototype.hasOwnProperty;var ue=function(e,r,t,n,a,o){var i=ne(e),s=ne(r),u=i?"[object Array]":te(e),f=s?"[object Array]":te(r),l=(u="[object Arguments]"==u?ie:u)==ie,c=(f="[object Arguments]"==f?ie:f)==ie,p=u==f;if(p&&ae(e)){if(!ae(r))return !1;i=!0,l=!1;}if(p&&!l)return o||(o=new Y),i||oe(e)?Z(e,r,t,n,a,o):ee(e,r,u,t,n,a,o);if(!(1&t)){var d=l&&se.call(e,"__wrapped__"),v=c&&se.call(r,"__wrapped__");if(d||v){var h=d?e.value():e,y=v?r.value():r;return o||(o=new Y),a(h,y,t,n,o)}}return !!p&&(o||(o=new Y),re(e,r,t,n,a,o))},fe=jt;var le=function e(r,t,n,a,o){return r===t||(null==r||null==t||!fe(r)&&!fe(t)?r!=r&&t!=t:ue(r,t,n,a,e,o))};async function ce(e,r={}){const t=await fetch(`https://modheader.com${e}?product=ModHeader`,{mode:"cors",credentials:"include",redirect:"manual",...r});if(t.ok)return await t.json();const n=new Error("Failed to make the request");throw n.statusCode=t.status,n}function pe(){return ce("/api/u/user-details")}function de({profileId:e}){return ce(`/api/profile/${e}`)}function ve({data:e}){return ce("/api/profile/parse",{method:"POST",body:JSON.stringify({data:e})})}function he({profile:e}){return ce("/api/u/profile",{method:"POST",body:JSON.stringify({profile:e,profileType:"ModHeader"})})}function ye({profileId:e,profile:r,visibility:t,allowedEmails:n}){return ce("/api/u/profile",{method:"PUT",body:JSON.stringify({profileId:e,profile:r,visibility:t,allowedEmails:n,profileType:"ModHeader"})})}const be="chrome";async function we(){try{let e=await Zt();if(!e||!e.ProfileJson)return [];let r=JSON.parse(e.ProfileJson);return Qi(r)||(r=[r]),r}catch(e){return []}}const _e={ACTIVE:"active",PAUSED:"paused"};function je(e){return e&&e.startsWith("https://modheader.com/profile/")}async function Oe(e){try{const r=new URL(e.liveProfileUrl),t=Mf(r.pathname.split("/")),n=await de({profileId:t});if(n&&n.profile)return console.log("Updated profile. Profile URL",e.liveProfileUrl),await Cv(n.profile),{...n.profile,profileId:n.isOwner?n.profileId:e.id,liveProfileIsOwner:n.isOwner,liveProfileUrl:e.liveProfileUrl,liveProfileStatus:_e.ACTIVE,liveProfileLastSyncTimestamp:Date.now()}}catch(e){console.log("Reload live profile failed with error",e);}}async function Pe(e){let r=!1;for(let t=0;t<e.length;++t){const n=e[t];if(n.liveProfileUrl&&n.liveProfileStatus===_e.ACTIVE){const a=await Oe(n);a&&(e[t]=a,r=!0);}}r&&(Sv(e),await Ut({profiles:e}));}var Se=Ec,Ue=Vu,$e=Ki,Ee=Qi,Ie=zc,Re=Zi.exports,Ve=xc,Ae=dc,Le=Object.prototype.hasOwnProperty;var xe,Ce=function(e){if(null==e)return !0;if(Ie(e)&&(Ee(e)||"string"==typeof e||"function"==typeof e.splice||Re(e)||Ae(e)||$e(e)))return !e.length;var r=Ue(e);if("[object Map]"==r||"[object Set]"==r)return !e.size;if(Ve(e))return !Se(e).length;for(var t in e)if(Le.call(e,t))return !1;return !0},Te=new Uint8Array(16);function ke(){if(!xe&&!(xe="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xe(Te)}var Me=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ne(e){return "string"==typeof e&&Me.test(e)}for(var De=[],Je=0;Je<256;++Je)De.push((Je+256).toString(16).substr(1));function ze(e,r,t){var n=(e=e||{}).random||(e.rng||ke)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){t=t||0;for(var a=0;a<16;++a)r[t+a]=n[a];return r}return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(De[e[r+0]]+De[e[r+1]]+De[e[r+2]]+De[e[r+3]]+"-"+De[e[r+4]]+De[e[r+5]]+"-"+De[e[r+6]]+De[e[r+7]]+"-"+De[e[r+8]]+De[e[r+9]]+"-"+De[e[r+10]]+De[e[r+11]]+De[e[r+12]]+De[e[r+13]]+De[e[r+14]]+De[e[r+15]]).toLowerCase();if(!Ne(t))throw TypeError("Stringified UUID is invalid");return t}(n)}var He=Math.floor,qe=Math.random;var Be=f,Fe=ur$1,Ge=Ft,Ke=G$1;var We=/\s/;var Qe=function(e){for(var r=e.length;r--&&We.test(e.charAt(r)););return r},Xe=/^\s+/;var Ye=W$1,Ze=jt;var er=function(e){return "symbol"==typeof e||Ze(e)&&"[object Symbol]"==Ye(e)},rr=function(e){return e?e.slice(0,Qe(e)+1).replace(Xe,""):e},tr=G$1,nr=er,ar=/^[-+]0x[0-9a-f]+$/i,or=/^0b[01]+$/i,ir=/^0o[0-7]+$/i,sr=parseInt;var ur=function(e){if("number"==typeof e)return e;if(nr(e))return NaN;if(tr(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=tr(r)?r+"":r;}if("string"!=typeof e)return 0===e?e:+e;e=rr(e);var t=or.test(e);return t||ir.test(e)?sr(e.slice(2),t?2:8):ar.test(e)?NaN:+e},fr=ur;var lr=function(e,r){return e+He(qe()*(r-e+1))},cr=function(e,r,t){if(!Ke(t))return !1;var n=typeof r;return !!("number"==n?Fe(t)&&Ge(r,t.length):"string"==n&&r in t)&&Be(t[r],e)},pr=function(e){return e?Infinity===(e=fr(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},dr=parseFloat,vr=Math.min,hr=Math.random;var yr=function(e,r,t){if(t&&"boolean"!=typeof t&&cr(e,r,t)&&(r=t=void 0),void 0===t&&("boolean"==typeof r?(t=r,r=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===r?(e=0,r=1):(e=pr(e),void 0===r?(r=e,e=0):r=pr(r)),e>r){var n=e;e=r,r=n;}if(t||e%1||r%1){var a=hr();return vr(e+a*(r-e+dr("1e-"+((a+"").length-1))),r)}return lr(e,r)};function mr({value:e,url:r,oldValue:t}){let n=e.indexOf("{{");if(e&&n>=0){let a=e.indexOf("}}");if(a>n){const o=function({command:e,url:r,oldValue:t}){switch(e){case"uuid":return ze();case"url":return r;case"url_origin":return new URL(r).origin;case"url_hostname":return new URL(r).hostname;case"url_path":return new URL(r).pathname;case"existing_value":return t||"";case"timestamp":return Date.now();case"ip_v4":return `${yr(256)}.${yr(256)}.${yr(256)}.${yr(256)}`;default:return ""}}({command:e.substring(n+2,a),url:r,oldValue:t});return mr({value:`${e.substring(0,n)}${o}${e.substring(a+2)}`,url:r,oldValue:t})}}return e}async function br(e){let r="",t="";const n=await sl();if(n&&!Kv(n.url)){const e=new URL(n.url),{host:a,origin:o}=e;Kv(a)||"null"===a||(r=`.*://${a}/.*`),Kv(o)||"null"===o||(t=o);}return [...e,{enabled:!0,name:r,value:t,comment:""}]}function gr(e,r){return (e=Eo(e)).splice(r,1),e}function wr(e){return jv(e).map((e=>({...e,name:new RegExp(e.name)})))}function _r({urlRedirects:e,url:r}){if(e)for(const t of e){const e=mr({value:t.value,url:r,oldValue:r});r.includes(e)||(r=r.replace(t.name,e));}return r}function jr(e){return Object.entries(e).map((([e,r])=>`${e} ${r}`)).join("; ")}

export { Ce as C, Oe as O, Pe as P, T, _r as _, wr as a, be as b, je as c, de as d, er as e, _e as f, br as g, he as h, gr as i, jr as j, k, le as l, mr as m, pe as p, ur as u, ve as v, we as w, ye as y };
