const x=["All","Power Systems","Energy Transition","Mining & Resources","Owner's Engineering"],v=[];function T(e,r="/assets/images/power-systems-bg.jpg"){if(typeof e!="string")return r;const t=e.trim();return t?t.startsWith("/")||t.startsWith("./")?t.includes("../")?r:t:/^https?:\/\//i.test(t)?t:r:r}function E(e){return typeof e!="string"?"":e.toLowerCase().trim().replace(/[^a-z0-9_-]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").slice(0,120)}function u(e,r=1e3){return typeof e!="string"?"":e.trim().slice(0,r)}function C(e){if(!e||typeof e!="object"||Array.isArray(e)||"__proto__"in e||"constructor"in e||"prototype"in e)return null;const r=u(e.title,300);if(!r)return null;const t=E(e.slug||e.id||r);if(!t)return null;const i=Array.isArray(e.tags)?e.tags.map(g=>u(String(g),50)).filter(Boolean).slice(0,20):[],n=Array.isArray(e.keyTakeaways)?e.keyTakeaways.map(g=>u(String(g),300)).filter(Boolean).slice(0,10):[],o=e.author&&typeof e.author=="object"&&!Array.isArray(e.author)?{name:u(e.author.name||"Dinesh Mithanthaya",100),role:u(e.author.role||"Principal Power Engineer",100),avatar:T(e.author.avatar,"/assets/images/team/dinesh-mithanthaya.webp"),bio:u(e.author.bio||"",1e3)}:{name:"Dinesh Mithanthaya",role:"Principal Power Engineer",avatar:"/assets/images/team/dinesh-mithanthaya.webp",bio:"Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia."};return{id:t,slug:t,title:r,subtitle:u(e.subtitle,500),category:u(e.category||"Power Systems",100),readTime:u(e.readTime||"5 min read",50),coverImage:T(e.coverImage,"/assets/images/power-systems-bg.jpg"),excerpt:u(e.excerpt,1e3),tags:i.length>0?i:["Power Systems"],keyTakeaways:n,content:typeof e.content=="string"?e.content.slice(0,25e4):"",publishedAt:u(e.publishedAt||new Date().toISOString().split("T")[0],30),author:o}}function I(){return!1}const p="powermitt_custom_articles",h="powermitt_deleted_articles";function A(){try{const e=localStorage.getItem(p);return e?JSON.parse(e):[]}catch{return[]}}function w(){try{const e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{return[]}}async function O(e,r={isNew:!1}){const t=A(),i=w(),n=await S();if(r.isNew){const a=n.find(y=>y.slug===e.slug||y.id===e.slug);if(a)throw new Error(`An article with the URL slug "${e.slug}" already exists ("${a.title}"). Please choose a unique title to prevent overwriting existing content.`)}const o=v.find(a=>a.slug===e.slug||a.id===e.id),l=t.find(a=>a.slug===e.slug||a.id===e.id)||o,m=e.publishedAt||(l==null?void 0:l.publishedAt)||new Date().toISOString().split("T")[0],f=e.author||(l==null?void 0:l.author)||{name:"Dinesh Mithanthaya",role:"Principal Power Engineer",avatar:"/assets/images/team/dinesh-mithanthaya.webp",bio:"Over 20 years of specialist experience in electrical power systems, grid connection studies, and heavy industrial infrastructure across Australia."},s=C({...e,publishedAt:m,author:f});if(!s)throw new Error("Article data failed security validation: missing required title or slug.");const c=i.filter(a=>a!==s.slug);localStorage.setItem(h,JSON.stringify(c));const d=t.findIndex(a=>a.slug===s.slug||a.id===s.id);return d>=0?t[d]=s:t.unshift(s),localStorage.setItem(p,JSON.stringify(t)),s}async function b(e){if(!E(e))return!1;const i=A().filter(o=>o.slug!==e&&o.id!==e);localStorage.setItem(p,JSON.stringify(i));const n=w();return n.includes(e)||(n.push(e),localStorage.setItem(h,JSON.stringify(n))),!0}async function S(){const e=A(),r=w(),t=new Map;return e.forEach(i=>{r.includes(i.slug)||t.set(i.slug,i)}),v.forEach(i=>{!t.has(i.slug)&&!r.includes(i.slug)&&t.set(i.slug,i)}),Array.from(t.values()).filter(i=>!r.includes(i.slug)).sort((i,n)=>new Date(n.publishedAt||0)-new Date(i.publishedAt||0))}async function P(e){return(await S()).find(t=>t.slug===e||t.id===e)||null}async function J(e,r=2,t="",i=[]){const n=await S(),o=n.find(s=>s.slug===e||s.id===e),g=(t||(o==null?void 0:o.category)||"").toLowerCase().trim(),l=(Array.isArray(i)&&i.length>0?i:(o==null?void 0:o.tags)||[]).map(s=>String(s).toLowerCase().trim()).filter(Boolean),f=n.filter(s=>s.slug!==e&&s.id!==e).map(s=>{let c=0;const d=(s.category||"").toLowerCase().trim();if(g&&d&&d===g&&(c+=3),Array.isArray(s.tags)&&l.length>0){const a=s.tags.map(y=>String(y).toLowerCase().trim());for(const y of l)a.includes(y)&&(c+=1)}return{article:s,score:c}});return f.sort((s,c)=>c.score-s.score),f.slice(0,r).map(s=>s.article)}async function M(){const e=await S();return`/**
 * PowerMitt Consulting — Engineering Insights & Technical Articles
 * Written & curated by Dinesh Mithanthaya, Principal Power Engineer.
 * Auto-synced from Author Portal for production Git deployment.
 */

export const categories = [
  'All',
  'Power Systems',
  'Energy Transition',
  'Mining & Resources',
  "Owner's Engineering"
];

export const articles = ${JSON.stringify(e,null,2).replace(/</g,"\\u003c").replace(/>/g,"\\u003e")};

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(currentSlug, limit = 2, category = '', tags = []) {
  const current = articles.find(a => a.slug === currentSlug || a.id === currentSlug);
  const targetCategory = (category || current?.category || '').toLowerCase().trim();
  const targetTags = (Array.isArray(tags) && tags.length > 0 ? tags : (current?.tags || []))
    .map(t => String(t).toLowerCase().trim())
    .filter(Boolean);

  const candidates = articles.filter(a => a.slug !== currentSlug && a.id !== currentSlug);
  const scored = candidates.map(article => {
    let score = 0;
    const artCat = (article.category || '').toLowerCase().trim();
    if (targetCategory && artCat && artCat === targetCategory) {
      score += 3;
    }
    if (Array.isArray(article.tags) && targetTags.length > 0) {
      const artTags = article.tags.map(t => String(t).toLowerCase().trim());
      for (const t of targetTags) {
        if (artTags.includes(t)) {
          score += 1;
        }
      }
    }
    return { article, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(item => item.article);
}
`}function N(){const e=A(),r=w();return{version:1,app:"PowerMitt Consulting",exportedAt:new Date().toISOString(),customArticles:e,deletedArticles:r}}function L(e,r="merge"){if(!e||typeof e!="object")throw new Error("Invalid backup file: content is not a valid JSON object.");const t=Array.isArray(e.customArticles)?e.customArticles:Array.isArray(e)?e:[];if(t.length>150)throw new Error("Backup payload exceeds maximum limit of 150 articles.");const i=Array.isArray(e.deletedArticles)?e.deletedArticles:[],n=t.map(C).filter(Boolean),o=i.map(E).filter(Boolean).slice(0,200);if(r==="replace")return localStorage.setItem(p,JSON.stringify(n)),localStorage.setItem(h,JSON.stringify(o)),{count:n.length};const g=A(),l=w(),m=new Map;g.forEach(c=>{const d=C(c);d&&m.set(d.slug,d)}),n.forEach(c=>m.set(c.slug,c));const f=Array.from(m.values()),s=Array.from(new Set([...l,...o]));return localStorage.setItem(p,JSON.stringify(f)),localStorage.setItem(h,JSON.stringify(s)),{count:f.length}}export{P as a,J as b,x as c,b as d,M as e,N as f,S as g,L as h,I as i,O as s};
