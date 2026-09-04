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
      { src: "assets/stride/prod-white.png", cap: "Stride in white, finished with a custom vinyl sticker", feature: true },
      { src: "assets/stride/prod-sticker.png", cap: "Customised with the user’s own stickers", feature: true },
      { src: "assets/stride/prod-blue.png", cap: "The sensor and its two-part magnetic clothing clip" },
      { src: "assets/stride/prod-hand.png", cap: "Small enough to sit in the palm of the hand" },
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
    id: "glide",
    title: "Glide",
    cat: "medical",                       // medical | wood | graphic
    category: "Medical & Accessibility",
    tag: "Pool safety system",
    year: "2026",                         // still needed for the grid card even though duration drives the modal
    role: "Product design · Systems design · User research",
    duration: "4 months",                 // Final Major Project — shown instead of Year/Role in the modal
    client: "University of Brighton — final major project",
    real: true,                           // real project — hides the "sample" note
    image: "assets/glide/cam-red.png",    // the card poster + modal hero — real product photo
    subtitle: "A camera-tracking pool safety system that lets visually impaired swimmers swim independently, without relying on another person.",
    blurb: "A pool safety system that tracks visually impaired swimmers by their patterned swim cap and warns them through bone-conduction headphones — ‘you’re drifting right’ — before they hit a lane rope, wall or another swimmer.",
    challenge: "There are no designs in place to help visually impaired people swim independently and safely — even the Paralympic standard is a volunteer tapping swimmers with a foam-tipped stick. Visually impaired swimmers regularly hit lane barriers (trapping fingers in the casing), pool walls and other swimmers, causing injury as well as embarrassment. I watched my mum, who lost part of her sight to diabetic retinopathy, lose the ability to swim independently because nowhere is designed for her — and set out to build something she and the roughly 2 million people with sight loss in the UK could use. A survey of visually impaired swimmers backed this up: 62% rely on another person to help them access and enjoy a swim. Most surveyed swim to keep fit and healthy, and the remaining 40% swim to relax — these statistics underline both how much more visually impairment-friendly swimming needs to be, and how important swimming already is in a visually impaired person's daily life.",
    approach: "Each swimmer wears a patterned swimming cap carrying ArUco tracking markers and a numbered pair of bone-conduction headphones, paired to each other through the Glide app so the system always knows who's who. Cameras mounted 2.5m above every lane track each cap's marker and feed a pool-side server, which watches for drift towards a barrier, wall or another swimmer and speaks a warning through that swimmer's own headphones — ‘you're drifting to your right’ — until they've corrected course.",
    outcome: "A working proof of concept covering the full system end to end: a wall-mounted, POE-powered camera with an adjustable pivot mount and installation manual, a pool-side server and switch, and the cap-and-headphone pairing swimmers actually wear. Exhibited as a graduate degree show piece, aimed at replacing a companion or a volunteer with a stick with something that lets visually impaired swimmers train and swim on their own terms.",
    tags: ["Accessibility", "Human factors", "Computer vision", "ArUco marker tracking", "Bone conduction audio", "Wearable design", "Systems design", "Installation design"],
    gallery: [
      { src: "assets/glide/cam-red.png", cap: "The Glide camera, wall-mounted above the lane", feature: true },
      { src: "assets/glide/tracking-view.png", cap: "What the camera sees — a swimmer tracked within the lane markers", feature: true },
      { src: "assets/glide/cap-front.jpg", cap: "Putting on the patterned, ArUco-marked swimming cap" },
      { src: "assets/glide/headphones.jpg", cap: "Fitting the numbered bone-conduction headphones" },
      { src: "assets/glide/cap-profile.jpg", cap: "Cap and headphones paired and ready to swim" },
      { src: "assets/glide/camera.jpg", cap: "The Glide camera" },
    ],
    // the real installation manual, rendered page-by-page from the actual PDF (assets/glide/manual)
    // — opened as a page-flip booklet from the case-study modal (openBooklet(), .manual-trigger below)
    manual: [
      { src: "assets/glide/manual/page-1.png", cap: "Glide — Installation Manual" },
      { src: "assets/glide/manual/page-2.png", cap: "Components — wall mount, pivot joint, camera device, POE switch, pool-side server and Glide sign" },
      { src: "assets/glide/manual/page-3.png", cap: "Cameras have to be installed 2.5 metres / 8.2 feet above the pool surface" },
      { src: "assets/glide/manual/page-4.png", cap: "Run the POE cable through the groove on the back of the wall mount before drilling it into the wall" },
      { src: "assets/glide/manual/page-5.png", cap: "Loosen the nuts to adjust the pivot joint to the desired angle, then re-tighten and feed the POE cable through" },
      { src: "assets/glide/manual/page-6.png", cap: "Twist clockwise to secure the camera to the wall mount" },
      { src: "assets/glide/manual/page-7.png", cap: "Connect the POE cable to the camera via the port inside the device" },
      { src: "assets/glide/manual/page-8.png", cap: "Screw the Glide sign into the wall next to the camera, keeping the camera angle clear of it" },
      { src: "assets/glide/manual/page-9.png", cap: "Connect the camera to power — the CAT 6 cable end goes into the POE switch" },
      { src: "assets/glide/manual/page-10.png", cap: "Connect the POE switch to the server — the camera can now be set up and calibrated through the Glide app" },
    ],
    // the real process/technical portfolio, rendered page-by-page from the actual PDF
    // (assets/glide/process) — opened as a second page-flip booklet, same as `manual`
    process: [
      { src: "assets/glide/process/page-1.jpg", cap: "FMEA — a failure mode and effects analysis for the camera tracking device and power unit" },
      { src: "assets/glide/process/page-2.jpg", cap: "Further research — surveying visually impaired members of Sight Support Worthing on how they currently navigate the pool" },
      { src: "assets/glide/process/page-3.jpg", cap: "Design process — the first concept, a wearable sensor worn under the swimming cap" },
      { src: "assets/glide/process/page-4.jpg", cap: "Testing ultrasonic sensors for obstacle-detection range" },
      { src: "assets/glide/process/page-5.jpg", cap: "Testing RFID sensors and tag-to-reader range" },
      { src: "assets/glide/process/page-6.jpg", cap: "How UHF RFID tags on the lane divider could warn swimmers of drift" },
      { src: "assets/glide/process/page-7.jpg", cap: "Camera tracking explored — early casing sketches and concepts" },
      { src: "assets/glide/process/page-8.jpg", cap: "3D-printed prototypes exploring how the camera module rotates and adjusts" },
      { src: "assets/glide/process/page-9.jpg", cap: "Final camera design — material, mounting and sealing details" },
      { src: "assets/glide/process/page-10.jpg", cap: "Early CAD renders of the camera and pivot mount" },
      { src: "assets/glide/process/page-11.jpg", cap: "Testing haptic feedback against audio announcements for alerting swimmers" },
      { src: "assets/glide/process/page-12.jpg", cap: "Tearing down market bone-conduction headphones to understand how they're made" },
      { src: "assets/glide/process/page-13.jpg", cap: "Headphone design process — exploring forms, textures and Braille customisation" },
      { src: "assets/glide/process/page-14.jpg", cap: "Adjustment concepts — strap and magnetic retention systems for the headphones" },
      { src: "assets/glide/process/page-15.jpg", cap: "Final headphone model — materials, buttons and charging port" },
      { src: "assets/glide/process/page-16.jpg", cap: "How the system identifies each swimmer, pairing cap pattern to headphones" },
      { src: "assets/glide/process/page-17.jpg", cap: "Swimming cap and headphones, worn together" },
      { src: "assets/glide/process/page-18.jpg", cap: "A range of swim cap patterns for swimmers to choose from" },
      { src: "assets/glide/process/page-19.jpg", cap: "Camera tracking — how the four parts of the system work together" },
      { src: "assets/glide/process/page-20.jpg", cap: "The Glide app — calibrating camera view and lanes for each pool" },
    ],
  },
  {
    id: "bobbin",
    title: "Bobbin Sidetable",
    cat: "wood",
    category: "Woodwork",
    tag: "Side table",
    year: "2026",                         // still needed for the grid card even though duration drives the modal
    duration: "2 weeks",
    role: "Furniture design · Woodworking",
    client: "Self-initiated",
    real: true,                           // real project — hides the "sample" note
    image: "assets/bobbin/sidetable3.jpg",
    subtitle: "A side table built entirely from scrap and offcut wood, turned into a talking piece as much as a bedside table.",
    blurb: "A bedside table built from scrap and offcut timber rescued from my university's wood pile — hand-turned bobbin legs and a scalloped skirt to add more character.",
    challenge: "I needed a bedside table, but didn't want another flat-pack piece that disappears into the room. The brief I set myself was to build something entirely from waste — nothing bought — that would earn its place as a talking piece, not just somewhere to put a lamp.",
    approach: "Every piece of timber was rescued from my university's scrap pile and worked up after hours, in my own time. The legs were turned into a bobbin profile, and the skirt was cut with a matching scalloped edge — details that turn offcuts into something with presence. The whole piece was sanded, primed and taken through two rounds of white paint for a clean, considered finish over rescued wood.",
    outcome: "A side table that cost nothing but time, and taught me more about turning, joinery and finishing than any brief could have. It did more for my confidence in the workshop than it looks like it should — and it's still the piece people ask about first.",
    tags: ["Scrap & offcut timber", "Wood turning", "Hand finishing", "Self-initiated", "Sustainable materials"],
    gallery: [
      { src: "assets/bobbin/sidetable1.jpg", cap: "The bobbin-turned legs, fresh off the lathe in the university workshop", feature: true },
      { src: "assets/bobbin/sidetable2.jpg", cap: "Sanded and primed, ready for its first coat of white paint" },
      { src: "assets/bobbin/sidetable3.jpg", cap: "Finished and in use, bedside", feature: true },
    ],
  },
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
    bar.innerHTML = mk("all", "All") + Object.entries(CATS).filter(([k]) => counts[k] > 0).map(([k, v]) => mk(k, v.label)).join("");
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

/* =========================================================
   Manual booklet — a page-flip viewer for a project's real
   installation manual (rendered from the actual PDF, see
   Glide's `manual` array), opened from its case-study modal.
   Same lazy-singleton overlay pattern as openLightbox().
   ========================================================= */
let bookletPages = [], bookletIndex = 0;
function paintBooklet() {
  const bk = $("#booklet"); if (!bk) return;
  const page = bookletPages[bookletIndex];
  const img = $("img", bk);
  img.src = page.src; img.alt = page.cap || "";
  $(".booklet-cap", bk).textContent = page.cap || "";
  $(".booklet-count", bk).textContent = `${bookletIndex + 1} / ${bookletPages.length}`;
  $(".booklet-prev", bk).disabled = bookletIndex === 0;
  $(".booklet-next", bk).disabled = bookletIndex === bookletPages.length - 1;
}
function openBooklet(key) {
  const [id, field] = key.split(":");
  const p = PROJECTS.find(x => x.id === id);
  const pages = p && p[field];
  if (!pages || !pages.length) return;
  bookletPages = pages; bookletIndex = 0;
  let bk = $("#booklet");
  if (!bk) {
    bk = document.createElement("div");
    bk.id = "booklet"; bk.className = "booklet"; bk.setAttribute("role", "dialog"); bk.setAttribute("aria-modal", "true");
    bk.innerHTML = `
      <button class="booklet-close" aria-label="Close manual">✕</button>
      <div class="booklet-inner">
        <div class="booklet-stage"><img alt=""></div>
        <p class="booklet-cap"></p>
        <div class="booklet-nav">
          <button class="booklet-prev" aria-label="Previous page">←</button>
          <span class="booklet-count"></span>
          <button class="booklet-next" aria-label="Next page">→</button>
        </div>
      </div>`;
    document.body.appendChild(bk);
    bk.addEventListener("click", e => {
      if (e.target === bk || e.target.closest(".booklet-close")) { bk.classList.remove("open"); return; }
      if (e.target.closest(".booklet-prev")) { bookletIndex = Math.max(0, bookletIndex - 1); paintBooklet(); }
      if (e.target.closest(".booklet-next")) { bookletIndex = Math.min(bookletPages.length - 1, bookletIndex + 1); paintBooklet(); }
    });
    document.addEventListener("keydown", e => {
      if (!bk.classList.contains("open")) return;
      if (e.key === "Escape") { bk.classList.remove("open"); return; }
      if (e.key === "ArrowLeft") { bookletIndex = Math.max(0, bookletIndex - 1); paintBooklet(); }
      if (e.key === "ArrowRight") { bookletIndex = Math.min(bookletPages.length - 1, bookletIndex + 1); paintBooklet(); }
    });
  }
  paintBooklet();
  bk.classList.add("open");
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
    ${p.manual && p.manual.length ? `
    <div class="manual-trigger">
      <button class="manual-open-btn" data-booklet="${esc(p.id)}:manual">
        <img src="${esc(p.manual[0].src)}" alt="" loading="lazy">
        <span class="mo-text">
          <span class="mo-title">Look through the installation manual</span>
          <span class="mo-sub">${p.manual.length} pages — camera mount, wiring and set-up</span>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </button>
    </div>` : ""}
    ${p.process && p.process.length ? `
    <div class="manual-trigger">
      <button class="manual-open-btn" data-booklet="${esc(p.id)}:process">
        <img src="${esc(p.process[0].src)}" alt="" loading="lazy">
        <span class="mo-text">
          <span class="mo-title">Look through the design process</span>
          <span class="mo-sub">${p.process.length} pages — research, prototyping and technical development</span>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </button>
    </div>` : ""}
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
    const manualBtn = e.target.closest("[data-booklet]");
    if (manualBtn) { e.preventDefault(); openBooklet(manualBtn.dataset.booklet); }
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

/* ---------------------------------------------------------
   The 3D drag-rotate-snap carousel mechanic, extracted so it can
   drive more than one instance (the big work carousel further
   down the page, and the mini one on the landing page). Nothing
   about the math/interaction changed from the original — just
   parameterized instead of hardcoded to #carousel-stage/#carousel-ring.
   --------------------------------------------------------- */
function initCarouselInstance({
  stageSel, ringSel, items, dup = 1,
  cardWidth = vw => Math.max(142, Math.min(vw * 0.162, 202)),   // +20% from the original 118/0.135/168
  cardHeightRatio = 0.74,
  radius = vw => Math.max(384, Math.min(vw * 0.564, 960)),      // +20%, keeps the fan proportional
  buildCardHTML = item => `<img src="${esc(item.src)}" alt="${esc(item.alt)}" loading="lazy" draggable="false">`,
  onSettle = null,           // called with the active item's index once the ring settles
} = {}) {
  const ring  = $(ringSel);
  const stage = $(stageSel);
  if (!ring || !stage) return;
  const section = ring.closest(".carousel");

  // dup>1 laps of the set → a fuller ring so a wide, screen-spanning arc stays populated.
  // duplicates sit 180° apart (never adjacent), so no image repeats next to itself.
  const built = [];
  for (let d = 0; d < dup; d++) built.push(...items);

  const cards = built.map(item => {
    const el = document.createElement("div");
    el.className = "carousel-card";
    el.innerHTML = buildCardHTML(item);
    ring.appendChild(el);
    return el;
  });

  const N = cards.length;
  const step = 360 / N;                     // degrees between neighbouring cards on the ring

  // place every card on the cylinder. The radius is driven by the VIEWPORT width so the fan
  // spreads right across the screen; cards stay small (zoomed out).
  function layout() {
    const vw = innerWidth;
    ring.style.setProperty("--cardw", cardWidth(vw) + "px");
    ring.style.setProperty("--cardh", Math.round(stage.clientHeight * cardHeightRatio) + "px");
    const r = Math.round(radius(vw));
    cards.forEach((el, i) => {
      el.dataset.base = i * step;
      el.style.transform = `rotateY(${i * step}deg) translateZ(${r}px)`;
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
  const markInteracted = () => section && section.classList.add("interacted");
  apply();

  // which card is facing the camera: card i sits at rotateY(i*step), the ring adds
  // rotateY(angle) on top, so the front-facing card satisfies angle + i*step ≈ 0 (mod 360)
  function settle() {
    if (!onSettle) return;
    const activeStep = ((Math.round(-angle / step) % N) + N) % N;
    onSettle(activeStep % items.length);
  }

  function snap() {
    angle = Math.round(angle / step) * step;
    ring.style.transition = reduced ? "none" : SNAP;
    apply();
    settle();
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
    settle();
  });

  if (section) requestAnimationFrame(() => requestAnimationFrame(() => section.classList.add("is-in")));
  settle();   // caption (if any) starts in sync with the card actually facing forward
}

/* ---- the surfer as the BIG carousel's drag cursor only (fine pointers only) ---- */
// she lives at body level (position:fixed, raw viewport coords — same space as the
// site's dot/ring cursor): inside a stage, its perspective would hijack her fixed
// containing block. body.surfer-zone hides the dot/ring while she's out. Kept specific
// to the one big carousel — sharing her across two stages would mean both fighting over
// the same fixed <img> and the same body class.
function initSurferCursor(stageSel) {
  const stage = $(stageSel);
  const surfer = $(".surfer-cursor");
  if (!stage || !surfer || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const place = e => {
    surfer.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-55%)`;
  };
  stage.addEventListener("pointerenter", e => {
    place(e);
    surfer.classList.add("is-on");
    document.body.classList.add("surfer-zone");
  });
  stage.addEventListener("pointermove", place);
  stage.addEventListener("pointerleave", () => {
    surfer.classList.remove("is-on");
    document.body.classList.remove("surfer-zone");
  });
}

function initCarousel() {
  initCarouselInstance({ stageSel: "#carousel-stage", ringSel: "#carousel-ring", items: CAROUSEL_IMAGES, dup: 2 });
  initSurferCursor("#carousel-stage");
}

/* ---- the hammer as the WHOLE landing page's cursor (fine pointers only) ---- */
// replaces the dot+ring cursor entirely on index.html — see the boot sequence below,
// which calls this instead of initCursor() there. .hammer-cursor only exists in
// index.html's markup, so this is naturally a no-op if it's ever called elsewhere.
// Same body-level, position:fixed pattern as the retired surfer-cursor. The swing is
// tied specifically to pressing on the mini carousel's stage (stageSel), not just any
// click on the page — everywhere else the hammer just tracks the pointer, unrotated.
function initHammerPageCursor(stageSel) {
  if (reduced || matchMedia("(pointer: coarse)").matches) return;
  const hammer = $(".hammer-cursor");
  if (!hammer) return;
  let pressed = false;
  const place = (x, y) => {
    const swing = pressed ? " rotate(-45deg)" : "";
    hammer.style.transform = `translate(${x}px,${y}px) translate(-50%,-55%)${swing}`;
  };
  hammer.classList.add("is-on");
  document.body.classList.add("cursor-on");   // reuses initCursor()'s body.cursor-on{cursor:none} rule
  addEventListener("mousemove", e => place(e.clientX, e.clientY));
  addEventListener("mousedown", e => {
    if (e.target.closest(stageSel)) { pressed = true; place(e.clientX, e.clientY); }
  });
  addEventListener("mouseup", e => { if (pressed) { pressed = false; place(e.clientX, e.clientY); } });
  addEventListener("mouseleave", () => { hammer.style.opacity = 0; });
  addEventListener("mouseenter", () => { hammer.style.opacity = 1; });
}

/* =========================================================
   Work teaser — one project at a time on the landing page, photo +
   caption together, auto-advancing with a swoosh-left transition.
   Pulls straight from PROJECTS (same data driving work.html) via
   makePoster(), so nothing here is fabricated — Stride shows its
   real photo, the rest show the same generated poster art used on
   the Work grid.
   ========================================================= */
/* a mini version of the big drag-rotate-snap carousel above, showing PROJECTS instead of
   personal photos, with a caption underneath synced to whichever card is front-facing.
   Same mechanic (initCarouselInstance), just smaller and with a caption callback — no
   auto-advance, exactly like the big one: purely drag/keyboard driven. */
function initMiniCarousel() {
  const caption = $("#mini-carousel-caption");
  initCarouselInstance({
    stageSel: "#mini-carousel-stage",
    ringSel: "#mini-carousel-ring",
    items: PROJECTS,
    dup: 1,
    cardWidth: vw => Math.max(186, Math.min(vw * 0.233, 289)),   // +20% x3, then +15%, then +30%
    cardHeightRatio: 0.82,
    radius: vw => Math.max(259, Math.min(vw * 0.415, 553)),   // +20% x3, keeps the fan proportional
    buildCardHTML: p => makePoster(p),
    onSettle: idx => { if (caption) caption.textContent = PROJECTS[idx].blurb; },
  });
}

/* =========================================================
   Bubble navigation — pop-in + lazy field init (home only)
   ========================================================= */
function initBubbles() {
  // document-wide (not scoped to .bubbles) so it also covers .intro-work-bubble (the
  // egd-badge Selected Works button), which used to get its reveal manually from
  // initAboutMe() once the typed intro finished — now that intro copy is static, this
  // scroll-reveal is the only trigger it needs. Selected by class name directly since
  // .intro-work-bubble no longer also carries the .bubble class.
  const bubbles = $$(".bubble, .intro-work-bubble");
  if (!bubbles.length) return;

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
   About lines — four beats typed in sequence under "Hi, I'm Ella":
     1. "I try my hand at many things: surfing, hiking, boxing" — hobby words as <b>,
        each's photo sliding into the strip only once the WHOLE sentence lands.
     2. the "biggest passion is design" paragraph.
     3. "Check out my work below".
     4. the Selected Works flower fades in underneath (relocated here from the bubble
        nav — see .intro-cta in index.html).
   -----------------------------------------------------------
   One typewriter engine (typeSegs) drives all three lines; each line's own caret
   blinks only while IT is being typed, then hands off to the next.
   ========================================================= */
function initAboutMe() {
  const textEl = $(".about-me-typed");
  const caretEl = $(".about-me-caret");
  const strip = $(".about-strip");
  const typed2 = $("#about-typed-2"), caret2 = $("#about-caret-2");
  const typed3 = $("#about-typed-3"), caret3 = $("#about-caret-3");
  const cta = $(".intro-work-bubble");
  if (!textEl || !caretEl || !strip) return;
  const photos = $$("img", strip);

  const SEGS = [
    { t: "I try my hand at many things: " },
    { t: "surfing", b: true },
    { t: ", " },
    { t: "hiking", b: true },
    { t: ", " },
    { t: "boxing", b: true },
  ];
  const LINE2 = "But my biggest passion is design, hence why I created EGD Designs — "
    + "a place to showcase all of my work, from medical and accessibility design to "
    + "woodworking and casting, all made in my London-based studio.";
  const LINE3 = "Check out my work below";

  // stills wait for the full sentence, then slide in one after the other
  const REVEAL_STAGGER_MS = 260;
  function revealPhotos(done) {
    photos.forEach((p, i) => setTimeout(() => p.classList.add("is-in"), i * REVEAL_STAGGER_MS));
    if (done) setTimeout(done, REVEAL_STAGGER_MS * photos.length + 300);
  }

  if (reduced) {
    // no typing, no slide — build every line in its finished state at once
    SEGS.forEach(seg => {
      const el = document.createElement(seg.b ? "b" : "span");
      el.textContent = seg.t;
      textEl.appendChild(el);
    });
    photos.forEach(p => p.classList.add("is-in"));
    if (typed2) typed2.textContent = LINE2;
    if (typed3) typed3.textContent = LINE3;
    if (cta) cta.classList.add("is-in");
    return;
  }

  const CHAR_MS = 45;

  function typePlain(el, text, done) {
    if (!el) { if (done) done(); return; }
    let c = 0;
    (function step() {
      el.textContent = text.slice(0, c);
      if (c++ < text.length) setTimeout(step, CHAR_MS);
      else if (done) done();
    })();
  }

  function typeSeg(i, done) {
    if (i >= SEGS.length) { if (done) done(); return; }
    const seg = SEGS[i];
    const el = document.createElement(seg.b ? "b" : "span");
    textEl.appendChild(el);
    let c = 0;
    (function step() {
      el.textContent = seg.t.slice(0, c);
      if (c++ < seg.t.length) setTimeout(step, CHAR_MS);
      else typeSeg(i + 1, done);
    })();
  }

  function line1() {
    caretEl.classList.add("is-on");
    typeSeg(0, () => revealPhotos(() => {
      caretEl.classList.remove("is-on");
      setTimeout(line2, 300);
    }));
  }
  function line2() {
    if (!typed2) { line3(); return; }
    if (caret2) caret2.classList.add("is-on");
    typePlain(typed2, LINE2, () => {
      if (caret2) caret2.classList.remove("is-on");
      setTimeout(line3, 400);
    });
  }
  function line3() {
    if (!typed3) return;
    if (caret3) caret3.classList.add("is-on");
    typePlain(typed3, LINE3, () => {
      // caret3 keeps blinking — final state of the sequence
      if (cta) setTimeout(() => cta.classList.add("is-in"), 250);
    });
  }

  // starts once the hero has settled — the words' stagger tops out ~0.9s and the
  // character's drop+bounce ends at ~1.3s (.2s delay + 1.1s), so pick up just after that
  setTimeout(line1, 1400);
}

/* =========================================================
   Intro character — a fall/turn/throw sequence stitched from three separate GIFs
   (CSS animations can't splice GIF playback, so this drives it by swapping the <img>
   src on a timer). No walking stage any more — she falls, turns to profile, then
   throws, all without leaving her flex position. The throw clip is
   pokemon-ball-throw.gif — built from a supplied "catch" clip (ball approaches from a
   distance into her hand) by extracting its 5 frames and re-encoding them in REVERSE
   order, which reads as a throw instead (hand → ball leaves → flies off → idle). 5
   frames * 0.2s = 1000ms, shorter than the old throw-paper.gif's 1800ms, so the
   downstream cues (character-vanish, intro-photo-spin-in) moved up to t=3.7s to match.
   Durations otherwise mirror each GIF's own frame count * 0.2s exactly (falling.gif's
   last frame — the wave — is patched to hold 0.7s instead of 0.2s, so the wave itself
   reads for longer: 2300ms total, not 1800), so the swap lands right as the previous
   clip's last frame would have looped. Settles on the static character-south.png once
   the throw clip finishes, matching the vanish + photo-reveal cues in style.css
   (.intro-character, .intro-me-photo).
   ========================================================= */
function initCharacterSequence() {
  const img = document.querySelector(".intro-character img");
  if (!img) return;
  // skip straight to her resting pose — no fall/turn/throw to sit through
  if (reduced) { img.src = "assets/character-south.png"; return; }
  const stages = [
    { src: "assets/character-falling.gif", dur: 2300 },
    { src: "assets/character-rotating.gif", dur: 400 },
    { src: "assets/pokemon-ball-throw.gif?v=2", dur: 1000 },
  ];
  function play(i) {
    if (i >= stages.length) { img.src = "assets/character-south.png"; return; }
    img.src = stages[i].src;
    setTimeout(() => play(i + 1), stages[i].dur);
  }
  play(0);
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
  // the hammer replaces the dot+ring cursor entirely on the landing page (.hammer-cursor
  // only exists in index.html's markup); every other page keeps the usual dot+ring.
  if ($(".hammer-cursor")) initHammerPageCursor("#mini-carousel-stage"); else initCursor();
  initMagnetic();
  initHeader();
  initMarquee();
  initHeroHint();
  initCharacterSequence();
  // initCarousel() — the big personal-photo carousel is off the page for now (removed
  // from index.html below the about section); CAROUSEL_IMAGES and the initCarousel()/
  // initSurferCursor() functions are kept as-is in case it comes back later.
  initAboutMe();
  initMiniCarousel();
  initBubbles();
  initPageTransition();
});
