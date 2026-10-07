import{c as i,r as a}from"./index-B0oVeOIW.js";/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],h=i("calendar",u);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],v=i("tag",d);function f(n,t={month:"short",day:"numeric",year:"numeric"},e="Recently published"){if(!n)return e;try{const r=new Date(n);return isNaN(r.getTime())?e:r.toLocaleDateString("en-AU",t)}catch{return e}}function m(n=[]){const t=a.useRef(null);a.useEffect(()=>{t.current&&t.current.disconnect();const e=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting&&(c.target.classList.add("revealed"),e.unobserve(c.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});t.current=e;const r=()=>{document.querySelectorAll(".reveal:not(.revealed)").forEach(o=>{e.observe(o)})};requestAnimationFrame(()=>{r()});const s=new MutationObserver(()=>{r()});return s.observe(document.body,{childList:!0,subtree:!0}),()=>{e.disconnect(),s.disconnect()}},n)}export{h as C,v as T,f,m as u};
