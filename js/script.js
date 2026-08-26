const WHATSAPP_NUMBER = "573146872446"; // 57 = Colombia + número sin espacios

const grid = document.getElementById("productsGrid");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const filterButtons = document.getElementById("filterButtons");

let activeFilter = "todos";
let searchTerm = "";

function formatPrice(n) {
  return "$ " + n.toLocaleString("es-CO");
}

function whatsappLink(product) {
  const msg = `Hola, quiero pedir: ${product.nombre} (${product.codigo}) - ${formatPrice(product.precio)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function productCard(p) {
  return `
    <article class="product-card" data-categorias="${p.categoria.join(",")}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.nombre} - Floristería Paraíso Floral"
             onerror="this.onerror=null; this.replaceWith(Object.assign(document.createElement('div'),{className:'product-placeholder', innerHTML:'<span class=&quot;ph-ico&quot;>🌸</span><span>Foto próximamente</span>'}));">
      </div>
      <div class="product-body">
        <div class="product-code">${p.codigo}</div>
        <h3 class="product-name">${p.nombre}</h3>
        <p class="product-desc">${p.descripcion}</p>
        <div class="product-price">${formatPrice(p.precio)}</div>
        <a class="product-order-btn" href="${whatsappLink(p)}" target="_blank" rel="noopener">
          📱 Pedir por WhatsApp
        </a>
      </div>
    </article>
  `;
}

function render() {
  const term = searchTerm.trim().toLowerCase();

  const filtered = PRODUCTS.filter(p => {
    const matchesFilter = activeFilter === "todos" || p.categoria.includes(activeFilter);
    const matchesSearch =
      term === "" ||
      p.nombre.toLowerCase().includes(term) ||
      p.descripcion.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  resultsCount.textContent = `Mostrando ${filtered.length} producto${filtered.length === 1 ? "" : "s"}`;

  grid.innerHTML = filtered.length
    ? filtered.map(productCard).join("")
    : `<p class="no-results">No encontramos productos con esos criterios. Escríbenos por WhatsApp y te ayudamos.</p>`;
}

filterButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterButtons.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  render();
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  render();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  render();
});

document.getElementById("year").textContent = new Date().getFullYear();

render();
