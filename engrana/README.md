# Engrana — Sitio del portafolio

Sitio estático (HTML, CSS y JavaScript, sin dependencias) para mostrar tus trabajos
de diseño y desarrollo web. Vive en esta carpeta, aparte del sitio de la floristería.

```
engrana/
├── index.html          la página completa
├── css/style.css       todos los estilos
├── js/proyectos.js     ← AQUÍ EDITAS TUS TRABAJOS
├── js/script.js        interacciones (y tu número de WhatsApp)
├── images/             el logo y las fotos de los trabajos
├── netlify.toml        configuración para publicar
├── robots.txt
└── sitemap.xml
```

---

## 1. Tu número de contacto

Todo el contacto del sitio va por WhatsApp: no hay formulario con servidor ni
correo. El número vive en una sola línea, al inicio de `js/script.js`:

```js
const WHATSAPP = "573115637061";        // 57 (Colombia) + 311 563 7061
```

Si algún día cambias de número, lo editas ahí y se actualiza de una vez en el botón
del encabezado, el botón flotante, la tarjeta de contacto y el mensaje que arma el
formulario.

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

## Identidad visual

Todo el color vive en variables CSS al inicio de `css/style.css`. Si algún día
cambias un tono, lo cambias ahí una sola vez y se actualiza en todo el sitio.

| Variable | Valor | Para qué |
|---|---|---|
| `--bg` | `#111317` | fondo principal |
| `--bg-card` | `#181B20` | tarjetas |
| `--bg-hover` | `#1F232A` | superficies al pasar el cursor |
| `--borde` | `#2A2F37` | bordes de 1 px |
| `--texto` | `#F5F1E8` | títulos y texto principal |
| `--texto-suave` | `#B9B5AC` | párrafos |
| `--texto-tenue` | `#8A867E` | pies de línea y etiquetas |
| `--naranja` | `#FF5A1F` | acciones y acentos |
| `--naranja-claro` | `#FF7442` | el naranja al pasar el cursor |
| `--naranja-fuerte` | `#E04715` | estados presionados |
| `--naranja-tenue` | `rgba(255,90,31,.12)` | fondos de iconos y etiquetas |
| `--verde` | `#22C55E` | **solo** confirmaciones |
| `--rojo` | `#E5484D` | bordes de campos con error |
| `--rojo-texto` | `#F27478` | el texto del error (ver nota) |

**Las reglas que sigue el sitio**

- Proporción 60 % grafito, 30 % textos y tarjetas, 10 % naranja.
- El texto dentro de los botones naranjas va en grafito `#111317`, nunca en blanco.
- El verde aparece en un solo lugar: el mensaje de confirmación al enviar el
  formulario. En ningún otro sitio.
- Por esa regla, **los botones de WhatsApp van en naranja, no en verde**. El icono
  de WhatsApp se mantiene para que se entienda a dónde lleva.
- `--rojo-texto` es un `--rojo` aclarado. El `#E5484D` original sobre una tarjeta da
  4,4:1 de contraste, apenas por debajo del mínimo legible; se usa para el borde del
  campo y la versión aclarada para la letra.

**El sitio es oscuro siempre.** La paleta está construida sobre grafito, así que no
hay versión clara: se ve igual aunque el celular esté en modo claro.

**Tipografías:** Space Grotesk en los títulos e Inter en los textos, cargadas desde
Google Fonts.

**El logo** está en `images/` en cuatro versiones, todas generadas del original:

- `logo.png` — fondo transparente, para el encabezado y el pie
- `logo-fondo.png` — con el grafito de fondo, por si lo necesitas suelto
- `favicon.png` — el iconito de la pestaña del navegador
- `apple-touch-icon.png` — el icono al guardar la página en un iPhone

Si cambias el logo, reemplaza esos cuatro archivos manteniendo los nombres.

---

## Qué trae el sitio

- **Portada** con tu propuesta y dos botones de acción.
- **Trabajos**: tarjetas con captura, etiquetas y una ventana de detalle por proyecto
  (el reto, lo que construiste y los resultados).
- **Servicios**: los cuatro tipos de trabajo que ofreces.
- **Proceso**: los cuatro pasos, explicados sin tecnicismos.
- **Preguntas**: precio, mensualidad, quién edita el contenido, cobertura.
- **Contacto**: un formulario que arma el mensaje y lo abre en tu WhatsApp
  (no necesita servidor ni base de datos), más el enlace directo al chat.
- Menú para celular, botón flotante de WhatsApp y el engranaje de la marca como
  marca de agua en la portada.
