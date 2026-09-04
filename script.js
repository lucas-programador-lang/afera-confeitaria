// ==========================================================
// AFERA CONFEITARIA — dados do cardápio + interações
// ==========================================================

const WHATS_NUMBER = "5585986304780";

function waLink(itemName, price){
  const msg = `Olá! Quero pedir: ${itemName} (${price}).`;
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const PLACEHOLDER_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/><path d="M3 10a4 4 0 0 1 4-4c1.2 0 1.8.7 2.5.7S10.8 6 12 6s1.8.7 2.5.7S15.8 6 17 6a4 4 0 0 1 4 4"/><path d="M12 6V3"/></svg>`;

function cardPhoto(item, { badge, serves } = {}){
  const inner = item.photo
    ? `<img src="${item.photo}" alt="${item.name}" loading="lazy">`
    : PLACEHOLDER_ICON;
  return `
    <div class="item-card-photo">
      ${badge ? `<span class="item-card-badge">${badge}</span>` : ""}
      ${inner}
      ${serves ? `<span class="item-card-serves">${serves}</span>` : ""}
    </div>
  `;
}

function priceParts(price){
  // "R$ 145,00" -> { whole: "145", cents: "00" }
  const match = price.match(/R\$\s*([\d.]+),(\d{2})/);
  if (!match) return { whole: price, cents: "" };
  return { whole: match[1], cents: match[2] };
}

// ---------- dados ----------
//
// Pra colocar uma foto em qualquer item, adicione a propriedade "photo"
// com o caminho do arquivo, ex:
//   { name: "Kit 3", ..., photo: "img/kit-3.jpg" }
// Sem essa propriedade, o item mostra o ícone de bolo como espaço reservado.

const kitCategories = [
  {
    title: "Kits pequenos",
    note: "até 20 pessoas",
    items: [
      {
        name: "Bolo + Salgados",
        serves: "Até 15 pessoas",
        desc: "Bolo de 10 fatias com 50 salgados variados. Ideal para festas menores.",
        price: "R$ 95,00"
      },
      {
        name: "Kit Mini Bolo",
        serves: "Até 20 pessoas",
        desc: "Bolo de 10 fatias com 100 salgados variados.",
        price: "R$ 120,00"
      },
      {
        name: "Mini Kit Completo",
        serves: "Até 20 pessoas",
        desc: "Bolo de 12 fatias com topo impresso incluso, 50 salgados, 30 doces, 4 cupcakes e refrigerante de 1 litro.",
        price: "R$ 145,00",
        featured: true,
        tag: "o mais pedido da casa"
      }
    ]
  },
  {
    title: "Kits médios",
    note: "até 35 pessoas",
    items: [
      {
        name: "Kit 1",
        serves: "Sob consulta",
        desc: "Kit festa tamanho intermediário — consulte a composição completa pelo WhatsApp.",
        price: "R$ 163,00"
      },
      {
        name: "Kit 2",
        serves: "Até 35 pessoas",
        desc: "Bolo de 20 fatias com 200 salgados variados.",
        price: "R$ 195,00"
      },
      {
        name: "Kit 1 Completo",
        serves: "Até 35 pessoas",
        desc: "Bolo de 20 fatias com topo impresso incluso, 100 salgados, 50 doces e refrigerante de 2 litros.",
        price: "R$ 197,00"
      }
    ]
  },
  {
    title: "Kits grandes",
    note: "até 50 pessoas",
    items: [
      {
        name: "Kit 3",
        serves: "Até 50 pessoas",
        desc: "Bolo de 30 fatias com topo impresso incluso e 200 salgados variados.",
        price: "R$ 225,00",
        featured: true,
        tag: "para festas grandes"
      }
    ]
  }
];

const bolosAvulsos = [
  { name: "Bolo 10 fatias", note: "Até 12 pessoas", perSlice: "R$ 7,50/fatia", price: "R$ 75,00" },
  { name: "Bolo 20 fatias", note: "Até 22 pessoas", perSlice: "R$ 5,75/fatia", price: "R$ 115,00" },
  { name: "Bolo 30 fatias", note: "Até 33 pessoas", perSlice: "R$ 4,83/fatia", price: "R$ 145,00" },
  { name: "Bolo 40 fatias", note: "Até 44 pessoas", perSlice: "R$ 4,50/fatia", price: "R$ 180,00" },
  { name: "Bolo 50 fatias", note: "Até 55 pessoas", perSlice: "R$ 5,20/fatia", price: "R$ 260,00" }
];

const extraCategories = [
  {
    title: "Salgados e doces avulsos",
    items: [
      { name: "100 salgados variados", note: "Avulso", price: "R$ 40,00" },
      { name: "100 doces variados", note: "Avulso", price: "R$ 70,00" }
    ]
  },
  {
    title: "Porções de salgados fritos",
    items: [
      { name: "Porção de salgados fritos", note: "25 unidades", price: "R$ 10,00" },
      { name: "Porção de salgados fritos", note: "37 unidades", price: "R$ 15,00" },
      { name: "Porção de salgados fritos", note: "50 unidades", price: "R$ 20,00" }
    ]
  }
];

const congelados = [
  { name: "Empadão de frango", note: "Unidade", price: "R$ 70,00" },
  { name: "Salgados congelados", note: "Coxinha, bola de queijo, misto e carne — 50 unidades", price: "R$ 18,00" }
];

// ---------- render ----------

function kitCard(k){
  const p = priceParts(k.price);
  return `
    <article class="item-card ${k.featured ? "is-featured" : ""}">
      ${cardPhoto(k, { badge: k.tag, serves: k.serves })}
      <div class="item-card-body">
        <h3 class="item-card-name">${k.name}</h3>
        <p class="item-card-desc">${k.desc}</p>
        <div class="item-card-footer">
          <p class="item-card-price"><span class="cur">R$</span>${p.whole}<span class="cents">,${p.cents}</span></p>
          <a class="item-card-btn" href="${waLink(k.name, k.price)}" target="_blank" rel="noopener" aria-label="Pedir ${k.name} no WhatsApp">
            <span>Pedir</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderKits(){
  const wrap = document.getElementById("kits-grid");
  wrap.innerHTML = kitCategories.map(cat => `
    <div class="menu-category">
      <div class="menu-category-head">
        <h3 class="menu-category-title">${cat.title}</h3>
        <span class="menu-category-note">${cat.note}</span>
      </div>
      <div class="card-grid">
        ${cat.items.map(kitCard).join("")}
      </div>
    </div>
  `).join("");
}

function simpleCard(item, note){
  const p = priceParts(item.price);
  return `
    <article class="item-card">
      ${cardPhoto(item)}
      <div class="item-card-body">
        <h3 class="item-card-name">${item.name}</h3>
        <p class="item-card-note">${note}</p>
        <div class="item-card-footer">
          <p class="item-card-price"><span class="cur">R$</span>${p.whole}<span class="cents">,${p.cents}</span></p>
          <a class="item-card-btn item-card-btn--icon" href="${waLink(item.name + (item.note ? " — " + item.note : ""), item.price)}" target="_blank" rel="noopener" aria-label="Pedir ${item.name} no WhatsApp">
            <span>Pedir</span>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderBolos(){
  const wrap = document.getElementById("bolos-table");
  wrap.innerHTML = `<div class="card-grid">
    ${bolosAvulsos.map(b => simpleCard(b, `${b.note} · ${b.perSlice}`)).join("")}
  </div>`;
}

function renderExtras(){
  const wrap = document.getElementById("extras-wrap");
  wrap.innerHTML = extraCategories.map(cat => `
    <div class="menu-category">
      <div class="menu-category-head">
        <h3 class="menu-category-title">${cat.title}</h3>
      </div>
      <div class="card-grid">
        ${cat.items.map(item => simpleCard(item, item.note)).join("")}
      </div>
    </div>
  `).join("");
}

function renderFrozen(){
  const wrap = document.getElementById("frozen-grid");
  wrap.innerHTML = `<div class="card-grid">
    ${congelados.map(item => simpleCard(item, item.note)).join("")}
  </div>`;
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
  const COUNT = 40;

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
