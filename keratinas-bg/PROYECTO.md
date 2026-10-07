# Página web — Keratinas B&G (Centro de Keratinas B&G · Expertos en Lisos · By Blanca Aguirre)

## Cliente
- Dueña: Blanca Aguirre. Negocio de alisados y terapias capilares.
- Dirección: Cra. 21A #12-19, La Aurora, Dosquebradas (cerca del barrio Santa Mónica, área metropolitana de Pereira).
- WhatsApp del negocio: 305 456 3602 (en código: 573054563602).
- Instagram: @keratinasbyg_pereira (75 mil seguidores). Cuenta alterna: @keratinas_pereirabyg2.
- Facebook: "Keratinas Pereira B&G" (falta el link).
- Google (reseñas): https://share.google/8mNqWLUY4JjavBmK1
- Desde 2020, más de 8.000 clientas. Financiación con Sistecrédito.

## Lo que pidió la clienta
Una "vitrina de servicios", NO una tienda: cada servicio con sus resultados (fotos y video),
y un botón "Pide asesoría" que lleva a WhatsApp. Sin carrito ni pagos.
Productos (shampoo, tratamiento, sérum y litro de keratina) se agregan MÁS ADELANTE.

## Servicios y precios (de sus piezas oficiales)
Alisados:
- Keratina Tradicional — desde $180.000
- Alisado Orgánico CXPlastia — desde $225.000
- Liso Gloss — desde $285.000
- Liso Gloss Premium — desde $375.000
- Liso Gloss Premium Completo — desde $499.000 (alisado + línea capilar completa + una terapia Hidra Gloss)
- Liso Especial — desde $320.000 (niñas, embarazadas y lactancia)
Incluido en todos los alisados: terapia de brillo láser, diagnóstico capilar, corte de puntas (en alisados completos).
Terapias: Head Spa Completo $120.000 · Ice Gloss $165.000 · Hidra Gloss $190.000 (ozono + frío).

## Estado actual
- index.html: página completa y funcional. Todo es editable desde el objeto CONFIG al inicio del script.
- Las imágenes viven en assets/ (fotos, reseñas y logos); ya no hay base64 en el HTML.
  originales/ (archivos tal como los mandó la clienta) no está en el repositorio: no hace parte del sitio.
- Fotos de servicios recortadas en 2:3 desde los afiches de originales/, sin texto del afiche.
  Lo ideal es reemplazarlas por las fotos SIN texto (las bases de los afiches) cuando la clienta las envíe.
- Diseño: secciones alternadas negro/crema, fotos en arcos con filete dorado (espejos del local),
  menú de pantalla completa en celular y botón flotante "Pide asesoría" que aparece al bajar.
- Orden de la página (pedido 07-oct): inicio (foto centrada) → Incluido en los alisados → Alisados
  (del más caro al más barato, uno debajo del otro; en computador, cuadrícula de 3) → Resultados → Visítanos.
- Terapias capilares: se quitaron de la página a pedido. Sus datos siguen en CONFIG.terapias por si vuelven.
- Tarjetas de servicio: la foto ajusta su alto a la pantalla para que cada tarjeta (foto, precio y botón)
  quepa completa, del celular más bajo al computador. Verificado en 7 tamaños de pantalla.
- Lista para publicar en Netlify (netlify.toml en esta carpeta). Instrucciones en README.md.
- Marca: negro #070605, dorado #c9a24a / #ecd28e, crema #f6f0e4. Tipografías: Cormorant Garamond + Jost.
  Fotos enmarcadas en arcos (como los espejos dorados de su local).
- 3 reseñas reales de Google con fotos de antes/después (Natalia G., Ana Elizabeth G., Arle C.).

## Pendiente
1. Videos: uno por servicio (sobre todo los alisados). Clips de 10–15 s, sin sonido, en bucle,
   que solo carguen cuando la tarjeta está en pantalla. El soporte ya está listo y probado: archivo en
   assets/videos/ + su nombre en el campo `video` del servicio. MP4 720×960 (3:4), máximo 1,5 MB (ver README.md).
2. Horarios de atención (CONFIG.horarios) y link de Facebook (CONFIG.facebook).
3. Publicarla en internet con dominio propio. Al tener el dominio: sitemap.xml y línea Sitemap en robots.txt.

## Reglas
- No inventar reseñas, precios, beneficios ni datos del negocio. Si falta algo, preguntar.
- Toda página o cambio debe verse profesional y con efectos visuales sutiles (entradas suaves,
  micro-interacciones, hover), sin recargar.
- Debe cargar rápido en celular: la mayoría de clientas llegan desde Instagram.
