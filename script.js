// ==========================================================
// AFERA CONFEITARIA — dados do cardápio + interações
// ==========================================================

const WHATS_NUMBER = "5585986304780";

function waLink(itemName, price){
  const msg = `Olá! Quero pedir: ${itemName} (${price}).`;
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ---------- dados ----------

const kits = [
  {
    name: "Bolo + Salgados",
    desc: "Bolo de 10 fatias com 50 salgados variados. Ideal para festas menores.",
    price: "R$ 95,00"
  },
  {
    name: "Kit Mini Bolo",
    desc: "Bolo de 10 fatias com 100 salgados variados.",
    price: "R$ 120,00"
  },
  {
    name: "Mini Kit Completo",
    desc: "Bolo de 12 fatias com topo impresso incluso, 50 salgados, 30 doces, 4 cupcakes e refrigerante de 1 litro.",
    price: "R$ 145,00",
    featured: true,
    badge: "Mais pedido"
  },
  {
    name: "Kit 1",
    desc: "Kit festa tamanho intermediário — consulte a composição completa pelo WhatsApp.",
    price: "R$ 163,00"
  },
  {
    name: "Kit 2",
    desc: "Bolo de 20 fatias com 200 salgados variados.",
    price: "R$ 195,00"
  },
  {
    name: "Kit 1 Completo",
    desc: "Bolo de 20 fatias com topo impresso incluso, 100 salgados, 50 doces e refrigerante de 2 litros.",
    price: "R$ 197,00"
  },
  {
    name: "Kit 3",
    desc: "Bolo de 30 fatias com topo impresso incluso e 200 salgados variados.",
    price: "R$ 225,00",
    featured: true,
    badge: "Festa grande"
  }
];

const bolosAvulsos = [
  { name: "Bolo 10 fatias", price: "R$ 75,00" },
  { name: "Bolo 20 fatias", price: "R$ 115,00" },
  { name: "Bolo 30 fatias", price: "R$ 145,00" },
  { name: "Bolo 40 fatias", price: "R$ 180,00" },
  { name: "Bolo 50 fatias", price: "R$ 260,00" }
];

const extras = [
  { name: "100 salgados variados", note: "Avulso", price: "R$ 40,00" },
  { name: "100 doces variados", note: "Avulso", price: "R$ 70,00" },
  { name: "Porção de salgados fritos", note: "25 unidades", price: "R$ 10,00" },
  { name: "Porção de salgados fritos", note: "37 unidades", price: "R$ 15,00" },
  { name: "Porção de salgados fritos", note: "50 unidades", price: "R$ 20,00" }
];

const congelados = [
  { name: "Empadão de frango", note: "Unidade", price: "R$ 70,00" },
  { name: "Salgados congelados", note: "Coxinha, bola de queijo, misto e carne — 50 unidades", price: "R$ 18,00" }
];

// ---------- render ----------

function renderKits(){
  const grid = document.getElementById("kits-grid");
  grid.innerHTML = kits.map(k => `
    <article class="kit-card ${k.featured ? "is-featured" : ""}">
      ${k.badge ? `<span class="kit-badge">${k.badge}</span>` : ""}
      <h3 class="kit-name">${k.name}</h3>
      <p class="kit-desc">${k.desc}</p>
      <div class="kit-footer">
        <div class="kit-price"><small>Preço</small>${k.price}</div>
        <a class="kit-order-btn" href="${waLink(k.name, k.price)}" target="_blank" rel="noopener" aria-label="Pedir ${k.name} no WhatsApp">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </article>
  `).join("");
}

function renderBolos(){
  const table = document.getElementById("bolos-table");
  table.innerHTML = bolosAvulsos.map(b => `
    <a class="bolo-row" href="${waLink(b.name, b.price)}" target="_blank" rel="noopener">
      <span class="bolo-name">${b.name}</span>
      <span class="bolo-price">${b.price}</span>
    </a>
  `).join("");
}

function renderExtras(){
  const grid = document.getElementById("extras-grid");
  grid.innerHTML = extras.map(e => `
    <a class="extra-card" href="${waLink(e.name + (e.note ? " — " + e.note : ""), e.price)}" target="_blank" rel="noopener">
      <div>
        <p class="extra-name">${e.name}</p>
        <p class="extra-note">${e.note}</p>
      </div>
      <span class="extra-price">${e.price}</span>
    </a>
  `).join("");
}

function renderFrozen(){
  const grid = document.getElementById("frozen-grid");
  grid.innerHTML = congelados.map(f => `
    <a class="extra-card" href="${waLink(f.name, f.price)}" target="_blank" rel="noopener">
      <div>
        <p class="extra-name">${f.name}</p>
        <p class="extra-note">${f.note}</p>
      </div>
      <span class="extra-price">${f.price}</span>
    </a>
  `).join("");
}

renderKits();
renderBolos();
renderExtras();
renderFrozen();

document.getElementById("year").textContent = new Date().getFullYear();

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
