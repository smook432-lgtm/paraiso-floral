# Floristería Paraíso Floral — Sitio web

Sitio estático listo para publicar en Netlify. Incluye:
- Portada con botón de WhatsApp (número: 314 687 2446)
- Catálogo con filtros y buscador (12 productos de ejemplo en `js/products.js`)
- Botón flotante de WhatsApp
- Espacio para tu logo y fotos de productos

## 1. Agregar tus fotos

Copia tus fotos dentro de la carpeta `images/` con estos nombres (o cambia los nombres en `js/products.js`):

```
images/logo.jpg   (ya está agregado ✔)
images/producto-01.jpg
images/producto-02.jpg
...
images/producto-12.jpg
```

Mientras no subas una foto, la tarjeta del producto muestra automáticamente un ícono de flor 🌸 como marcador temporal ("Foto próximamente"), así que puedes publicar el sitio ya mismo y agregar las fotos después.

Para agregar, quitar o editar productos (nombre, precio, categoría, descripción), edita el archivo `js/products.js`.

## 2. Publicar en Netlify

**Opción rápida (arrastrar y soltar):**
1. Entra a https://app.netlify.com
2. Ve a "Sites" y arrastra esta carpeta completa (`floristeria-paraiso-floral`) al área de despliegue.
3. Netlify te dará una URL tipo `algo-al-azar.netlify.app`.

**Cambiar el subdominio para que diga "floristería en Santa Rosa de Cabal":**
1. En el panel del sitio, ve a `Site configuration > Site details > Change site name`.
2. Escribe algo como `floristeria-santa-rosa-de-cabal` (debe estar disponible).
3. Tu sitio quedará en `https://floristeria-santa-rosa-de-cabal.netlify.app`.

Si más adelante compras un dominio propio (ej. `paraisofloralscr.com`), puedes conectarlo desde `Domain management` en Netlify.

## 3. Número de WhatsApp

El número está configurado en dos archivos:
- `index.html` (botones del encabezado, hero y flotante)
- `js/script.js` (variable `WHATSAPP_NUMBER`, botones "Pedir por WhatsApp" de cada producto)

Actualmente: `573146872446` (57 = Colombia + 314 687 2446).
