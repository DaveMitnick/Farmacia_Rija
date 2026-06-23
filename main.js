/* ════════════════════════════════════════════════
   FARMACIA RIJA — main.js
   ════════════════════════════════════════════════ */

// ── AOS (Animate On Scroll) ──
AOS.init({ duration: 700, once: true, offset: 80 });

// ══════════════════════════════════════
// DATOS DE PRODUCTOS (del Catálogo Real)
// ══════════════════════════════════════
const products = [
  {
    id: 0,
    name: 'Complejo B + B12',
    image: 'image/complejo-b12.png',
    category: 'ampollas',
    icon: 'bi-capsule-pill',
    lab: 'Panzyma',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Ampolla de Complejo B con B12. Administración intramuscular e intravenosa. Caja x 1 ampolla.',
    badge: 'hot',
    badgeText: 'Popular',
    benefits: [
      'Vitaminas del grupo B',
      'Administración IM e IV',
      'Apoya el sistema nervioso',
      'Alta concentración'
    ]
  },
  {
    id: 1,
    name: 'Artri Ajo King',
    category: 'vitaminas',
    icon: 'bi-heart-pulse-fill',
    lab: 'Varios',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Suplemento natural con ajo. Frasco x 100 tabletas. Administración oral. Apoya la salud cardiovascular.',
    badge: 'new',
    badgeText: 'Disponible',
    benefits: [
      'Extracto natural de ajo',
      'Apoya la salud cardiovascular',
      'Antioxidante natural',
      '100 tabletas por frasco'
    ]
  },
  {
    id: 2,
    name: 'Ácido Fólico 5mg',
    category: 'vitaminas',
    icon: 'bi-flower1',
    lab: 'Caplin',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Ácido fólico 5mg en tabletas. Caja x 100 tabletas. Esencial durante el embarazo y para la producción de glóbulos rojos.',
    badge: 'sale',
    badgeText: 'Oferta',
    benefits: [
      'Esencial en el embarazo',
      'Producción de glóbulos rojos',
      'Caja x 100 tabletas',
      'Laboratorio Caplin'
    ]
  },
  {
    id: 3,
    name: 'Albendazol 400mg',
    image: 'image/Albendazol400.png',
    category: 'medicamentos',
    icon: 'bi-shield-plus',
    lab: 'Caplin',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Antiparasitario Albendazol 400mg masticable. Caja x 100 tabletas. Administración oral.',
    badge: 'hot',
    badgeText: 'Popular',
    benefits: [
      'Antiparasitario amplio espectro',
      'Presentación masticable',
      'Caja x 100 tabletas',
      'Administración oral'
    ]
  },
  {
    id: 4,
    name: 'Complejo B Tabletas',
    category: 'vitaminas',
    icon: 'bi-capsule',
    lab: 'Alfa',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Complejo B en tabletas. Caja x 250 tabletas. Laboratorio Alfa. Esencial para el sistema nervioso.',
    badge: 'new',
    badgeText: 'Disponible',
    benefits: [
      'Vitaminas B completo',
      'Caja x 250 tabletas',
      'Apoya el sistema nervioso',
      'Alta disponibilidad'
    ]
  },
  {
    id: 5,
    name: 'Avamigran',
    category: 'medicamentos',
    icon: 'bi-activity',
    lab: 'Althian Pharma',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Antimigrañoso Avamigran. Caja x 100 comprimidos. Laboratorio Althian Pharma. Administración oral.',
    badge: 'sale',
    badgeText: 'Oferta',
    benefits: [
      'Antimigrañoso efectivo',
      'Caja x 100 comprimidos',
      'Administración oral',
      'Laboratorio certificado'
    ]
  },
  {
    id: 6,
    name: 'Dexa-Doceplex',
    image: 'image/Dexa-Doceplex.png',
    category: 'ampollas',
    icon: 'bi-lightning-charge',
    lab: 'Merck',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Ampolla Dolo Neurobion x 2ml. Laboratorio Merck. Alivia el dolor con vitaminas del grupo B.',
    badge: 'hot',
    badgeText: 'Muy pedido',
    benefits: [
      'Laboratorio Merck original',
      'Vitaminas B1, B6, B12',
      'Alivio del dolor neuropático',
      'Ampolla de 2ml'
    ]
  },
  {
    id: 7,
    name: 'Metronidazol 500mg',
    category: 'medicamentos',
    icon: 'bi-prescription2',
    lab: 'Caplin',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Metronidazol 500mg en tabletas. Caja x 100 tabletas. Laboratorio Caplin. Antiparasitario y antibacteriano.',
    badge: 'new',
    badgeText: 'Disponible',
    benefits: [
      'Antiparasitario potente',
      'Caja x 100 tabletas',
      'Laboratorio Caplin',
      'Administración oral'
    ]
  },
  {
    id: 8,
    name: 'Ceftriaxona 1gr',
    category: 'ampollas',
    icon: 'bi-syringe',
    lab: 'Caplin',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Ceftriaxona 1gr en ampolla. Laboratorio Caplin. Antibiótico cefalosporina de amplio espectro. Administración intramuscular.',
    badge: 'hot',
    badgeText: 'Popular',
    benefits: [
      'Antibiótico de amplio espectro',
      'Ampolla de 1 gramo',
      'Laboratorio Caplin',
      'Administración IM'
    ]
  },
  {
    id: 9,
    name: 'Dermacol Spray 70%',
    category: 'personal',
    icon: 'bi-droplet-fill',
    lab: 'Ceguel',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Alcohol en spray al 70% para higiene y desinfección. Presentaciones de 60ml, 120ml y 500ml.',
    badge: 'sale',
    badgeText: 'Oferta',
    benefits: [
      'Desinfectante al 70%',
      'Formato spray práctico',
      '3 presentaciones disponibles',
      'Laboratorio Ceguel'
    ]
  },
  {
    id: 10,
    name: 'Cetirizina Jarabe',
    category: 'jarabes',
    icon: 'bi-cup-straw',
    lab: 'Generifar',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Cetirizina 5mg/5ml en jarabe de 60ml. Antialérgico para adultos y niños. Administración oral.',
    badge: 'new',
    badgeText: 'Disponible',
    benefits: [
      'Antialérgico efectivo',
      'Para adultos y niños',
      'Frasco de 60ml',
      'Laboratorio Generifar'
    ]
  },
  {
    id: 11,
    name: 'Dolo-Nervilan',
    category: 'ampollas',
    icon: 'bi-bandaid-fill',
    lab: 'Lancasco',
    price: 'Consultar precio',
    oldPrice: null,
    desc: 'Ampolla Dolo-Nervilan x 2ml. Laboratorio Lancasco. Analgésico con vitaminas del grupo B para dolor neuropático.',
    badge: 'hot',
    badgeText: 'Popular',
    benefits: [
      'Alivio del dolor',
      'Vitaminas grupo B',
      'Ampolla de 2ml',
      'Laboratorio Lancasco'
    ]
  }
];

// ══════════════════════════════════════
// RENDERIZAR PRODUCTOS
// ══════════════════════════════════════
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search" style="font-size:3rem;color:var(--gray-400)"></i>
        <p class="mt-3 text-muted">No se encontraron productos.</p>
      </div>`;
    return;
  }
  grid.innerHTML = list.map((p, idx) => `
    <div class="col-6 col-lg-4" data-aos="fade-up" data-category="${p.category}" data-name="${p.name.toLowerCase()}">
      <div class="product-card">
        <div class="product-img-wrap">
          <div class="product-icon-wrap" style="${p.image ? 'background:transparent;box-shadow:none;' : ''}">
            ${p.image
              ? `<img src="${p.image}" alt="${p.name}" style="width:90px;height:90px;object-fit:contain;border-radius:8px;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.15));">`
              : `<i class="bi ${p.icon}" style="color:${idx % 2 === 0 ? 'var(--red)' : 'var(--blue)'}"></i>`
            }
          </div>
          <span class="product-badge badge-${p.badge}">${p.badgeText}</span>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category.toUpperCase()}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-lab"><i class="bi bi-building me-1"></i>${p.lab}</div>
          <div class="product-desc">${p.desc.substring(0, 70)}...</div>
          <div class="d-flex align-items-center justify-content-between mb-3">
            <span class="product-price">${p.price}</span>
            ${p.oldPrice ? `<span class="product-price-old">${p.oldPrice}</span>` : ''}
          </div>
          <button class="btn-card" onclick="openModal(${p.id})">
            <i class="bi bi-eye me-1"></i>Ver Más
          </button>
        </div>
      </div>
    </div>
  `).join('');
  AOS.refresh();
}

// Renderizado inicial
renderProducts(products);

// ══════════════════════════════════════
// FILTROS DE PRODUCTOS
// ══════════════════════════════════════
function filterProducts(q) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.category.includes(q.toLowerCase()) ||
    p.lab.toLowerCase().includes(q.toLowerCase())
  );
  renderProducts(filtered);
}

function filterByCategory(cat) {
  document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  renderProducts(cat === 'todos' ? products : products.filter(p => p.category === cat));
}

// ══════════════════════════════════════
// MODAL DE PRODUCTO
// ══════════════════════════════════════
function openModal(id) {
  const p = products[id];
  document.getElementById('modalTitle').textContent = p.name;
  const modalIconEl = document.getElementById('modalIcon');
  if (p.image) {
    modalIconEl.className = '';
    modalIconEl.style = 'font-size:0';
    // Replace icon with image in modal
    const wrap = modalIconEl.parentElement;
    let existingImg = wrap.querySelector('.modal-product-real-img');
    if (!existingImg) {
      existingImg = document.createElement('img');
      existingImg.className = 'modal-product-real-img';
      existingImg.style = 'width:120px;height:120px;object-fit:contain;border-radius:12px;filter:drop-shadow(0 6px 16px rgba(0,0,0,0.15));';
      wrap.insertBefore(existingImg, modalIconEl);
    }
    existingImg.src = p.image;
    existingImg.style.display = 'block';
  } else {
    modalIconEl.className = `bi ${p.icon} modal-product-icon`;
    modalIconEl.style = '';
    const existingImg = modalIconEl.parentElement.querySelector('.modal-product-real-img');
    if (existingImg) existingImg.style.display = 'none';
  }
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalLab').textContent = 'Laboratorio: ' + p.lab;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalBenefits').innerHTML = p.benefits.map(b =>
    `<div class="benefit-item"><i class="bi bi-check-circle-fill benefit-icon"></i>${b}</div>`
  ).join('');
  document.getElementById('modalWaBtn').onclick = () =>
    openWhatsApp(`Hola, me interesa el producto: ${p.name} — ${p.lab}`);
  new bootstrap.Modal(document.getElementById('productModal')).show();
}

// ══════════════════════════════════════
// WHATSAPP
// ══════════════════════════════════════
function openWhatsApp(msg) {
  window.open(`https://wa.me/50587654321?text=${encodeURIComponent(msg)}`, '_blank');
}

// ══════════════════════════════════════
// FORMULARIO DE CONTACTO
// ══════════════════════════════════════
function submitForm() {
  showToast('✅ Consulta enviada. Te contactaremos pronto.');
}

function showToast(msg) {
  document.getElementById('toastMsg').textContent = msg;
  new bootstrap.Toast(document.getElementById('toast'), { delay: 3500 }).show();
}

// ══════════════════════════════════════
// MODO OSCURO
// ══════════════════════════════════════
function toggleDark() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('darkIcon').className = isDark ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('darkIcon').className = 'bi bi-sun-fill';
  }
})();

// ══════════════════════════════════════
// NAVBAR: SCROLL Y ENLACE ACTIVO
// ══════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ══════════════════════════════════════
// CHAT EN LÍNEA
// ══════════════════════════════════════
function toggleChat() {
  document.getElementById('chatBox').classList.toggle('open');
}

const chatResponses = [
  '¡Claro que sí! Te puedo ayudar con eso. 😊',
  'Tenemos ese producto disponible. ¿Deseas que te enviemos el precio por WhatsApp?',
  'Nuestros farmacéuticos pueden orientarte mejor. ¿Te contactamos?',
  'Para pedidos a domicilio, escríbenos al WhatsApp: +505 8765-4321 📦',
  'Estamos abiertos de Lunes a Sábado. ¿Necesitas algo más?',
];
let chatIdx = 0;

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  const msgs = document.getElementById('chatMessages');
  msgs.innerHTML += `<div class="chat-msg chat-msg-user">${msg}</div>`;
  input.value = '';
  setTimeout(() => {
    msgs.innerHTML += `<div class="chat-msg chat-msg-bot">${chatResponses[chatIdx % chatResponses.length]}</div>`;
    chatIdx++;
    msgs.scrollTop = msgs.scrollHeight;
  }, 800);
  msgs.scrollTop = msgs.scrollHeight;
}

// ══════════════════════════════════════
// CAROUSEL: SINCRONIZAR INDICADORES
// ══════════════════════════════════════
const indicators = document.querySelectorAll('.carousel-indicators button');
document.getElementById('mainCarousel').addEventListener('slide.bs.carousel', e => {
  indicators.forEach((b, i) => {
    b.style.background = i === e.to ? 'var(--red)' : 'var(--gray-200)';
    b.style.width = i === e.to ? '28px' : '8px';
  });
});
