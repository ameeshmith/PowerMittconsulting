import{j as a}from"./index-CgTHyq42.js";import{r as c}from"./vendor-react-DJPh7Qq1.js";import{W as F,S as H,O as P,a as j,V as S,c as D,M as A,b as L}from"./vendor-three-DWaYjwJ6.js";function V({className:C=""}){const l=c.useRef(null),u=c.useRef(null);return c.useEffect(()=>{const m=u.current,e=l.current;if(!m||!e)return;const i=new F({canvas:m,alpha:!0,antialias:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35));const v=e.clientWidth||window.innerWidth,d=e.clientHeight||window.innerHeight;i.setSize(v,d,!1);const x=new H,E=new P(-1,1,1,-1,0,1),t={u_time:{value:0},u_resolution:{value:new S(v,d)},u_mouse:{value:new S(.5,.5)}},W=`
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
      vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
      vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      float fbm(vec2 p){
        float v = 0.0; float a = 0.55;
        for(int i=0;i<4;i++){ v += a*snoise(p); p *= 2.05; a *= 0.5; }
        return v;
      }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv;
        p.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.05;
        vec2 drift = (u_mouse - 0.5) * 0.14;

        // Warp coordinates for organic fluid motion
        vec2 st = p * 0.85 + drift;
        st += vec2(fbm(st + t), fbm(st - t)) * 0.35;

        // Deep midnight zinc/navy base
        vec3 col = vec3(0.004, 0.005, 0.012);

        // Main nebula mass, weighted to the right / upper-right
        vec2 c1 = vec2(u_resolution.x / u_resolution.y * 0.72, 0.85) + drift;
        float d1 = length(p - c1);
        float n1 = fbm(st * 1.4 + t * 2.0);
        float mass = smoothstep(1.15, 0.05, d1 + n1 * 0.32);

        // Vertical sweeping tongue of light (softer, pushed towards right)
        float tongue = smoothstep(0.55, 0.02, abs(p.x - (u_resolution.x/u_resolution.y * 0.68) - n1 * 0.22)) * smoothstep(1.2, 0.1, abs(uv.y - 0.55));

        // Secondary far-right glow
        vec2 c2 = vec2(u_resolution.x / u_resolution.y * 1.12, 0.5);
        float d2 = length(p - c2);
        float mass2 = smoothstep(0.9, 0.0, d2 + fbm(st * 1.1 - t) * 0.25);

        // Deep Sustainable Energy & Emerald Palette (rich organic energy glow)
        vec3 deepForest = vec3(0.008, 0.045, 0.030); // Deep midnight viridian
        vec3 emerald = vec3(0.025, 0.28, 0.16);     // Deep emerald energy
        vec3 electricMint = vec3(0.08, 0.52, 0.34);  // Controlled luminous aurora/mint green accent

        col = mix(col, deepForest, clamp(mass * 0.85 + mass2 * 0.65, 0.0, 1.0));
        col = mix(col, emerald, clamp(mass * mass * 0.95 + mass2 * 0.45, 0.0, 1.0));
        col += electricMint * tongue * mass * 0.45;

        // Subtle breathing pulse
        float pulse = 0.95 + 0.05 * sin(u_time * 0.4);
        col *= pulse;

        // Spherical atmospheric vignette
        float vig = smoothstep(1.6, 0.35, length(uv - vec2(0.45, 0.5)));
        col *= mix(0.5, 1.0, vig);

        // Text Safe Zone: Keep center-left dark so both headline and blue serif accent pop with high contrast
        float centerDist = length((uv - vec2(0.48, 0.52)) * vec2(1.1, 1.6));
        float textSafeZone = smoothstep(0.12, 0.55, centerDist);
        col *= mix(0.4, 1.0, textSafeZone);
        col *= mix(0.35, 1.0, smoothstep(0.0, 0.65, uv.x));

        // Balanced overall brightness (softer background atmosphere)
        col *= 0.72;

        gl_FragColor = vec4(col, 1.0);
      }
    `,f=new j({uniforms:t,vertexShader:"void main(){ gl_Position = vec4(position, 1.0); }",fragmentShader:W,depthWrite:!1,depthTest:!1}),h=new D(2,2),R=new A(h,f);x.add(R);const s={x:.5,y:.5},p=n=>{s.x=n.clientX/window.innerWidth,s.y=1-n.clientY/window.innerHeight};window.addEventListener("pointermove",p,{passive:!0});const g=()=>{if(!e||!i)return;const n=e.clientWidth||window.innerWidth,z=e.clientHeight||window.innerHeight;i.setSize(n,z,!1),t.u_resolution.value.set(n,z)};window.addEventListener("resize",g,{passive:!0});const M=new L;let o=null,r=!0;const w=()=>{if(!r){o=null;return}o=requestAnimationFrame(w),t.u_time.value=M.getElapsedTime(),t.u_mouse.value.x+=(s.x-t.u_mouse.value.x)*.035,t.u_mouse.value.y+=(s.y-t.u_mouse.value.y)*.035,i.render(x,E)},y=()=>{o===null&&r&&(o=requestAnimationFrame(w))},b=()=>{o!==null&&(cancelAnimationFrame(o),o=null)},_=new IntersectionObserver(([n])=>{r=n.isIntersecting,r?y():b()},{threshold:.02});return _.observe(e),y(),()=>{_.disconnect(),b(),window.removeEventListener("pointermove",p),window.removeEventListener("resize",g),h.dispose(),f.dispose(),i.dispose()}},[]),a.jsxs("div",{ref:l,className:`nebula-canvas-container ${C}`,"aria-hidden":"true",children:[a.jsx("canvas",{ref:u,className:"nebula-canvas"}),a.jsx("div",{className:"nebula-grain-overlay"}),a.jsx("div",{className:"nebula-vignette-overlay"})]})}export{V as default};
