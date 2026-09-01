import{c as a,r as s}from"./index-CmV5TIH0.js";/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],v=a("calendar",l);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],h=a("tag",d);function p(i=[]){const t=s.useRef(null);s.useEffect(()=>{t.current&&t.current.disconnect();const e=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),e.unobserve(o.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});t.current=e;const c=()=>{document.querySelectorAll(".reveal:not(.revealed)").forEach(r=>{e.observe(r)})};requestAnimationFrame(()=>{c()});const n=new MutationObserver(()=>{c()});return n.observe(document.body,{childList:!0,subtree:!0}),()=>{e.disconnect(),n.disconnect()}},i)}export{v as C,h as T,p as u};
