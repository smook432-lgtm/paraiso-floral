# Engrana — Sitio del portafolio

Sitio estático (HTML, CSS y JavaScript, sin dependencias) para mostrar tus trabajos
de diseño y desarrollo web. Vive en esta carpeta, aparte del sitio de la floristería.

```
engrana/
├── index.html          la página completa
├── css/style.css       todos los estilos
├── js/proyectos.js     ← AQUÍ EDITAS TUS TRABAJOS
├── js/script.js        interacciones (y tu WhatsApp y correo)
├── images/             las fotos de los trabajos
├── netlify.toml        configuración para publicar
├── robots.txt
└── sitemap.xml
```

---

## 1. Cambia tus datos de contacto (lo primero)

Abre `js/script.js`. En las primeras líneas están los dos datos que debes cambiar:

```js
const WHATSAPP = "573146872446";        // 57 (Colombia) + tu número sin espacios
const CORREO   = "hola@engrana.co";     // tu correo de contacto
```

Ahora mismo tiene el número de la floristería como valor de prueba.
Si tu WhatsApp de trabajo es otro, cámbialo ahí y listo: se actualiza en todos los
botones del sitio a la vez.

---

## 2. Agrega o cambia tus trabajos

Todo el portafolio sale del archivo `js/proyectos.js`. Cada trabajo es un bloque
como este:

```js
{
  id: "nombre-corto",                   // sin espacios ni tildes
  nombre: "Barbería El Cafetal",
  rubro: "Barbería · Santa Rosa de Cabal",
  anio: "2026",
  img: "images/trabajo-barberia.jpg",   // deja "" si todavía no tienes foto
  url: "https://elcafetal.com",         // deja "" si no está publicado
  ejemplo: false,                       // true muestra el sello "Ejemplo"
  tags: ["Agenda online", "SEO local"],
  resumen: "Una frase para la tarjeta.",
  reto: "Qué problema tenía el negocio.",
  solucion: "Qué construiste.",
  logros: ["Resultado 1", "Resultado 2"]
}
```

**Las tres últimas tarjetas son ejemplos de muestra** (barbería, restaurante e
inmobiliaria). Están marcadas con el sello *Ejemplo* para que se note que todavía no
son clientes reales. A medida que hagas trabajos de verdad, reemplaza sus textos,
sube la foto y pon `ejemplo: false`.

El primer proyecto de la lista es el que sale grande, a lo ancho. Si quieres destacar
otro, súbelo al primer lugar del archivo.

### Las fotos

Guárdalas en `images/`. Lo ideal es una captura de la portada del sitio, horizontal,
de unos 1280 px de ancho. Mientras no subas la foto (`img: ""`), la tarjeta muestra
un marcador gris que dice *Foto próximamente*, así que puedes publicar ya mismo.

La captura de Paraíso Floral (`images/trabajo-paraiso-floral.jpg`) se tomó del sitio
en vivo; cuando el sitio cambie, puedes reemplazarla por una captura nueva.

---

## 3. Publicar en Netlify

Este es un sitio **independiente** del de la floristería, aunque vivan en el mismo
repositorio. Hay dos formas de publicarlo:

**Opción rápida (arrastrar y soltar):**
1. Entra a https://app.netlify.com
2. En *Sites*, arrastra **solo la carpeta `engrana`** al área de despliegue.
3. Netlify te da una URL tipo `algo-al-azar.netlify.app`. Cámbiala en
   `Site configuration > Site details > Change site name` por algo como `engrana`.

**Opción conectada a GitHub (se actualiza solo con cada cambio):**
1. En Netlify elige *Add new site > Import an existing project* y conecta este
   repositorio.
2. En la configuración de build pon **Base directory: `engrana`**.
3. Deja *Publish directory* en `engrana` y el comando de build vacío.

Cuando compres tu dominio propio, conéctalo desde `Domain management`.

### Después de publicar, cambia el dominio en tres lugares

Mientras no tengas dominio propio queda el provisional `engrana.netlify.app`.
Cuando tengas el tuyo, reemplázalo en:

- `index.html` → las etiquetas `canonical`, `og:url` y `og:image`
- `robots.txt` → la línea `Sitemap:`
- `sitemap.xml` → la etiqueta `<loc>`

---

## Qué trae el sitio

- **Portada** con tu propuesta y dos botones de acción.
- **Trabajos**: tarjetas con captura, etiquetas y una ventana de detalle por proyecto
  (el reto, lo que construiste y los resultados).
- **Servicios**: los cuatro tipos de trabajo que ofreces.
- **Proceso**: los cuatro pasos, explicados sin tecnicismos.
- **Preguntas**: precio, mensualidad, quién edita el contenido, cobertura.
- **Contacto**: un formulario que arma el mensaje y lo abre en tu WhatsApp
  (no necesita servidor ni base de datos), más tus enlaces directos.
- Modo claro y oscuro automáticos, menú para celular y botón flotante de WhatsApp.
