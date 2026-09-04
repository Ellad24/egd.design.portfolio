/* Forest Canopy — Orange (autumn/sunset). Same harness/technique as
   effect-forest-canopy.js (see that file's header comment) — dappled canopy pattern,
   cursor-following beam, drifting light motes — just the deep/mid/lit trio recoloured
   from green to an autumn palette (dark rust → burnt orange → pale peach). */
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
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
      float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0));
      return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
    float fbm(vec2 p){float s=0.0,a=0.5;for(int i=0;i<3;i++){s+=a*noise(p);p=p*2.0;a*=0.5;}return s;}
    void main(){
      vec2 uv=gl_FragCoord.xy/u_res; uv.y=1.0-uv.y;
      vec2 p=vec2(uv.x*AR,uv.y);
      float t=u_time*0.05;

      vec3 deep=vec3(0.24,0.10,0.02);
      vec3 mid =vec3(0.58,0.24,0.06);
      vec3 lit =vec3(0.98,0.55,0.20);

      vec2 wp=p*2.6;
      vec2 q=vec2(fbm(wp+t),fbm(wp+vec2(3.1,1.7)-t));
      float canopy=fbm(wp+1.4*q);

      vec3 col=mix(deep,mid,smoothstep(0.25,0.65,canopy));
      col=mix(col,lit,smoothstep(0.62,0.88,canopy));

      vec2 mp=vec2(u_mouse.x*AR,u_mouse.y);
      float md=length(p-mp);
      float beam=exp(-md*md*3.2)*0.55;
      col=mix(col,lit,beam);

      for(int i=0;i<3;i++){
        float fi=float(i);
        vec2 cell=vec2(3.0+fi,3.0+fi*1.3);
        vec2 guv=p*cell;
        guv.y+=t*(0.6+fi*0.3);
        vec2 id=floor(guv);
        vec2 f=fract(guv)-0.5;
        float h=hash(id+fi*11.0);
        vec2 off=vec2(hash(id+fi*3.0+1.0),hash(id+fi*7.0+2.0))-0.5;
        float d=length(f-off*0.6);
        float mote=(1.0-smoothstep(0.0,0.08,d))*step(0.85,h);
        col+=mote*0.35*lit;
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
