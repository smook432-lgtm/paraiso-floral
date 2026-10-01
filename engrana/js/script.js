/* ═══════════════════════════════════════════════════════
   Engrana — interacciones

   ⚠ CAMBIA ESTOS DOS DATOS POR LOS TUYOS ANTES DE PUBLICAR
   ═══════════════════════════════════════════════════════ */

const WHATSAPP = "573146872446";        // 57 (Colombia) + tu número sin espacios
const CORREO   = "hola@engrana.co";     // tu correo de contacto

/* ── Utilidades ── */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const waLink = texto => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
const icono  = (id, extra = "") => `<svg class="ico ${extra}" aria-hidden="true"><use href="#${id}"/></svg>`;
const esc    = s => String(s).replace(/[&<>"']/g, c =>
  ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

const telVisible = WHATSAPP.replace(/^57/, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");

/* ═══ 1. Tarjetas de trabajos ═══ */
const grid = $("#works");

const tarjeta = (p, i) => {
  const foto = p.img
    ? `<img src="${esc(p.img)}" alt="Pantalla del sitio de ${esc(p.nombre)}" loading="${i === 0 ? "eager" : "lazy"}" decoding="async">`
    : `<div class="work__ph">${icono("i-image")}<span>Foto próximamente</span></div>`;

  const sello = p.ejemplo
    ? `<span class="badge">Ejemplo</span>`
    : `<span class="badge badge--live">En línea</span>`;

  const verSitio = p.url
    ? `<a class="tbtn" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
         <span>Visitar el sitio</span>${icono("i-arrow-up-right")}
       </a>`
    : "";

  return `
    <article class="work reveal${i === 0 ? " work--wide" : ""}">
      <div class="work__shot">${foto}${sello}</div>
      <div class="work__body">
        <p class="work__rubro">${esc(p.rubro)} · ${esc(p.anio)}</p>
        <h3>${esc(p.nombre)}</h3>
        <p>${esc(p.resumen)}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="work__acts">
          <button class="tbtn tbtn--main" type="button" data-caso="${esc(p.id)}">
            <span>Ver el caso</span>${icono("i-arrow-right")}
          </button>
          ${verSitio}
        </div>
      </div>
    </article>`;
};

if (grid) grid.innerHTML = PROYECTOS.map(tarjeta).join("");

/* ═══ 2. Modal con el caso completo ═══ */
const modal     = $("#modal");
const modalBody = $("#modalBody");
let ultimoFoco  = null;

const abrirCaso = id => {
  const p = PROYECTOS.find(x => x.id === id);
  if (!p || !modal) return;

  ultimoFoco = document.activeElement;

  const foto = p.img
    ? `<div class="modal__shot"><img src="${esc(p.img)}" alt="Pantalla del sitio de ${esc(p.nombre)}"></div>`
    : "";

  const enlace = p.url
    ? `<div class="modal__acts">
         <a class="btn btn--primary" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
           <span>Visitar el sitio</span>${icono("i-arrow-up-right")}
         </a>
       </div>`
    : `<div class="modal__acts">
         <a class="btn btn--primary" href="#contacto" data-close>
           ${icono("i-whatsapp", "ico--solid")}<span>Quiero algo así</span>
         </a>
       </div>`;

  modalBody.innerHTML = `
    ${foto}
    <p class="modal__meta">${esc(p.rubro)} · ${esc(p.anio)}</p>
    <h3 id="modalTitle">${esc(p.nombre)}</h3>
    <h4>El reto</h4>
    <p>${esc(p.reto)}</p>
    <h4>Lo que construí</h4>
    <p>${esc(p.solucion)}</p>
    <h4>Resultados</h4>
    <ul class="ticks">${p.logros.map(l => `<li>${esc(l)}</li>`).join("")}</ul>
    ${enlace}`;

  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("is-open"));
  document.body.style.overflow = "hidden";
  $(".modal__x", modal).focus();
};

const cerrarCaso = () => {
  if (!modal || modal.hidden) return;
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  const fin = () => { modal.hidden = true; modalBody.innerHTML = ""; };
  // Espera a que termine la transición, con un respaldo por si no se dispara
  setTimeout(fin, 240);
  if (ultimoFoco) ultimoFoco.focus();
};

document.addEventListener("click", e => {
  const btn = e.target.closest("[data-caso]");
  if (btn) { abrirCaso(btn.dataset.caso); return; }
  if (e.target.closest("[data-close]")) cerrarCaso();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarCaso();
  // Mantiene el foco dentro del modal mientras está abierto
  if (e.key === "Tab" && modal && !modal.hidden) {
    const f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
      .filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const primero = f[0], ultimo = f[f.length - 1];
    if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
  }
});

/* ═══ 3. Encabezado: vidrio al hacer scroll + botón flotante ═══ */
const head = $("#head");
const fab  = $("#fab");

const alScroll = () => {
  const y = window.scrollY;
  head?.classList.toggle("is-stuck", y > 8);
  fab?.classList.toggle("is-on", y > 600);
};
alScroll();
window.addEventListener("scroll", alScroll, { passive: true });

/* ═══ 4. Menú móvil ═══ */
const burger = $("#burger");
const nav    = $("#nav");

burger?.addEventListener("click", () => {
  const abierto = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(abierto));
  burger.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});

$$("#nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  burger?.setAttribute("aria-expanded", "false");
  burger?.setAttribute("aria-label", "Abrir menú");
}));

/* ═══ 5. Sección activa en el menú ═══ */
const secciones = $$("main section[id]");
const enlaces   = new Map($$("#nav a").map(a => [a.getAttribute("href").slice(1), a]));

if (secciones.length) {
  const spy = new IntersectionObserver(entradas => {
    entradas.forEach(en => {
      const a = enlaces.get(en.target.id);
      if (!a) return;
      if (en.isIntersecting) {
        enlaces.forEach(x => x.classList.remove("is-active"));
        a.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secciones.forEach(s => spy.observe(s));
}

/* ═══ 6. Entradas al hacer scroll, escalonadas ═══ */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
}), { threshold: .15, rootMargin: "0px 0px -8%" });

$$(".reveal").forEach((el, i) => {
  el.style.setProperty("--d", `${Math.min(i % 6, 5) * 70}ms`);
  io.observe(el);
});

/* ═══ 7. Enlaces de contacto ═══ */
const saludo = waLink("Hola Engrana, vi tu portafolio y quiero una página para mi negocio.");

const waDirect = $("#waDirect");
if (waDirect) { waDirect.href = saludo; waDirect.target = "_blank"; waDirect.rel = "noopener noreferrer"; }
const waLabel = $("#waLabel");
if (waLabel) waLabel.textContent = telVisible;

const mailDirect = $("#mailDirect");
if (mailDirect) mailDirect.href = `mailto:${CORREO}?subject=${encodeURIComponent("Quiero una página para mi negocio")}`;
const mailLabel = $("#mailLabel");
if (mailLabel) mailLabel.textContent = CORREO;

$("#headCta")?.setAttribute("href", "#contacto");
$("#fab")?.setAttribute("href", saludo);
$("#fab")?.setAttribute("target", "_blank");
$("#fab")?.setAttribute("rel", "noopener noreferrer");

/* ═══ 8. Formulario → mensaje de WhatsApp listo ═══ */
const form   = $("#form");
const formOk = $("#formOk");

const marcarError = (campo, mal) => {
  const cont = campo.closest(".field");
  cont.classList.toggle("is-bad", mal);
  const aviso = $(`.err[data-err="${campo.name}"]`, cont);
  if (aviso) aviso.hidden = !mal;
  campo.setAttribute("aria-invalid", String(mal));
};

form?.addEventListener("submit", e => {
  e.preventDefault();

  const nombre  = $("#f-nombre");
  const negocio = $("#f-negocio");
  const tipo    = $("#f-tipo").value;
  const msg     = $("#f-msg").value.trim();

  const faltaNombre  = nombre.value.trim() === "";
  const faltaNegocio = negocio.value.trim() === "";
  marcarError(nombre, faltaNombre);
  marcarError(negocio, faltaNegocio);

  if (faltaNombre || faltaNegocio) {
    if (formOk) formOk.hidden = true;
    (faltaNombre ? nombre : negocio).focus();
    return;
  }

  const texto =
`Hola Engrana, quiero una página para mi negocio.

*Nombre:* ${nombre.value.trim()}
*Negocio:* ${negocio.value.trim()}
*Necesito:* ${tipo}` + (msg ? `

*Cuéntame:*
${msg}` : "");

  window.open(waLink(texto), "_blank", "noopener");
  if (formOk) formOk.hidden = false;
});

// Quita el aviso de error apenas la persona empieza a escribir
["#f-nombre", "#f-negocio"].forEach(sel => {
  $(sel)?.addEventListener("input", e => {
    if (e.target.value.trim() !== "") marcarError(e.target, false);
  });
});

// Si vuelve a editar el formulario, la confirmación ya no aplica
form?.addEventListener("input", () => { if (formOk) formOk.hidden = true; });

/* ═══ 9. Año del pie ═══ */
const year = $("#year");
if (year) year.textContent = new Date().getFullYear();
