// ==========================================================
// AFERA CONFEITARIA — dados do cardápio + interações
// ==========================================================

const WHATS_NUMBER = "5585986304780";

function waLink(itemName, price){
  const msg = `Olá! Quero pedir: ${itemName} (${price}).`;
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ---------- ícones ----------

const ICONS = {
  cake: `<path d="M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/><path d="M3 10a4 4 0 0 1 4-4c1.2 0 1.8.7 2.5.7S10.8 6 12 6s1.8.7 2.5.7S15.8 6 17 6a4 4 0 0 1 4 4"/><path d="M12 6V3"/>`,
  salty: `<path d="M12 3c3.2 4 6 7.3 6 11a6 6 0 0 1-12 0c0-3.7 2.8-7 6-11z"/>`,
  sweet: `<circle cx="12" cy="12" r="4.2"/><path d="M6 8l3 2M18 8l-3 2M6 16l3-2M18 16l-3-2"/>`,
  cupcake: `<path d="M7 12h10l-1.1 7.2a2 2 0 0 1-2 1.8h-3.8a2 2 0 0 1-2-1.8L7 12z"/><path d="M5.5 12a6.5 4 0 0 1 13 0"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1"/>`,
  drink: `<path d="M6.5 7h11l-1.15 11.3a2 2 0 0 1-2 1.7H9.65a2 2 0 0 1-2-1.7L6.5 7z"/><path d="M5 7h14"/><path d="M9 7l1-3h4l1 3"/>`,
  topper: `<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.4"/><path d="M21 16l-5-4.5-4 3.5-2-1.7-5 4.2"/>`,
  info: `<circle cx="12" cy="12" r="9.2"/><path d="M12 11v5.5"/><circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none"/>`,
  flame: `<path d="M12 3c1.5 2.4-1 3.6-1 6a3 3 0 0 0 6 0c1.4 1.6 2 3.2 2 5a7 7 0 1 1-14 0c0-3.8 2.6-6.4 4-8 1 1.3.6 2.4 1 3.4.5-2 .8-3.6 2-6.4z"/>`,
  pie: `<circle cx="12" cy="12" r="9.2"/><path d="M12 12L12 3.2M12 12l7.8-4.5"/><path d="M12 12l-1 9.1M12 12l6.2 6.6"/>`,
  snow: `<path d="M12 2v20M4.8 6.8l14.4 10.4M19.2 6.8L4.8 17.2"/><path d="M12 6l-2 1.6M12 6l2 1.6M12 18l-2-1.6M12 18l2-1.6M6 9l.6 2.3-2.2.9M6 15l.6-2.3-2.2-.9M18 9l-.6 2.3 2.2.9M18 15l-.6-2.3 2.2-.9"/>`,
  arrow: `<path d="M5 12h14M13 6l6 6-6 6"/>`
};

function icon(name, size = 16){
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

// ---------- dados ----------

const kits = [
  {
    name: "Bolo + Salgados",
    serves: "até 15 pessoas",
    price: "R$ 95,00",
    items: [
      { icon: "cake", text: "Bolo de 10 fatias" },
      { icon: "salty", text: "50 salgados variados" }
    ]
  },
  {
    name: "Kit Mini Bolo",
    serves: "até 20 pessoas",
    price: "R$ 120,00",
    items: [
      { icon: "cake", text: "Bolo de 10 fatias" },
      { icon: "salty", text: "100 salgados variados" }
    ]
  },
  {
    name: "Mini Kit Completo",
    serves: "até 20 pessoas",
    price: "R$ 145,00",
    featured: true,
    badge: "Mais pedido",
    items: [
      { icon: "cake", text: "Bolo de 12 fatias" },
      { icon: "topper", text: "Topo impresso incluso" },
      { icon: "salty", text: "50 salgados variados" },
      { icon: "sweet", text: "30 doces variados" },
      { icon: "cupcake", text: "4 cupcakes" },
      { icon: "drink", text: "Refrigerante de 1 litro" }
    ]
  },
  {
    name: "Kit 1",
    serves: "sob consulta",
    price: "R$ 163,00",
    items: [
      { icon: "info", text: "Consulte a composição completa pelo WhatsApp" }
    ]
  },
  {
    name: "Kit 2",
    serves: "até 35 pessoas",
    price: "R$ 195,00",
    items: [
      { icon: "cake", text: "Bolo de 20 fatias" },
      { icon: "salty", text: "200 salgados variados" }
    ]
  },
  {
    name: "Kit 1 Completo",
    serves: "até 35 pessoas",
    price: "R$ 197,00",
    items: [
      { icon: "cake", text: "Bolo de 20 fatias" },
      { icon: "topper", text: "Topo impresso incluso" },
      { icon: "salty", text: "100 salgados variados" },
      { icon: "sweet", text: "50 doces variados" },
      { icon: "drink", text: "Refrigerante de 2 litros" }
    ]
  },
  {
    name: "Kit 3",
    serves: "até 50 pessoas",
    price: "R$ 225,00",
    featured: true,
    badge: "Festa grande",
    items: [
      { icon: "cake", text: "Bolo de 30 fatias" },
      { icon: "topper", text: "Topo impresso incluso" },
      { icon: "salty", text: "200 salgados variados" }
    ]
  }
];

const bolosAvulsos = [
  { name: "Bolo 10 fatias", serves: "até 12 pessoas", price: "R$ 75,00" },
  { name: "Bolo 20 fatias", serves: "até 22 pessoas", price: "R$ 115,00" },
  { name: "Bolo 30 fatias", serves: "até 33 pessoas", price: "R$ 145,00" },
  { name: "Bolo 40 fatias", serves: "até 44 pessoas", price: "R$ 180,00" },
  { name: "Bolo 50 fatias", serves: "até 55 pessoas", price: "R$ 260,00" }
];

const extraCategories = [
  {
    title: "Salgados e doces avulsos",
    items: [
      { icon: "salty", name: "100 salgados variados", note: "Avulso", price: "R$ 40,00" },
      { icon: "sweet", name: "100 doces variados", note: "Avulso", price: "R$ 70,00" }
    ]
  },
  {
    title: "Porções de salgados fritos",
    items: [
      { icon: "flame", name: "Porção de salgados fritos", note: "25 unidades", price: "R$ 10,00" },
      { icon: "flame", name: "Porção de salgados fritos", note: "37 unidades", price: "R$ 15,00" },
      { icon: "flame", name: "Porção de salgados fritos", note: "50 unidades", price: "R$ 20,00" }
    ]
  }
];

const congelados = [
  { icon: "pie", name: "Empadão de frango", note: "Unidade", price: "R$ 70,00" },
  { icon: "snow", name: "Salgados congelados", note: "Coxinha, bola de queijo, misto e carne — 50 unidades", price: "R$ 18,00" }
];

// ---------- render ----------

function renderKits(){
  const grid = document.getElementById("kits-grid");
  grid.innerHTML = kits.map(k => `
    <article class="kit-card ${k.featured ? "is-featured" : ""}">
      ${k.badge ? `<span class="kit-badge">${k.badge}</span>` : ""}
      <div class="kit-head">
        <h3 class="kit-name">${k.name}</h3>
        ${k.serves ? `<span class="kit-serves">${k.serves}</span>` : ""}
      </div>
      <ul class="kit-items">
        ${k.items.map(it => `
          <li class="kit-item">
            <span class="kit-item-icon">${icon(it.icon, 15)}</span>
            <span>${it.text}</span>
          </li>
        `).join("")}
      </ul>
      <div class="kit-footer">
        <div class="kit-price"><small>Preço</small>${k.price}</div>
        <a class="kit-order-btn" href="${waLink(k.name, k.price)}" target="_blank" rel="noopener" aria-label="Pedir ${k.name} no WhatsApp">
          <span>Pedir</span>
          ${icon("arrow", 15)}
        </a>
      </div>
    </article>
  `).join("");
}

function renderBolos(){
  const table = document.getElementById("bolos-table");
  table.innerHTML = bolosAvulsos.map(b => `
    <a class="bolo-row" href="${waLink(b.name, b.price)}" target="_blank" rel="noopener">
      <div class="bolo-name-wrap">
        <span class="bolo-icon">${icon("cake", 16)}</span>
        <span class="bolo-text">
          <span class="bolo-name">${b.name}</span>
          <span class="bolo-serves">${b.serves}</span>
        </span>
      </div>
      <div class="bolo-right">
        <span class="bolo-price">${b.price}</span>
        <span class="bolo-arrow">${icon("arrow", 14)}</span>
      </div>
    </a>
  `).join("");
}

function extraCard(e){
  return `
    <a class="extra-card" href="${waLink(e.name + (e.note ? " — " + e.note : ""), e.price)}" target="_blank" rel="noopener">
      <span class="extra-icon">${icon(e.icon, 17)}</span>
      <div class="extra-body">
        <p class="extra-name">${e.name}</p>
        <p class="extra-note">${e.note}</p>
      </div>
      <span class="extra-price">${e.price}</span>
    </a>
  `;
}

function renderExtras(){
  const wrap = document.getElementById("extras-wrap");
  wrap.innerHTML = extraCategories.map(cat => `
    <div class="extra-category">
      <h3 class="extra-category-title">${cat.title}</h3>
      <div class="menu-grid menu-grid--compact">
        ${cat.items.map(extraCard).join("")}
      </div>
    </div>
  `).join("");
}

function renderFrozen(){
  const grid = document.getElementById("frozen-grid");
  grid.innerHTML = congelados.map(extraCard).join("");
}

renderKits();
renderBolos();
renderExtras();
renderFrozen();

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- menu mobile ----------

(function mobileNav(){
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-mobile");
  if (!toggle || !menu) return;

  function closeMenu(){
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
})();

// ---------- hero canvas: partículas de "açúcar" flutuando ----------

(function heroParticles(){
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, particles;
  const COUNT = 46;

  function resize(){
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function initParticles(){
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.8 + 0.6) * devicePixelRatio,
      speed: (Math.random() * 0.25 + 0.06) * devicePixelRatio,
      drift: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(150, 175, 255, ${p.alpha})`;
      ctx.fill();

      if (!reduceMotion){
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      }
    });
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  initParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    initParticles();
    if (reduceMotion) draw();
  });
})();
