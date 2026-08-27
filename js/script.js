/* ═══════════════════════════════════════════
   Floristería Paraíso Floral — interacciones
   ═══════════════════════════════════════════ */

const WA = "573146872446"; // 57 (Colombia) + 314 687 2446

/* ── Utilidades ── */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const precio = n => "$ " + n.toLocaleString("es-CO");

const waLink = texto => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;

const waPedido = p =>
  waLink(`Hola Paraíso Floral, quiero pedir:\n\n• ${p.nombre} (${p.codigo})\n• Valor: ${precio(p.precio)}\n\n¿Me confirman disponibilidad y entrega?`);

const waVariacion = p =>
  waLink(`Hola, me gusta el ${p.nombre} (${p.codigo}) pero quisiera una variación. ¿Me pueden asesorar?`);

/* ── Estado ── */
let filtro = "todos";
let busqueda = "";
let orden = "destacados";
let favoritos = new Set();

try {
  favoritos = new Set(JSON.parse(localStorage.getItem("pf_favs") || "[]"));
} catch (e) { /* almacenamiento no disponible */ }

const guardarFavs = () => {
  try { localStorage.setItem("pf_favs", JSON.stringify([...favoritos])); }
  catch (e) { /* almacenamiento no disponible */ }
};

/* ── Elementos ── */
const grid       = $("#productsGrid");
const contador   = $("#resultsCount");
const inputBusca = $("#searchInput");
const btnLimpiar = $("#clearSearch");
const chips      = $("#filterButtons");
const selOrden   = $("#sortSelect");
const occGrid    = $("#occGrid");

/* ═══ Catálogo ═══ */

function tarjeta(p, i) {
  const fav = favoritos.has(p.codigo);
  return `
  <article class="card" style="animation-delay:${Math.min(i * 45, 400)}ms">
    <div class="card-media">
      <img src="${p.img}" alt="${p.nombre} — Floristería Paraíso Floral, Santa Rosa de Cabal" loading="lazy">
      <button class="fav ${fav ? "is-on" : ""}" data-fav="${p.codigo}"
              aria-label="Guardar ${p.nombre}" aria-pressed="${fav}">${fav ? "♥" : "♡"}</button>
      <div class="card-overlay">
        <button class="card-quick" data-quick="${p.codigo}">Ver detalle</button>
      </div>
    </div>
    <div class="card-body">
      <span class="card-code">${p.codigo}</span>
      <h3 class="card-name">${p.nombre}</h3>
      <p class="card-desc">${p.descripcion}</p>
      <div class="card-foot">
        <span class="card-price">${precio(p.precio)}</span>
        <a class="card-order" href="${waPedido(p)}" target="_blank" rel="noopener">Pedir</a>
      </div>
    </div>
  </article>`;
}

/* Marcador elegante cuando aún no hay foto */
function ponerPlaceholders(scope = document) {
  $$(".card-media img, .modal-media img", scope).forEach(img => {
    const marcar = () => {
      if (img.dataset.ph) return;
      img.dataset.ph = "1";
      img.style.display = "none";
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.innerHTML = `<span class="ph-mark">PF</span><span class="ph-text">Foto próximamente</span>`;
      img.parentElement.prepend(ph);
    };
    if (img.complete && img.naturalWidth === 0) marcar();
    img.addEventListener("error", marcar, { once: true });
  });
}

function filtrados() {
  const q = busqueda.trim().toLowerCase();

  let lista = PRODUCTS.filter(p => {
    const okFiltro = filtro === "todos" || p.categoria.includes(filtro);
    const okBusca = !q ||
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.categoria.join(" ").includes(q);
    return okFiltro && okBusca;
  });

  if (orden === "precio-asc")  lista.sort((a, b) => a.precio - b.precio);
  if (orden === "precio-desc") lista.sort((a, b) => b.precio - a.precio);
  if (orden === "nombre")      lista.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

  return lista;
}

function pintar() {
  const lista = filtrados();

  contador.textContent = lista.length === 1
    ? "1 arreglo"
    : `${lista.length} arreglos`;

  if (!lista.length) {
    grid.innerHTML = `
      <div class="empty">
        <h3>No encontramos ese arreglo</h3>
        <p>Podemos diseñarlo a tu medida — cuéntanos qué tienes en mente.</p>
        <a class="btn btn-wa" href="${waLink("Hola, busco un arreglo que no vi en el catálogo. ¿Me pueden asesorar?")}" target="_blank" rel="noopener">Escribir por WhatsApp</a>
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(tarjeta).join("");
  ponerPlaceholders(grid);
}

/* ═══ Filtros ═══ */

function aplicarFiltro(valor, desplazar = false) {
  filtro = valor;

  $$(".chip", chips).forEach(c =>
    c.classList.toggle("is-active", c.dataset.filter === valor));

  $$(".occ", occGrid).forEach(o =>
    o.classList.toggle("is-active", o.dataset.occ === valor && valor !== "todos"));

  pintar();

  if (desplazar) {
    $("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

chips.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (chip) aplicarFiltro(chip.dataset.filter);
});

occGrid.addEventListener("click", e => {
  const occ = e.target.closest(".occ");
  if (!occ) return;
  // Al tocar la ocasión ya activa, se vuelve a mostrar todo
  aplicarFiltro(occ.classList.contains("is-active") ? "todos" : occ.dataset.occ, true);
});

inputBusca.addEventListener("input", e => {
  busqueda = e.target.value;
  btnLimpiar.hidden = !busqueda;
  pintar();
});

btnLimpiar.addEventListener("click", () => {
  inputBusca.value = "";
  busqueda = "";
  btnLimpiar.hidden = true;
  pintar();
  inputBusca.focus();
});

selOrden.addEventListener("change", e => {
  orden = e.target.value;
  pintar();
});

/* ═══ Favoritos y vista rápida ═══ */

grid.addEventListener("click", e => {
  const btnFav = e.target.closest("[data-fav]");
  if (btnFav) {
    const cod = btnFav.dataset.fav;
    if (favoritos.has(cod)) {
      favoritos.delete(cod);
      btnFav.classList.remove("is-on");
      btnFav.textContent = "♡";
      btnFav.setAttribute("aria-pressed", "false");
    } else {
      favoritos.add(cod);
      btnFav.classList.add("is-on");
      btnFav.textContent = "♥";
      btnFav.setAttribute("aria-pressed", "true");
    }
    guardarFavs();
    return;
  }

  const btnQuick = e.target.closest("[data-quick]");
  if (btnQuick) abrirModal(btnQuick.dataset.quick);
});

/* ═══ Modal ═══ */

const modal = $("#modal");

function abrirModal(codigo) {
  const p = PRODUCTS.find(x => x.codigo === codigo);
  if (!p) return;

  $("#modalMedia").innerHTML = `<img src="${p.img}" alt="${p.nombre}">`;
  $("#modalCode").textContent  = p.codigo;
  $("#modalTitle").textContent = p.nombre;
  $("#modalDesc").textContent  = p.descripcion;
  $("#modalPrice").textContent = precio(p.precio);
  $("#modalWa").href     = waPedido(p);
  $("#modalCustom").href = waVariacion(p);

  ponerPlaceholders(modal);

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modal.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) cerrarModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) cerrarModal();
});

/* ═══ Navegación ═══ */

const header = $("#header");
const nav = $("#nav");
const navToggle = $("#navToggle");

navToggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", abierto);
  navToggle.setAttribute("aria-expanded", String(abierto));
});

$$(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-stuck", window.scrollY > 20);
}, { passive: true });

/* ═══ Animación al hacer scroll ═══ */

const io = new IntersectionObserver((entradas) => {
  entradas.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("is-in");
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

$$(".reveal").forEach(el => io.observe(el));

/* ═══ Inicio ═══ */

$("#year").textContent = new Date().getFullYear();
ponerPlaceholders();
pintar();
