(() => {
    const LOGO_SRC="";   /* logo art now ships as assets/egd-logo.png and is used in the header, not the shader */
    function EGDField(canvas, opts){
    opts=opts||{}; const hint=opts.hint||null; const useLogo=!!opts.logo; const interactive=!!opts.interactive;
    const gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl');
    if(!gl){ return null; }
    const VERT=`attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.0,1.0);}`;
    const FRAG=`
    precision highp float;
    uniform vec2 u_res; uniform float u_time; uniform vec2 u_mouse;
    uniform float u_charge; uniform vec4 u_logoRect; uniform sampler2D u_logo;
    #define AR (u_res.x/u_res.y)
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
      float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0));
      return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
    float fbm(vec2 p){float s=0.0,a=0.5;for(int i=0;i<3;i++){s+=a*noise(p);p=p*2.0;a*=0.5;}return s;}
    // TWO-TONE: the logo blue, lightened, and white — nothing else. Every stop is a
    // straight mix() along the royal→white axis, so no third hue can creep into the
    // field and the background is literally a tint of the brand mark.
    // The smoothstep stops are unchanged from the old four-colour palette, so the bands
    // flow and warp exactly as before — only the colours differ.
    // Nothing goes below 45% toward white: the page's body copy IS royal blue, so a
    // field that reached full-strength royal would swallow the type it sits behind.
    vec3 pal(float t){
      vec3 royal=vec3(0.137,0.251,0.784);   // #2340c8 — the logo/brand blue
      vec3 white=vec3(1.0,1.0,1.0);
      vec3 deep=mix(royal,white,0.55);      // the strongest blue the field ever reaches (#9CA9E6)
      vec3 mid =mix(royal,white,0.62);
      vec3 soft=mix(royal,white,0.80);
      vec3 pale=mix(royal,white,0.97);      // near-white
      vec3 c=mix(deep,mid,smoothstep(0.0,0.08,t));
      c=mix(c,pale,smoothstep(0.08,0.24,t));
      c=mix(c,soft,smoothstep(0.30,0.42,t));
      c=mix(c,pale,smoothstep(0.46,0.66,t));
      c=mix(c,soft,smoothstep(0.72,0.82,t));
      c=mix(c,pale,smoothstep(0.86,0.94,t));
      c=mix(c,deep,smoothstep(0.96,1.0,t));
      return c;
    }
    void main(){
      vec2 uv=gl_FragCoord.xy/u_res; uv.y=1.0-uv.y;
      vec2 uv2=vec2(uv.x*AR,uv.y);
      vec2 mvec=vec2(u_mouse.x*AR,u_mouse.y);
      vec2 md=uv2-mvec; float infl=exp(-dot(md,md)*14.0);
      vec2 uw=uv2 + vec2(-md.y,md.x)*infl*0.30 + md*infl*0.18*sin(u_time*0.35);
      // broad, soft flowing bands (low frequency, gentle warp)
      vec2 p=uw*1.55;
      float t2=u_time*0.04;
      vec2 q=vec2(fbm(p+t2), fbm(p+vec2(4.4,1.1)-t2));
      vec2 r=vec2(fbm(p+1.2*q+vec2(1.7,9.2)+t2), fbm(p+1.2*q+vec2(8.3,2.8)-t2));
      float f=fbm(p+1.3*r);
      float t=clamp((f-0.30)*2.7,0.0,1.0);
      vec3 blob=pal(t);
      blob=mix(blob, pal(clamp(t+0.18,0.0,1.0)), infl*0.5);

      // full-bleed field: fills the entire canvas edge to edge, no vignette,
      // so the hero and the bubbles section meet with no pale band between them
      float mask=1.0;
      vec3 bg=vec3(1.0,1.0,1.0);        /* was a warm off-white — neutral now, to stay on the navy/white axis */

      // logo reveal: a settled deep-blue pool with the light logo (its true look)
      if(u_charge>0.001 && u_logoRect.z>0.0){
        vec2 lc0=u_logoRect.xy+u_logoRect.zw*0.5;
        vec2 dd=(uv-lc0)/(u_logoRect.zw*0.72);
        float mmask=1.0-smoothstep(0.5,1.15,length(dd));
        blob=mix(blob, vec3(0.137,0.251,0.784), mmask*u_charge*0.94);   /* full-strength logo blue — the light logo needs a deep pool to read against */
        mask=max(mask, mmask*u_charge);   // ensure the badge shows over light bg
        vec2 lv=(uv-u_logoRect.xy)/u_logoRect.zw;
        if(lv.x>=0.0&&lv.x<=1.0&&lv.y>=0.0&&lv.y<=1.0){
          float a=texture2D(u_logo,lv).a;
          if(a>0.01){
            float gy=lv.y;
            vec3 lc=mix(vec3(0.95,0.96,1.0), vec3(0.80,0.82,0.96), pow(gy,0.85));
            blob=mix(blob, lc, a*u_charge);
          }
        }
      }
      vec3 outc=mix(bg, blob, clamp(mask,0.0,1.0));
      gl_FragColor=vec4(outc,1.0);
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
    const u_res=U('u_res'),u_time=U('u_time'),u_mouse=U('u_mouse'),
      u_charge=U('u_charge'),u_logoRect=U('u_logoRect'),u_logo=U('u_logo');
    const tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    let asp=1,logoReady=false;
    if(useLogo){
      const img=new Image();
      img.onload=()=>{asp=img.height/img.width; gl.bindTexture(gl.TEXTURE_2D,tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);
        gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
        logoReady=true; layout();};
      img.src=LOGO_SRC;
    }
    let W,H,dpr,rectN={x:0,y:0,w:0,h:0};
    // raise the logo above centre. CSS treats 1cm as 96/2.54 px, so 5cm ≈ 189px.
    // the hover hotspot is derived from rectN, so it moves with the logo.
    const LOGO_LIFT = (opts.liftCm || 0) * (96/2.54);
    function layout(){
      dpr=Math.min(window.devicePixelRatio||1,1.75);
      W=canvas.clientWidth||window.innerWidth; H=canvas.clientHeight||window.innerHeight;
      canvas.width=Math.floor(W*dpr); canvas.height=Math.floor(H*dpr);
      gl.viewport(0,0,canvas.width,canvas.height);
      if(!logoReady) return;
      let w=Math.min(W*0.40,430,(H*0.5)/asp), h=w*asp;
      let top=(H-h)/2 - LOGO_LIFT;
      top=Math.max(12, Math.min(top, H-h-12));   // keep it on-screen on short viewports
      rectN={x:(W-w)/2/W, y:top/H, w:w/W, h:h/H};
    }
    let __rt; window.addEventListener('resize',()=>{clearTimeout(__rt);__rt=setTimeout(layout,150);});
    let mx=-10,my=-10,inside=false,charge=0;
    function move(cx,cy){ mx=cx/W; my=cy/H; inside=true; if(hint) hint.style.opacity=0; }
    function leave(){ inside=false; mx=-10; my=-10; }
    // the interaction is only "discoverable" inside opts.activeArea (e.g. the hero). Outside it
    // the field ignores the pointer entirely, so the logo can't be found further down the page.
    const area = opts.activeArea || null;
    function inArea(cx,cy){
      if(!area) return true;
      const b = area.getBoundingClientRect();
      return cx>=b.left && cx<=b.right && cy>=b.top && cy<=b.bottom;
    }
    if(interactive){
      // the field canvas sits behind the page with pointer-events:none, so listen on a target
      // that actually receives the mouse. passive touch — never block scrolling.
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
      const now=performance.now(); const time=(now-t0)/1000;
      let target=0;
      if(inside && rectN.w>0){
        const cx=rectN.x+rectN.w/2, cy=rectN.y+rectN.h/2;
        const dx=(mx-cx)/(rectN.w*0.62), dy=(my-cy)/(rectN.h*0.62);
        const d=Math.sqrt(dx*dx+dy*dy);
        target=Math.max(0,Math.min(1,(1.15-d)/0.75));
      }
      charge+=(target-charge)*(target>charge?0.07:0.03);
      gl.uniform2f(u_res,canvas.width,canvas.height);
      gl.uniform1f(u_time,time);
      gl.uniform2f(u_mouse,mx,my);
      gl.uniform1f(u_charge,charge);
      gl.uniform4f(u_logoRect,rectN.x,rectN.y,rectN.w,rectN.h);
      gl.uniform1i(u_logo,0);
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
    // one field behind the hero + explore sections
    const fieldCanvas=document.getElementById('field-canvas');
    if(fieldCanvas){
      // the logo now lives in the header as a real element, and the only mouse interaction is
      // its blue surround shimmering on hover — so the field is purely ambient here.
      const f = EGDField(fieldCanvas, { logo:false, interactive:false });
      const wrap = document.querySelector('.field-wrap');
      if(f && wrap && 'IntersectionObserver' in window){
        new IntersectionObserver(function(es){
          es.forEach(function(e){ if(e.isIntersecting) f.resume(); else f.pause(); });
        },{threshold:0}).observe(wrap);
      }
    }
  })();
