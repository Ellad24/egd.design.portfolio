/* LIVE SITE BACKGROUND — Meadow Ripple, yellow. A light warm-yellow field with a real
   ripple that spreads out from the cursor (plus two slow ambient ripples so it isn't
   dead flat when idle). This replaced the original navy/white "Whitewash" wash.

   To try a different saved direction: assets/effect-forest-canopy-blue.js is kept as
   the designated backup/next candidate — a dark, moonlit canopy tied to the logo blue,
   verified working at forest-canopy-blue-demo.html. To switch to it, copy that file's
   contents over this one (or `cp assets/effect-forest-canopy-blue.js assets/effect.js`)
   and bump the `?v=` on index.html's <script src="assets/effect.js?v=NN"> tag so the
   browser doesn't serve a cached copy of this file.

   To revert to the original navy/white wash: assets/effect-whitewash-original.js holds
   the exact code this replaced — same copy-and-bump-version process.

   Other saved directions (not wired as a drop-in backup, but present and working as
   their own standalone demo pages): effect-meadow-ripple-green.js, -orange.js,
   effect-forest-canopy-yellow.js, -orange.js, effect-meadow-ripple.js (original green). */
(() => {
    function EGDField(canvas, opts){
    opts=opts||{}; const interactive=!!opts.interactive;
    const gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl');
    if(!gl){ return null; }
    const VERT=`attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.0,1.0);}`;
    const FRAG=`
    precision highp float;
    uniform vec2 u_res; uniform float u_time; uniform vec2 u_mouse;
    #define AR (u_res.x/u_res.y)
    void main(){
      vec3 YELLOW=vec3(0.98,0.80,0.20);
      vec3 WHITE=vec3(1.0,1.0,1.0);
      vec2 uv=gl_FragCoord.xy/u_res; uv.y=1.0-uv.y;
      vec2 p=vec2(uv.x*AR,uv.y);

      vec3 base=mix(YELLOW,WHITE,0.55);

      vec2 mp=vec2(u_mouse.x*AR,u_mouse.y);
      float d=length(p-mp);
      float ripple=(sin(d*26.0-u_time*3.2)*exp(-d*1.5))*0.5+0.5;
      float ringMask=exp(-d*1.0);
      vec3 col=mix(base,WHITE,ripple*ringMask*0.78);

      for(int i=0;i<2;i++){
        float fi=float(i);
        vec2 origin=vec2(0.3+fi*0.5,0.4+fi*0.25)*vec2(AR,1.0);
        float od=length(p-origin);
        float phase=u_time*0.25+fi*3.0;
        float wave=sin(od*10.0-phase*3.0);
        float amp=smoothstep(1.8,0.0,od)*(0.5+0.5*sin(phase));
        col=mix(col,WHITE,max(wave,0.0)*amp*0.22);
      }

      gl_FragColor=vec4(clamp(col,0.0,1.0),1.0);
    }`;
    function sh(t,src){const s=gl.createShader(t);gl.shaderSource(s,src);gl.compileShader(s);
      if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))console.error(gl.getShaderInfoLog(s));return s;}
    const prog=gl.createProgram();
    gl.attachShader(prog,sh(gl.VERTEX_SHADER,VERT));
    gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,FRAG));
    gl.linkProgram(prog); gl.useProgram(prog);
    const buf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buf);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const aPos=gl.getAttribLocation(prog,'a_pos'); gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos,2,gl.FLOAT,false,0,0);
    const U=n=>gl.getUniformLocation(prog,n);
    const u_res=U('u_res'),u_time=U('u_time'),u_mouse=U('u_mouse');
    let W,H,dpr;
    function layout(){
      dpr=Math.min(window.devicePixelRatio||1,1.75);
      W=canvas.clientWidth||window.innerWidth; H=canvas.clientHeight||window.innerHeight;
      canvas.width=Math.floor(W*dpr); canvas.height=Math.floor(H*dpr);
      gl.viewport(0,0,canvas.width,canvas.height);
    }
    let __rt; window.addEventListener('resize',()=>{clearTimeout(__rt);__rt=setTimeout(layout,150);});
    let mx=-10,my=-10;
    function move(cx,cy){ mx=cx/W; my=cy/H; }
    function leave(){ mx=-10; my=-10; }
    const area = opts.activeArea || null;
    function inArea(cx,cy){
      if(!area) return true;
      const b = area.getBoundingClientRect();
      return cx>=b.left && cx<=b.right && cy>=b.top && cy<=b.bottom;
    }
    if(interactive){
      const pt = opts.pointerTarget || canvas;
      pt.addEventListener('mousemove',e=>{
        if(!inArea(e.clientX,e.clientY)) return leave();
        const r=canvas.getBoundingClientRect(); move(e.clientX-r.left,e.clientY-r.top);
      });
      pt.addEventListener('mouseleave',leave);
      pt.addEventListener('touchmove',e=>{
        const t=e.touches[0]; if(!t) return;
        if(!inArea(t.clientX,t.clientY)) return leave();
        const r=canvas.getBoundingClientRect(); move(t.clientX-r.left,t.clientY-r.top);
      },{passive:true});
      pt.addEventListener('touchend',leave);
    }
    const t0=performance.now();
    let raf=null, paused=false;
    function frame(){
      const time=(performance.now()-t0)/1000;
      gl.uniform2f(u_res,canvas.width,canvas.height);
      gl.uniform1f(u_time,time);
      gl.uniform2f(u_mouse,mx,my);
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
      if(!paused) raf=requestAnimationFrame(frame); else raf=null;
    }
    layout();
    raf=requestAnimationFrame(frame);
    return {
      pause(){ paused=true; if(raf){ cancelAnimationFrame(raf); raf=null; } },
      resume(){ if(paused){ paused=false; if(raf==null) raf=requestAnimationFrame(frame); } },
      layout, canvas
    };
    }
    window.EGDField = EGDField;
    const fieldCanvas=document.getElementById('field-canvas');
    const wrap=document.querySelector('.field-wrap');
    if(fieldCanvas){
      const f = EGDField(fieldCanvas, { interactive:true, activeArea:wrap, pointerTarget:document });
      if(f && wrap && 'IntersectionObserver' in window){
        new IntersectionObserver(function(es){
          es.forEach(function(e){ if(e.isIntersecting) f.resume(); else f.pause(); });
        },{threshold:0}).observe(wrap);
      }
    }
  })();
