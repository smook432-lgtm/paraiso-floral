# Página web — Keratinas B&G (Centro de Keratinas B&G · Expertos en Lisos · By Blanca Aguirre)

## Cliente
- Dueña: Blanca Aguirre. Negocio de alisados y terapias capilares.
- Dirección: Cra. 21A #12-19, La Aurora, Dosquebradas (cerca del barrio Santa Mónica, área metropolitana de Pereira).
- WhatsApp del negocio: 305 456 3602 (en código: 573054563602).
- Instagram: @keratinasbyg_pereira (75 mil seguidores). Cuenta alterna: @keratinas_pereirabyg2.
- Facebook: https://www.facebook.com/keratinaspereira
- TikTok: https://www.tiktok.com/@keratinasbyg_pereira
- Google (reseñas): https://share.google/8mNqWLUY4JjavBmK1
- Desde 2020, más de 8.000 clientas. Financiación con Sistecrédito.

## Lo que pidió la clienta
1. (oct-2026) Vitrina de servicios de alisado con botón a WhatsApp. Sin carrito ni pagos.
2. (22-nov-2026) Catálogo de productos capilares B&G Cosmetics.
3. (22-nov-2026) **La página queda enfocada exclusivamente en los productos capilares.** Se quitó todo lo de
   servicios de alisado, precios de servicios, "Incluido en los alisados", citas y ubicación. Se conservan,
   por pedido expreso: "Asesoría por WhatsApp" y "Resultados de nuestros alisados en Google".
   La versión anterior (servicios) queda en el historial de git (último commit con ella: 218a290).

## Catálogo (datos de sus piezas oficiales)
Línea de alisado:
- Liso Gloss (CX Plastia, fórmula nueva mejorada) — 1000 mL — $499.000
- Shampoo Profesional de limpieza, paso 1 alisado — 500 mL — $55.000
Línea de cuidado capilar (Hair Gloss):
- Shampoo Hidratante — 400 mL — precio sin confirmar (la tarjeta dice "Consúltalo"; por los kits sería $45.000)
- Tratamiento Capilar (fórmula mejorada) — 400 mL — $48.000
- Sérum Capilar (suero reparador de puntas con filtro UV) — 30 mL — $35.000
- Repair Gloss (proteína capilar, 6 beneficios en 1) — 180 mL — $55.000
Kits:
- Kit Especial de Post Cuidado (shampoo hidratante + tratamiento + sérum) — $120.000 (antes $128.000)
- Kit Post Cuidado Completo (los anteriores + Repair Gloss) — $169.900 (antes $183.000)

## Estado actual
- index.html: catálogo completo. Orden: portada → Línea de alisado → Cuidado capilar → Kits →
  Resultados de nuestros alisados (3 reseñas reales de Google con antes/después) → Asesoría por WhatsApp.
- Cada producto y kit tiene botón "Pedir por WhatsApp" con su nombre. Botón flotante de asesoría al bajar.
- /productos/ redirige al inicio (fue la dirección del catálogo unos días).
- Fotos de productos recortadas de las piezas de la clienta, sin texto, en formato uniforme.
  Las 24 piezas originales (con texto, para redes) están en el historial de git (commit ca916fb).
- Diseño: negro #070605, dorado #c9a24a / #ecd28e, crema #f6f0e4. Cormorant Garamond + Jost. Arcos dorados.
- Publicación: GitHub Pages (.github/workflows/keratinas-pages.yml); cada cambio en keratinas-bg/ que llega a
  master se publica solo. Dominio keratinasbyg.com registrado en Netlify (renueva 10-sep-2027, US$16,99),
  DNS apuntando a GitHub (4 registros A 185.199.108-111.153 + CNAME www → smook432-lgtm.github.io). HTTPS activo.

## Pendiente
1. Precio del Shampoo Hidratante (confirmar si es $45.000).
2. Envíos: si hacen y a dónde, para ponerlo en la página.
3. Google Search Console y poner el link en Instagram/Google/Facebook.

## Reglas
- No inventar reseñas, precios, beneficios ni datos del negocio. Si falta algo, preguntar.
- Toda página o cambio debe verse profesional y con efectos visuales sutiles (entradas suaves,
  micro-interacciones, hover), sin recargar.
- Debe cargar rápido en celular: la mayoría de clientas llegan desde Instagram.
