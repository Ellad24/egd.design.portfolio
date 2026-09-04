/* =========================================================
   EGD — interaction layer + content
   -----------------------------------------------------------
   ▸ To swap in real projects: edit the PROJECTS array below.
     Each entry drives the Work grid, the home "featured" strip,
     and its own case-study panel. Replace the `poster` with a
     real photo by giving the project an `image:"assets/…​.jpg"`
     (the code will use it automatically — see makePoster()).
   ========================================================= */

const PROJECTS = [
  {
    id: "stride",
    title: "Stride",
    cat: "medical",                       // medical | wood | graphic
    category: "Medical & Accessibility",
    tag: "Wearable travel aid",
    year: "2025",
    role: "Product design · User research · Prototyping",
    duration: "3 months",                 // shown instead of Year/Role in the modal
    client: "University of Brighton — proof of concept project",
    image: "assets/wall/01.jpg",          // real prototype photo
    real: true,                           // real project — hides the "sample" note
    subtitle: "A wearable obstacle-detection sensor that helps visually impaired people travel independently.",
    blurb: "A lightweight, clothing-worn sensor that spots high and low obstacles with a camera and depth tracking, then speaks clear warnings — ‘upcoming bin to the left’ — through any Bluetooth earpiece.",
    challenge: "Only a small fraction of visually impaired people use a guide cane — it reads the ground below the waist, snags and breaks in crowds, and carries a stigma. Guide dogs avoid obstacles rather than find them, and are scarce and costly. So most people lean on a friend or family member to get around, and many need help for every single journey.",
    approach: "Grounded in RNIB data and first-hand user surveys, five concepts were explored — from lidar toe-clips to a body-worn camera sensor — and scored against the needs that actually mattered: comfort, weight, repairability and discretion. The chosen sensor detects both low and high obstacles at a user-set 5, 10 or 15-foot range and fixes to any garment with a damage-free magnet mount. A working prototype proves the pipeline end to end — camera capture at 30fps, on-device object detection, depth estimation, and natural spoken alerts.",
    outcome: "A roughly 40g device that reads as everyday-wearable, not medical equipment. It is modular and repairable — a five-year battery that simply swaps out — weather-sealed to IP64, wirelessly charged through its recyclable ABS shell, and customisable with colour and sticker options so it can disappear into an outfit or stand out by choice. The aim throughout: give people back the confidence to travel spontaneously, and alone.",
    tags: ["Accessibility", "Human factors", "Wearable design", "User research (RNIB)", "Computer vision", "Modular / repairable", "IP-rated enclosure", "Prototyping"],
    // pulled from her Stride report (design pages only); click any to enlarge
    gallery: [
      // product photos (studio + in use); the two customised finishes shown large (feature = full-width)
      { src: "assets/stride/prod-white.jpg", cap: "Stride in white, finished with a custom vinyl sticker", feature: true },
      { src: "assets/stride/prod-sticker.jpg", cap: "Customised with the user’s own stickers", feature: true },
      { src: "assets/stride/prod-blue.jpg", cap: "The sensor and its two-part magnetic clothing clip" },
      { src: "assets/stride/prod-hand.jpg", cap: "Small enough to sit in the palm of the hand" },
      { src: "assets/stride/page-21.jpg", cap: "Concept generation — the sensor explored on shoes, legs and clothing" },
      { src: "assets/stride/page-23.jpg", cap: "Exploring form, size and texture" },
      { src: "assets/stride/page-11.jpg", cap: "Casing — technical drawings" },
      { src: "assets/stride/page-14.jpg", cap: "Internal components, packed into a ~40g shell" },
      { src: "assets/stride/page-15.jpg", cap: "Sealing the case to IP64 with a laser-cut gasket" },
      { src: "assets/stride/page-08.jpg", cap: "Camera lens, distance-setting button and attachment part B" },
      { src: "assets/stride/page-07.jpg", cap: "Clothing attachment part A and the power button" },
      { src: "assets/stride/page-26.jpg", cap: "Prototype tested on different clothing and in the rain" },
      { src: "assets/stride/page-27.jpg", cap: "Worn discreetly on everyday clothing" },
      { src: "assets/stride/page-28.jpg", cap: "Customisation — colour and sticker options" },
      { src: "assets/stride/proto-person.jpg", cap: "Working prototype — a person and chair, flagged with distance and direction" },
      { src: "assets/stride/proto-room.jpg", cap: "Working prototype — objects identified across a room" }
    ]
  },
  {
    id: "grasp",
    title: "Grasp",
    cat: "medical",                       // medical | wood | graphic
    category: "Medical & Accessibility",
    tag: "Adaptive cutlery",
    year: "2024",
    role: "Product design · Ergonomics · Prototyping",
    client: "Independent / research",
    subtitle: "A weighted, modular cutlery system for people living with reduced grip and tremor.",
    blurb: "A weighted, modular cutlery set that restores independence at the dinner table for people with arthritis and limited hand mobility.",
    challenge: "Off-the-shelf adaptive cutlery is clinical, one-size-fits-all, and something people are embarrassed to bring to a restaurant. The brief was to design an eating aid people would actually be proud to own.",
    approach: "Working from interviews with occupational therapists and users, the handles were shaped around a neutral wrist position and cast in three interchangeable weights. Silicone grip zones and a low centre of gravity counter tremor without looking medical.",
    outcome: "A five-piece system that reads as considered homeware, not equipment. The modular collar lets a single handle host any utensil head, cutting cost and clutter for users who need several.",
    tags: ["Human factors", "Silicone overmould", "OT interviews", "CMF", "Rapid prototyping"]
  },
  {
    id: "wayfind",
    title: "Clearway",
    cat: "medical",
    category: "Medical & Accessibility",
    tag: "Inclusive wayfinding",
    year: "2023",
    role: "Environmental graphics · Systems design",
    client: "Regional health clinic",
    subtitle: "A high-contrast, tactile wayfinding system designed for low vision and cognitive load.",
    blurb: "A hospital wayfinding system built around high contrast, tactile cues and plain language — legible for low-vision, dyslexic and first-language-not-English visitors.",
    challenge: "Anxious visitors were getting lost in a maze of near-identical corridors. Existing signage failed WCAG contrast and relied on jargon and colour alone to carry meaning.",
    approach: "A colour-and-icon zoning system pairs every hue with a distinct shape and a tactile floor-strip, so meaning never rests on colour alone. Type sizes were set from viewing-distance calculations; language was rewritten at a grade-6 reading level.",
    outcome: "Wrong-turn incidents at the main junction dropped noticeably in walk-through testing. The kit of parts now scales to new departments from a single spec sheet.",
    tags: ["WCAG 2.1 AA", "Tactile cues", "Plain language", "Zoning system", "Signage"]
  },
  {
    id: "steambend",
    title: "Steam & Bend",
    cat: "wood",
    category: "Woodwork",
    tag: "Lounge chair",
    year: "2024",
    role: "Furniture design · Fabrication",
    client: "Self-initiated",
    subtitle: "A steam-bent ash lounge chair from a single continuous frame.",
    blurb: "A lounge chair whose frame is a single length of ash, steam-bent into a continuous loop from armrest to runner — no visible joinery.",
    challenge: "To prove that one uninterrupted piece of timber could do the work of a dozen jointed parts, holding a body comfortably while looking almost impossibly light.",
    approach: "Green ash was steam-softened and clamped over a shop-built former, then left to season in the curve. Hand-planing and a hard-wax oil finish let the grain read as a single flowing line around the whole frame.",
    outcome: "A chair that flexes with the sitter and weighs under six kilos. The former is reusable, making a small production run viable from a home workshop.",
    tags: ["Steam bending", "Ash", "Joinery-free", "Hand finishing", "Jig making"]
  },
  {
    id: "nest",
    title: "Nest",
    cat: "wood",
    category: "Woodwork",
    tag: "Modular shelving",
    year: "2022",
    role: "Product design · Woodworking",
    client: "Self-initiated",
    subtitle: "Tool-free modular shelving joined entirely with sliding dovetails.",
    blurb: "A modular oak shelving system that assembles with sliding dovetails and gravity — no screws, no brackets, no instructions needed.",
    challenge: "Flat-pack furniture is landfill in waiting. The goal was a shelving system that could be reconfigured for a lifetime and repaired with hand tools.",
    approach: "Each module locks to the next with a tapered sliding dovetail cut on a shop jig for repeatable tolerances. The friction fit tightens under load, so the more you store, the more rigid it becomes.",
    outcome: "A system that ships flat, assembles in minutes without hardware, and can be re-milled and refinished decades on. Every joint is designed to be taken apart as cleanly as it went together.",
    tags: ["Sliding dovetails", "Oak", "Design for repair", "Modular", "Flat-pack"]
  },
  {
    id: "fieldnotes",
    title: "Field Notes",
    cat: "graphic",
    category: "Graphic",
    tag: "Identity system",
    year: "2023",
    role: "Brand identity · Editorial",
    client: "Design studio",
    subtitle: "A grid-driven identity and editorial system for a research-led studio.",
    blurb: "A flexible identity system built on a modular grid, letting a small studio publish research, posters and reports that always feel like one voice.",
    challenge: "The studio produced wildly different output — reports, exhibitions, social — and it all looked like it came from different companies.",
    approach: "A single baseline grid and a two-typeface system (a grotesque paired with a mono) act as a chassis every format bolts onto. A set of rules — not templates — keeps things consistent without killing range.",
    outcome: "A living identity that anyone on the team can apply. Turnaround on new collateral dropped, and the studio finally reads as one considered brand.",
    tags: ["Grid systems", "Type pairing", "Editorial", "Brand guidelines", "Layout"]
  },
  {
    id: "terra",
    title: "Terra",
    cat: "graphic",
    category: "Graphic",
    tag: "Packaging & brand",
    year: "2022",
    role: "Packaging · Brand identity",
    client: "Independent ceramics maker",
    subtitle: "Low-waste packaging and identity for a small-batch ceramics studio.",
    blurb: "Brand and packaging for a ceramics maker, built from a single die-cut fold that protects the work with zero tape, glue or plastic.",
    challenge: "Handmade ceramics need serious protection in the post, but the maker refused to ship plastic — and every gram of packaging is a cost for a one-person studio.",
    approach: "One flat sheet of moulded pulp folds around each piece with locking tabs, so protection comes from geometry, not filler. The identity is stamped, not printed, keeping it recyclable and unmistakably handmade.",
    outcome: "Breakage in transit fell to near zero in testing, and the unboxing became part of the product. Packaging cost per order dropped while going fully plastic-free.",
    tags: ["Structural packaging", "Moulded pulp", "Plastic-free", "Wordmark", "Print"]
  }
];

const CATS = {
  medical: { label: "Medical & Accessibility", color: "#2340c8" },
  wood:    { label: "Woodwork",                color: "#b5623a" },
  graphic: { label: "Graphic",                 color: "#6b4de6" }
};

/* ---------- tiny helpers ---------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) => String(s).replace(/[&<>"]/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[m]));

/* =========================================================
   Generative poster art (stand-ins for real photography)
   Swap for a photo by adding image:"assets/xxx.jpg" to a project.
   ========================================================= */
function makePoster(p, ratio = "4 3") {
  if (p.image) {
    return `<img src="${esc(p.image)}" alt="${esc(p.title)} — ${esc(p.category)}" style="width:100%;height:100%;object-fit:cover">`;
  }
  const c = CATS[p.cat].color;
  const art = { medical: medicalArt, wood: woodArt, graphic: graphicArt }[p.cat](c);
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${art}</svg>`;
}
function tint(hex, bg = "#efeeec") { return `<rect width="400" height="300" fill="${bg}"/>`; }

function medicalArt(c) {
  return `${tint(c, "#eef0fb")}
    <g stroke="${c}" stroke-width="2" fill="none" opacity="0.9">
      <rect x="120" y="70" rx="26" ry="26" width="160" height="160"/>
      <rect x="146" y="96" rx="12" ry="12" width="108" height="66" fill="${c}" opacity="0.12" stroke="none"/>
    </g>
    <g fill="${c}">
      <rect x="192" y="185" width="16" height="46" rx="8"/>
      <rect x="177" y="200" width="46" height="16" rx="8"/>
    </g>
    <g fill="${c}" opacity="0.35">
      ${[0,1,2,3].map(i => `<circle cx="${150+i*33}" cy="118" r="5"/>`).join("")}
      ${[0,1,2,3].map(i => `<circle cx="${150+i*33}" cy="140" r="5"/>`).join("")}
    </g>
    <line x1="40" y1="255" x2="360" y2="255" stroke="${c}" stroke-width="8" stroke-linecap="round" opacity="0.5"/>`;
}
function woodArt(c) {
  const grain = Array.from({ length: 9 }, (_, i) => {
    const y = 40 + i * 26, k = 8 + (i % 3) * 7;
    return `<path d="M-10 ${y} Q120 ${y - k} 200 ${y} T410 ${y}" fill="none" stroke="${c}" stroke-width="${i % 2 ? 2 : 3}" opacity="${0.22 + (i % 3) * 0.12}"/>`;
  }).join("");
  return `${tint(c, "#f3ece4")}${grain}
    <circle cx="300" cy="150" r="46" fill="none" stroke="${c}" stroke-width="3" opacity="0.5"/>
    <circle cx="300" cy="150" r="26" fill="none" stroke="${c}" stroke-width="2" opacity="0.4"/>
    <circle cx="300" cy="150" r="8"  fill="${c}" opacity="0.6"/>`;
}
function graphicArt(c) {
  return `${tint(c, "#efe9fb")}
    <g stroke="${c}" stroke-width="1" opacity="0.25">
      ${[80,160,240,320].map(x => `<line x1="${x}" y1="20" x2="${x}" y2="280"/>`).join("")}
      ${[75,150,225].map(y => `<line x1="20" y1="${y}" x2="380" y2="${y}"/>`).join("")}
    </g>
    <text x="46" y="215" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="210" fill="${c}" opacity="0.9">G</text>
    <circle cx="300" cy="90" r="52" fill="${c}" opacity="0.85"/>
    <rect x="250" y="180" width="110" height="26" rx="13" fill="${c}" opacity="0.4"/>`;
}

/* =========================================================
   Render: work grid + home featured
   ========================================================= */
function cardHTML(p, i) {
  const cat = CATS[p.cat];
  return `
  <a class="card reveal" href="#${p.id}" data-project="${p.id}" data-cat="${p.cat}"
     style="transition-delay:${(i % 3) * 80}ms" aria-label="${esc(p.title)} — ${esc(p.category)}, view case study">
    <div class="poster">
      <span class="index">${String(i + 1).padStart(2, "0")}</span>
      <span class="tagpill">${esc(p.tag)}</span>
      ${makePoster(p)}
    </div>
    <div class="meta">
      <div class="cat"><span class="dot" style="background:${cat.color}"></span>${esc(p.category)} · ${p.year}</div>
      <h3>${esc(p.title)}</h3>
      <p class="blurb">${esc(p.blurb)}</p>
      <span class="view">View case study <span class="arrow">→</span></span>
    </div>
  </a>`;
}

function renderWork() {
  const grid = $("#work-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(cardHTML).join("");

  // filter bar
  const bar = $("#filter-bar");
  if (bar) {
    const counts = { all: PROJECTS.length };
    Object.keys(CATS).forEach(k => counts[k] = PROJECTS.filter(p => p.cat === k).length);
    const mk = (key, label) => `<button class="filter${key === "all" ? " active" : ""}" data-filter="${key}">${label}<span class="n">${counts[key]}</span></button>`;
    bar.innerHTML = mk("all", "All") + Object.entries(CATS).map(([k, v]) => mk(k, v.label)).join("");
    bar.addEventListener("click", e => {
      const b = e.target.closest(".filter"); if (!b) return;
      $$(".filter", bar).forEach(f => f.classList.remove("active"));
      b.classList.add("active");
      const f = b.dataset.filter;
      $$(".card", grid).forEach(card => card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f));
    });
  }
}

function renderFeatured() {
  const grid = $("#featured-grid");
  if (!grid) return;
  const pick = [PROJECTS[0], PROJECTS[2], PROJECTS[4]]; // one per discipline
  grid.innerHTML = pick.map((p, i) => cardHTML(p, PROJECTS.indexOf(p))).join("");
}

/* =========================================================
   Case-study modal
   ========================================================= */
let lastFocus = null;
function buildModal() {
  const m = document.createElement("div");
  m.className = "modal"; m.id = "modal"; m.setAttribute("role", "dialog");
  m.setAttribute("aria-modal", "true"); m.setAttribute("aria-hidden", "true");
  m.innerHTML = `
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel" role="document">
      <button class="modal-close" data-close aria-label="Close case study">✕</button>
      <div class="modal-hero" id="m-hero"></div>
      <div class="modal-body" id="m-body"></div>
    </div>`;
  document.body.appendChild(m);
  m.addEventListener("click", e => {
    const gimg = e.target.closest(".case-gallery img");
    if (gimg) { openLightbox(gimg.getAttribute("src"), gimg.getAttribute("alt")); return; }
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && m.classList.contains("open")) closeModal(); });
  return m;
}

/* full-screen image viewer for gallery images */
function openLightbox(src, cap) {
  let lb = $("#lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "lightbox"; lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
    lb.innerHTML = `<button class="lb-close" aria-label="Close image">✕</button><img alt=""><p class="lb-cap"></p>`;
    document.body.appendChild(lb);
    lb.addEventListener("click", e => { if (e.target === lb || e.target.closest(".lb-close")) lb.classList.remove("open"); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  }
  lb.querySelector("img").src = src;
  lb.querySelector("img").alt = cap || "";
  lb.querySelector(".lb-cap").textContent = cap || "";
  lb.classList.add("open");
}
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  const m = $("#modal") || buildModal();
  const cat = CATS[p.cat];
  lastFocus = document.activeElement;
  $("#m-hero", m).innerHTML = makePoster(p, "16 10");
  $("#m-body", m).innerHTML = `
    <div class="cat"><span class="dot" style="background:${cat.color}"></span>${esc(p.category)}</div>
    <h2>${esc(p.title)}</h2>
    <p class="subtitle">${esc(p.subtitle)}</p>
    <dl class="spec">
      ${p.duration
        ? `<div><dt>Duration</dt><dd>${esc(p.duration)}</dd></div>`
        : `<div><dt>Year</dt><dd>${esc(p.year)}</dd></div><div><dt>Role</dt><dd>${esc(p.role)}</dd></div>`}
      <div><dt>Context</dt><dd>${esc(p.client)}</dd></div>
      <div><dt>Discipline</dt><dd>${esc(p.category)}</dd></div>
    </dl>
    <div class="case-block"><h4>The challenge</h4><p>${esc(p.challenge)}</p></div>
    <div class="case-block"><h4>The approach</h4><p>${esc(p.approach)}</p></div>
    <div class="case-block"><h4>The outcome</h4><p>${esc(p.outcome)}</p></div>
    ${p.gallery && p.gallery.length ? `<div class="case-gallery" aria-label="Project gallery">${p.gallery.map(g => `<figure class="${g.feature ? "cg-feature" : ""}"><img src="${esc(g.src)}" alt="${esc(g.cap)}" loading="lazy" draggable="false"><figcaption>${esc(g.cap)}</figcaption></figure>`).join("")}</div>` : ""}
    <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    ${p.real ? "" : `<div class="modal-note">Sample case study — replace this copy and drop in real project photos when ready.</div>`}`;
  m.classList.add("open"); m.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-close", m).focus();
  if (history.replaceState) history.replaceState(null, "", "#" + id);
}
function closeModal() {
  const m = $("#modal"); if (!m) return;
  m.classList.remove("open"); m.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (history.replaceState) history.replaceState(null, "", location.pathname);
  if (lastFocus) lastFocus.focus();
}
function initModalTriggers() {
  document.addEventListener("click", e => {
    const card = e.target.closest("[data-project]");
    if (card) { e.preventDefault(); openModal(card.dataset.project); }
  });
  // deep-link support (e.g. work.html#grasp)
  const hash = location.hash.slice(1);
  if (hash && PROJECTS.some(p => p.id === hash)) setTimeout(() => openModal(hash), 400);
}

/* =========================================================
   Custom cursor
   ========================================================= */
function initCursor() {
  if (reduced || matchMedia("(pointer: coarse)").matches) return;
  const dot = document.createElement("div"); dot.className = "cursor-dot";
  const ring = document.createElement("div"); ring.className = "cursor-ring";
  ring.innerHTML = `<span class="clabel">View</span>`;
  document.body.append(dot, ring);
  document.body.classList.add("cursor-on");

  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();

  document.addEventListener("mouseover", e => {
    const card = e.target.closest("[data-project]");
    const hov  = e.target.closest("a,button,.magnetic,[data-cursor]");
    ring.classList.toggle("is-label", !!card);
    ring.classList.toggle("is-hover", !!hov && !card);
  });
  document.addEventListener("mouseout", e => {
    if (!e.relatedTarget) { ring.classList.remove("is-hover", "is-label"); }
  });
  addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = 0; });
  addEventListener("mouseenter", () => { dot.style.opacity = ring.style.opacity = 1; });
}

/* =========================================================
   Magnetic elements
   ========================================================= */
function initMagnetic() {
  if (reduced) return;
  $$(".magnetic").forEach(el => {
    const strength = parseFloat(el.dataset.strength || "0.3");
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px,${y}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* =========================================================
   Reveal on scroll + counters
   ========================================================= */
function initReveal() {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("is-in");
        if (en.target.dataset.count != null) animateCount(en.target);
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal, .reveal-line, [data-count]").forEach(el => io.observe(el));
}
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  if (reduced) { el.textContent = target + suffix; return; }
  const dur = 1300, t0 = performance.now();
  (function tick(now) {
    const k = Math.min(1, (now - t0) / dur);
    const val = Math.round(target * (1 - Math.pow(1 - k, 3)));
    el.textContent = val + suffix;
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}

/* =========================================================
   Header show/hide + mobile nav
   ========================================================= */
function initHeader() {
  const h = $(".site-header"); if (!h) return;
  let last = 0;
  addEventListener("scroll", () => {
    const y = scrollY;
    h.classList.toggle("scrolled", y > 20);
    h.classList.toggle("hide", y > last && y > 320 && !$(".nav")?.classList.contains("open"));
    last = y;
  }, { passive: true });

  const toggle = $(".nav-toggle"), nav = $(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
      document.body.classList.toggle("nav-open", open);
      h.classList.remove("hide");               // ensure header isn't transformed while open
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$("a", nav).forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open"); toggle.classList.remove("open");
      document.body.classList.remove("nav-open"); document.body.style.overflow = "";
    }));
  }
}

/* =========================================================
   Marquee (seamless) + hero hint fade
   ========================================================= */
function initMarquee() {
  $$(".marquee-track").forEach(t => { t.innerHTML += t.innerHTML; });
}
function initHeroHint() {
  const hint = $("#hero-hint");
  if (hint) addEventListener("scroll", () => { hint.style.opacity = scrollY > 60 ? 0 : 1; }, { passive: true });
}

/* =========================================================
   Carousel (home) — an INTERACTIVE 3D curved carousel. Images
   are placed around a cylinder (the ring); you DRAG / swipe (or
   use arrow keys) to rotate it and it snaps to the nearest card.
   Centre card faces forward; sides rotate back in perspective.
   -----------------------------------------------------------
   ▸ To change the pictures: edit CAROUSEL_IMAGES below (path + alt).
     Each card is set on the ring at angle i·(360/N), pushed out by a
     radius sized to fit N cards. Card size + radius are responsive.
   ========================================================= */
const CAROUSEL_IMAGES = [   // me, my designs, my experiences
  { src: "assets/carousel/grad-solo.jpg?v=2", alt: "Graduation day on the seafront" },
  { src: "assets/carousel/workshop.jpg", alt: "In the workshop" },
  { src: "assets/carousel/friends-group.jpg", alt: "With friends at the degree show" },
  { src: "assets/carousel/glide-team.jpg", alt: "At the Glide stand with fellow exhibitors" },
  { src: "assets/carousel/business-cards.jpg", alt: "EGD business cards" },
  { src: "assets/carousel/surfing.jpg", alt: "Surfing" },
  { src: "assets/carousel/trophies.jpg", alt: "Holding the New Designers awards" },
  { src: "assets/carousel/exhibit-guests.jpg", alt: "With guests at the exhibition" },
  { src: "assets/carousel/award-closeup.jpg", alt: "The New Designers 2026 award" },
  { src: "assets/carousel/friends-selfie.jpg", alt: "With a friend" },
  { src: "assets/carousel/cohort.jpg", alt: "With the University of Brighton cohort at New Designers" },
  { src: "assets/carousel/grad-trio.jpg", alt: "Celebrating graduation" },
];

function initCarousel() {
  const ring  = $("#carousel-ring");
  const stage = $("#carousel-stage");
  if (!ring || !stage) return;
  const section = ring.closest(".carousel");

  // two laps of the set → a fuller ring so the wide, screen-spanning arc stays populated.
  // duplicates sit 180° apart (never adjacent), so no image repeats next to itself.
  const DUP = 2;
  const built = [];
  for (let d = 0; d < DUP; d++) built.push(...CAROUSEL_IMAGES);

  const cards = built.map(img => {
    const el = document.createElement("div");
    el.className = "carousel-card";
    el.innerHTML = `<img src="${esc(img.src)}" alt="${esc(img.alt)}" loading="lazy" draggable="false">`;
    ring.appendChild(el);
    return el;
  });

  const N = cards.length;
  const step = 360 / N;                     // degrees between neighbouring cards on the ring

  // place every card on the cylinder. The radius is driven by the VIEWPORT width so the fan
  // spreads right across the screen; cards stay small (zoomed out).
  function layout() {
    const vw = innerWidth;
    const w = Math.max(118, Math.min(vw * 0.135, 168));          // small cards
    ring.style.setProperty("--cardw", w + "px");
    ring.style.setProperty("--cardh", Math.round(stage.clientHeight * 0.74) + "px");
    const radius = Math.round(Math.max(320, Math.min(vw * 0.47, 800)));   // wide arc = fills width
    cards.forEach((el, i) => {
      el.dataset.base = i * step;
      el.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
    });
  }
  layout();
  let rt;
  addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(layout, 150); });

  /* ---- drag / swipe / keyboard rotation, with snap ---- */
  let angle = 0, startX = 0, startAngle = 0, dragging = false, moved = false;
  const SENS = 0.42;                         // degrees of rotation per pixel dragged
  const SNAP = "transform .55s cubic-bezier(.22,.61,.36,1)";

  const apply = () => { ring.style.transform = `rotateY(${angle}deg)`; };
  const markInteracted = () => section.classList.add("interacted");
  apply();

  function snap() {
    angle = Math.round(angle / step) * step;
    ring.style.transition = reduced ? "none" : SNAP;
    apply();
  }

  function down(x) {
    dragging = true; moved = false; startX = x; startAngle = angle;
    ring.style.transition = "none";
    stage.classList.add("grabbing");
  }
  function move(x) {
    if (!dragging) return;
    const dx = x - startX;
    if (Math.abs(dx) > 3) { moved = true; markInteracted(); }
    angle = startAngle + dx * SENS;
    apply();
  }
  function up() {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove("grabbing");
    snap();
  }

  stage.addEventListener("pointerdown", e => {
    down(e.clientX);
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  });
  stage.addEventListener("pointermove", e => { if (dragging) { move(e.clientX); e.preventDefault(); } });
  stage.addEventListener("pointerup", up);
  stage.addEventListener("pointercancel", up);
  // click shouldn't count as a drag; nothing to do — cards aren't links (yet)

  // keyboard: arrow keys step one card at a time
  stage.addEventListener("keydown", e => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault(); markInteracted();
    angle += (e.key === "ArrowLeft" ? -step : step);
    ring.style.transition = reduced ? "none" : SNAP;
    apply();
  });

  requestAnimationFrame(() => requestAnimationFrame(() => section.classList.add("is-in")));
}

/* =========================================================
   Bubble navigation — pop-in + lazy field init (home only)
   ========================================================= */
function initBubbles() {
  const section = $(".bubbles");
  if (!section) return;
  const bubbles = $$(".bubble", section);
  if (!bubbles.length) return;

  // the field is one shared canvas behind hero + explore, set up in effect.js — nothing to do here.
  // reveal each bubble as it scrolls into view — one after another
  const bubbleIO = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.4, rootMargin: "0px 0px -12% 0px" });
  bubbles.forEach(b => bubbleIO.observe(b));
}

/* =========================================================
   Page transition wipes
   ========================================================= */
function initPageTransition() {
  const pt = $(".page-transition"); if (!pt) return;

  // entrance reveal
  if (!reduced) {
    pt.style.transition = "none"; pt.style.transform = "translateY(0)"; pt.classList.add("cover");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pt.style.transition = ""; pt.classList.remove("cover"); pt.style.transform = "translateY(-100%)";
      setTimeout(() => { pt.style.transition = "none"; pt.style.transform = "translateY(100%)"; }, 700);
    }));
  }

  // intercept internal navigation
  document.addEventListener("click", e => {
    const a = e.target.closest("a"); if (!a) return;
    const href = a.getAttribute("href") || "";
    const internal = /\.html($|#|\?)/.test(href) || href === "index.html";
    if (!internal) return;
    if (a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const [path] = href.split("#");
    if (path && path === location.pathname.split("/").pop()) return; // same page
    if (reduced) return; // let it navigate normally
    e.preventDefault();
    pt.style.transition = ""; pt.classList.add("cover"); pt.style.transform = "translateY(0)";
    setTimeout(() => { location.href = href; }, 520);
  });
}

/* =========================================================
   Surfer intro (home) — her flight path, and the words she passes
   -----------------------------------------------------------
   Her route is a hook: right along the line under "Hi, I'm Ella", then a clockwise
   sweep down and back left, landing centred in the photo box, where she spins twice
   and hands over to the graduation photo mid-spin.

   Both the path and the word timings have to be measured rather than hardcoded —
   the box's position, the text width and the viewport all move independently, and a
   fixed guess drifts out of sync at other sizes. The path is walked with the SVG
   geometry API so each word fires exactly as she clears it, curve included.
   ========================================================= */
function initSurferIntro() {
  const fly   = $(".surfer-fly");
  const intro = $(".carousel-intro");
  const box   = $(".about-me-photo");
  const wrap  = $(".field-wrap");
  if (!fly || !intro || !box || !wrap || reduced) return;   // reduced-motion: CSS shows it all
  const words = $$("span", intro);
  if (!words.length) return;

  const sync = () => {
    const ride = parseFloat(getComputedStyle(fly).animationDuration) * 1000;
    if (!ride) return;
    const wr = wrap.getBoundingClientRect();
    const ir = intro.getBoundingClientRect();
    const br = box.getBoundingClientRect();
    const sw = fly.offsetWidth, sh = fly.offsetHeight;
    if (!sw) return;

    // all coordinates are relative to .field-wrap, which is the path's containing block
    const lineY = (ir.bottom - wr.top) + 12;        // the line just under the intro text
    const startX = -sw;                             // off-screen left
    const turnX  = (wr.width * 0.86);               // where the run hooks downward
    const endX   = (br.left + br.width / 2) - wr.left;
    const endY   = (br.top + br.height / 2) - wr.top;

    // straight run, then one cubic that turns down at the right and sweeps back left
    const d = `M ${startX},${lineY} L ${turnX},${lineY} ` +
              `C ${turnX + 70},${lineY + 130} ${endX + 300},${endY + 120} ${endX},${endY}`;
    fly.style.setProperty("--fly-path", `path("${d}")`);

    // walk the path to find when her leading edge clears each word
    const probe = document.createElementNS("http://www.w3.org/2000/svg", "path");
    probe.setAttribute("d", d);
    const total = probe.getTotalLength();
    const STEPS = 400;
    const timeAtX = (targetX) => {
      for (let i = 0; i <= STEPS; i++) {
        const len = total * (i / STEPS);
        // her centre rides the path, so her leading edge is half a width ahead
        if (probe.getPointAtLength(len).x - sw / 2 >= targetX) return ride * (len / total);
      }
      return ride;
    };
    const delays = words.map(w => timeAtX(w.getBoundingClientRect().right - wr.left));

    // restart her and the words in one reflow so the computed delays line up with her run
    fly.style.animation = "none";
    words.forEach(w => { w.style.animation = "none"; });
    void fly.offsetWidth;
    fly.style.animation = "";
    words.forEach((w, i) => {
      w.style.animation = "";
      w.style.animationDelay = Math.round(delays[i]) + "ms";
    });
  };

  // word widths and the box position both shift as the webfont and photo settle
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  else sync();
}

/* =========================================================
   Boot
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  $$("#yr").forEach(el => el.textContent = new Date().getFullYear());
  renderWork();
  renderFeatured();
  initModalTriggers();
  initReveal();
  initCursor();
  initMagnetic();
  initHeader();
  initMarquee();
  initHeroHint();
  initCarousel();
  initSurferIntro();
  initBubbles();
  initPageTransition();
});
